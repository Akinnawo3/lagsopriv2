import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Form, FormGroup, Label, Input} from "reactstrap";
import Button from "@material-ui/core/Button";
import Pagination from "react-js-pagination";
import {Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {connect} from "react-redux";
import {createPromoDiscount, deletePromoDiscount, getPromoDiscount, getPromoDiscountCount, updatePromoDiscount, searchPromo} from "../../actions/promoDiscountsAction";
import {Link} from "react-router-dom";
import moment from "moment";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {verifyUserPermssion} from "../../container/DefaultLayout";
const qs = require("qs");
export let onAddUpdateUserModalClose;
const PromoDiscounts = (props) => {
  const {match, getPromoDiscounts, promoDiscountsCount, promoDiscounts, searchPromo, createPromoDiscount, updatePromoDiscount, getPromoDiscountCount, loading, deletePromoDiscount, loadingStatus} =
    props;
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    code_type: "",
    custom_code: "",
    promo_code_owner: "",
    start_date: "",
    expiry_date: "",
    description: "",
    num_of_rides: "",
    users_limit: "",
    discount_type: "",
    discount_value: "",
  });
  const [searchData, setSearchData] = useState("");
  const inputEl = useRef(null);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [excelExport, setExcelExport] = useState([]);

  useEffect(() => {
    if (pageFromQuery === undefined || promoDiscounts.length < 1) {
      getPromoDiscounts(currentPage);
      getPromoDiscountCount();
    }
  }, []);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPromoDiscounts(pageNumber);
    window.scrollTo(0, 0);
  };

  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const {code_type, custom_code, promo_code_owner, start_date, expiry_date, description, num_of_rides, users_limit, discount_type, discount_value} = formData;

  const opnAddNewUserModal = (e) => {
    e.preventDefault();
    setAddNewUserModal(true);
  };

  const opnAddNewUserEditModal = (id) => {
    const editedPromo = promoDiscounts.find((item) => item.promo_code_id === id);
    setUpdateId(id);
    console.log(editedPromo);
    setFormData({
      code_type: editedPromo?.code_type,
      custom_code: editedPromo?.code,
      promo_code_owner: editedPromo?.promo_code_owner,
      start_date: editedPromo?.start_date,
      expiry_date: editedPromo?.expiry_date,
      description: editedPromo?.description,
      num_of_rides: editedPromo?.num_of_rides,
      users_limit: editedPromo?.users_limit,
      discount_type: editedPromo?.discount_type,
      discount_value: editedPromo?.discount_value,
    });
    // setFormData({...formData, });
    // setFormData({...formData, });
    // setFormData({...formData,});
    // setFormData({...formData, num_of_rides: editedPromo?.num_of_rides});
    // setFormData({...formData, users_limit: editedPromo?.users_limit});
    // setFormData({...formData, discount_type: editedPromo?.discount_type});
    // setFormData({...formData, discount_value: editedPromo?.discount_value});
    setAddNewUserModal(true);
    setEditUser(true);
  };

  onAddUpdateUserModalClose = () => {
    setFormData({
      code_type: "",
      custom_code: "",
      promo_code_owner: "",
      start_date: "",
      expiry_date: "",
      description: "",
      num_of_rides: "",
      users_limit: "",
      discount_type: "",
      discount_value: "",
    });
    setUpdateId(null);
    setAddNewUserModal(false);
    setEditUser(false);
  };

  const onDelete = (id) => {
    inputEl.current.open();
    setDeleteId(id);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const apiDataCreate =
      code_type === "custom"
        ? {code_type, custom_code, promo_code_owner, start_date, expiry_date, description, num_of_rides, users_limit, discount_type, discount_value}
        : {code_type, start_date, expiry_date, description, num_of_rides, users_limit, discount_type, discount_value, start_date};
    const apiDataEdit =
      code_type === "custom"
        ? {start_date, expiry_date, description, num_of_rides, users_limit, discount_type, discount_value}
        : {start_date, expiry_date, description, num_of_rides, users_limit, discount_type, discount_value};

    !editUser ? await createPromoDiscount(apiDataCreate) : await updatePromoDiscount(apiDataEdit, updateId);
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  const removeDeleteId = () => {
    setDeleteId(null);
  };

  const getSearchData = (searchData) => {
    searchPromo(searchData, status);
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Discount Promo"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading="Discount Promo" fullBlock>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getPromoDiscounts} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={getPromoDiscountCount} placeHolder="Search promo code" />
          </li>
          <div className="float-right">
            <a href="#" onClick={(e) => verifyUserPermssion("create_promo_code", () => opnAddNewUserModal(e))} color="primary" className="caret btn-sm mr-10">
              Create New Promo <i className="zmdi zmdi-plus"></i>
            </a>
          </div>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Promo Code</TableCell>
                  <TableCell>Code Type</TableCell>
                  <TableCell>Promo Code Owner</TableCell>
                  <TableCell>Users Limit</TableCell>
                  <TableCell>Discount Value</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {promoDiscounts.length > 0 &&
                    promoDiscounts?.map((promoDiscount, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{promoDiscount.code}</TableCell>
                        <TableCell>{promoDiscount.code_type}</TableCell>
                        <TableCell>{promoDiscount.promo_code_owner}</TableCell>
                        <TableCell>{promoDiscount.users_limit}</TableCell>
                        <TableCell>{`${promoDiscount?.discount_type === "amount" ? "₦" : ""} ${promoDiscount.discount_value} ${promoDiscount?.discount_type === "percentage" ? "%" : ""}`}</TableCell>
                        <TableCell>{moment.utc(promoDiscount.start_date).format("ll")}</TableCell>
                        <TableCell>{moment.utc(promoDiscount.expiry_date).format("ll")}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn" onClick={(e) => verifyUserPermssion("update_promo_code", () => opnAddNewUserEditModal(promoDiscount.promo_code_id))}>
                            <i className="ti-pencil"></i>
                          </button>
                          <button type="button" className="rct-link-btn ml-lg-3 text-danger mr-2" onClick={() => verifyUserPermssion("delete_promo_code", () => onDelete(promoDiscount.promo_code_id))}>
                            <i className="ti-trash"></i>{" "}
                          </button>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/promo-discounts/${promoDiscount.promo_code_id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              </TableBody>
            </Table>
            {promoDiscounts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Promo Discount Found</div>}
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            {promoDiscounts.length > 0 && (
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={promoDiscountsCount} onChange={paginate} />
            )}
          </div>
        </RctCollapsibleCard>
      )}
      <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
        <ModalHeader toggle={() => onAddUpdateUserModalClose()}>{editUser ? "Update Promo Discount" : "Create New Promo Discount"}</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            {!editUser && (
              <FormGroup>
                <Label>Promo Type</Label>
                <Input type="select" name="code_type" value={code_type} onChange={onChange} required>
                  <option value="" selected hidden>
                    --Select promo type --
                  </option>
                  <option value="custom" selected={code_type === "custom"}>
                    Custom
                  </option>
                  <option value="generic" selected={code_type === "generic"}>
                    Generic
                  </option>
                </Input>
              </FormGroup>
            )}

            {code_type === "custom" && !editUser && (
              <FormGroup>
                <Label>Custom Code</Label>
                <Input type="text" name="custom_code" value={custom_code} onChange={onChange} />
              </FormGroup>
            )}
            {code_type === "custom" && (
              <FormGroup>
                <Label>Promo Code Owner</Label>
                <Input type="text" name="promo_code_owner" value={promo_code_owner} onChange={onChange} required />
              </FormGroup>
            )}
            <FormGroup>
              <Label>Start Date</Label>
              <Input
                type="date"
                name="start_date"
                // min={getTodayDate()}
                value={moment(start_date).format("YYYY-MM-DD")}
                onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Expiry Date</Label>
              <Input type="date" name="expiry_date" value={moment(expiry_date).format("YYYY-MM-DD")} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input type="text" name="description" value={description} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Number of Rides</Label>
              <Input type="number" name="num_of_rides" value={num_of_rides} onChange={onChange} required min="0" />
            </FormGroup>
            <FormGroup>
              <Label>Users Limit</Label>
              <Input type="number" name="users_limit" value={users_limit} onChange={onChange} required min="0" />
            </FormGroup>
            <FormGroup>
              <Label>Discount value type</Label>
              <Input type="select" name="discount_type" value={discount_type} onChange={onChange} required>
                <option value="" selected hidden>
                  --Select type --
                </option>
                <option value="percentage" selected={discount_type === "percentage"}>
                  Percentage
                </option>
                <option value="amount" selected={discount_type === "amount"}>
                  Amount
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Discount Value</Label>
              <Input type="number" name="discount_value" value={discount_value} onChange={onChange} min="1" max={discount_type === "percentage" ? 100 : ""} required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-success" disabled={loadingStatus}>
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You Want To Delete?"
        message="This will delete user permanently."
        onConfirm={() => {
          deletePromoDiscount(deleteId);
          inputEl.current.close();
        }}
        removeDeleteId={removeDeleteId}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPromoDiscounts: (page_no) => dispatch(getPromoDiscount(page_no)),
    getPromoDiscountCount: () => dispatch(getPromoDiscountCount()),
    createPromoDiscount: (data) => dispatch(createPromoDiscount(data)),
    searchPromo: (searchData) => dispatch(searchPromo(searchData)),
    updatePromoDiscount: (data, id) => dispatch(updatePromoDiscount(data, id)),
    deletePromoDiscount: (id) => dispatch(deletePromoDiscount(id)),
  };
}

const mapStateToProps = (state) => ({
  promoDiscounts: state.promoDiscounts.promoDiscounts,
  promoDiscountsCount: state.promoDiscounts.promoDiscountsCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoDiscounts);
