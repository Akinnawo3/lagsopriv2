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
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {connect} from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import LinearProgress from "@material-ui/core/LinearProgress";
import {createBookingType, deleteBookingType, getBookingTypes, updateBookingType} from "../../actions/bookingTypesAction";

const BookingTypes = (props) => {
  const {match, getBookingTypes, bookingTypes, createBookingType, updateBookingType, loading, deleteBookingType, loadingStatus} = props;
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({trip_name: "", trip_description: ""});
  const [searchData, setSearchData] = useState("");
  const inputEl = useRef(null);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [excelExport, setExcelExport] = useState([]);

  useEffect(() => {
    getBookingTypes();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const {trip_name, trip_description} = formData;

  const opnAddNewUserModal = (e) => {
    e.preventDefault();
    setAddNewUserModal(true);
  };

  const opnAddNewUserEditModal = (id) => {
    bookingTypes.map((bookingType) => {
      if (bookingType.id === id) {
        setFormData({
          trip_name: bookingType.trip_name,
          trip_description: bookingType.trip_description,
        });
        setUpdateId(bookingType.id);
      }
    });
    setAddNewUserModal(true);
    setEditUser(true);
  };

  const onAddUpdateUserModalClose = () => {
    setFormData({
      trip_name: "",
      trip_description: "",
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
    onAddUpdateUserModalClose();
    !editUser ? await createBookingType(trip_name, trip_description) : await updateBookingType(updateId, trip_name, trip_description);
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  useEffect(() => {
    if (searchData && bookingTypes) {
      setCurrentPage(1);
      const search = bookingTypes.filter((bookingType) => {
        return bookingType.trip_name.toLowerCase().includes(searchData.toLowerCase());
      });
      setPosts(search);
    } else if (searchData === "") {
      setPosts(bookingTypes.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)));
    }
  }, [searchData]);

  useEffect(() => {
    if (bookingTypes) {
      setPosts(bookingTypes.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)));
      let result = bookingTypes.map((bookingType) => {
        return {
          Name: bookingType["trip_name"],
          Description: bookingType["trip_description"],
        };
      });
      setExcelExport(result);
    }
  }, [bookingTypes]);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"BookingTypes"} match={match} />
      {loadingStatus && <LinearProgress />}
      {loading && <Spinner />}
      {!loading && (
        <RctCollapsibleCard heading="BookingTypes" fullBlock item={currentPosts} currentPage={currentPage} totalCount={postsPerPage}>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <div className="search-wrapper">
              <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
            </div>
            <IconButton mini="true" className="search-icon-btn">
              <i className="zmdi zmdi-search"></i>
            </IconButton>
            <MobileSearchForm
              // isOpen={isMobileSearchFormVisible}
              onClose={() => this.setState({isMobileSearchFormVisible: false})}
            />
          </li>
          <div className="float-right">
            <CSVLink
              // headers={headers}
              data={excelExport}
              filename={"bookingTypes.csv"}
              className="btn-sm btn-outline-default mr-10 bg-primary text-white"
              target="_blank"
            >
              <i className="zmdi zmdi-download mr-2"></i>
              Export to Excel
            </CSVLink>
            {/*<CSVLink*/}
            {/*    // headers={headers}*/}
            {/*    data={sampleData}*/}
            {/*    filename={"sampleAdmins.csv"}*/}
            {/*    className="btn-sm btn-outline-default mr-10 bg-success text-white"*/}
            {/*    target="_blank"*/}
            {/*>*/}
            {/*    <i className="zmdi zmdi-download mr-2"></i>*/}

            {/*    Sample excel to upload*/}
            {/*</CSVLink>*/}
            {/*<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>*/}
            <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">
              Create New BookingType <i className="zmdi zmdi-plus"></i>
            </a>
          </div>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {posts &&
                    currentPosts.map((bookingType, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{bookingType.trip_name}</TableCell>
                        <TableCell>{bookingType.trip_description}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(bookingType.id)}>
                            <i className="ti-pencil"></i>
                          </button>
                          <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(bookingType.id)}>
                            <i className="ti-close"></i>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              </TableBody>
            </Table>
            {posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Booking Type Found</div>}
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            {posts.length > 0 && (
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={postsPerPage} totalItemsCount={posts.length} onChange={paginate} />
            )}
          </div>
        </RctCollapsibleCard>
      )}
      <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
        <ModalHeader toggle={() => onAddUpdateUserModalClose()}>{editUser ? "Update Booking Type" : "Create New Booking Type"}</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">Name</Label>
              <Input type="text" name="trip_name" value={trip_name} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Description</Label>
              <Input type="textarea" name="trip_description" value={trip_description} onChange={onChange} required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-success">
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
          deleteBookingType(deleteId);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getBookingTypes: () => dispatch(getBookingTypes()),
    createBookingType: (trip_name, trip_description) => dispatch(createBookingType(trip_name, trip_description)),
    updateBookingType: (id, trip_name, trip_description) => dispatch(updateBookingType(id, trip_name, trip_description)),
    deleteBookingType: (id) => dispatch(deleteBookingType(id)),
  };
}

const mapStateToProps = (state) => ({
  bookingTypes: state.bookingTypes.bookingTypes,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingTypes);
