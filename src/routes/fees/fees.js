import React, { useState, useEffect, Fragment, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Button from "@material-ui/core/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import { CSVLink } from "react-csv";
import { createFee, deleteFee, getFees, updateFee } from "Actions/feesAction";
import EmptyData from "Components/EmptyData/EmptyData";

const Fees = (props) => {
  const { match, getFees, fees, createFee, updateFee, loading, deleteFee } =
    props;
  const [addNewFeeModal, setAddNewFeeModal] = useState(false);
  const [editFee, setEditFee] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({ name: "", desc: "", amount: "" });
  const inputEl = useRef(null);
  const [excelExport, setExcelExport] = useState([]);

  useEffect(() => {
    getFees(true);
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, desc, amount } = formData;

  const opnAddNewFeeModal = (e) => {
    e.preventDefault();
    setAddNewFeeModal(true);
  };

  const opnAddNewFeeEditModal = (fee_id) => {
    fees.map((fee) => {
      if (fee.fee_id === fee_id) {
        setFormData({
          name: fee.name,
          desc: fee.desc,
          amount: fee.amount,
        });
        setUpdateId(fee.fee_id);
      }
    });
    setAddNewFeeModal(true);
    setEditFee(true);
  };

  console.log(fees);
  const onAddUpdateFeeModalClose = () => {
    setFormData({
      fee: "",
      type: "",
      desc: "",
      amount: "",
    });
    setUpdateId(null);
    setAddNewFeeModal(false);
    setEditFee(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    onAddUpdateFeeModalClose();
    !editFee
      ? await createFee(name, amount, desc)
      : await updateFee(updateId, name, amount, desc);
  };

  useEffect(() => {
    if (fees) {
      let result = fees.map((fee) => {
        return {
          Fee: fee["name"],
          Type: fee["tag"],
          Description: fee["desc"],
          Amount: fee["amount"],
        };
      });
      setExcelExport(result);
    }
  }, [fees]);

  return (
    <div className="table-wrapper">
      {/* <PageTitleBar title={"Fees"} match={match} /> */}
      {!loading && fees.length > 0 && (
        // <RctCollapsibleCard heading="Fees" fullBlock>
        <>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <IconButton mini="true" className="search-icon-btn">
              <i className="zmdi zmdi-search"></i>
            </IconButton>
            <MobileSearchForm />
          </li>
          <div className="float-right mb-3">
            <CSVLink
              // headers={headers}
              data={excelExport}
              filename={"fees.csv"}
              className="btn-sm btn-outline-default mr-10 bg-primary text-white"
              target="_blank"
            >
              <i className="zmdi zmdi-download mr-2"></i>
              Export to Excel
            </CSVLink>
            {/*<a href="#" onClick={(e) => opnAddNewFeeModal(e)} color="primary" className="caret btn-sm mr-10">Create New Fee <i className="zmdi zmdi-plus"></i></a>*/}
          </div>
          <div className="table-responsive" style={{ minHeight: "50vh" }}>
            <ul className="list-group">
              {fees.map((fee, key) => (
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <div>{fee.name} </div>
                  </span>
                  <strong>
                    {fee.amount} <span className="ml-2"></span>{" "}
                    <button
                      type="button"
                      className="rct-link-btn"
                      onClick={(e) => opnAddNewFeeEditModal(fee.fee_id)}
                    >
                      <i className="ti-pencil"></i>
                    </button>
                  </strong>
                </li>
              ))}
            </ul>
          </div>
        </>

        // </RctCollapsibleCard>
      )}
      {!loading && fees.length < 1 && <EmptyData />}

      <Modal isOpen={addNewFeeModal} toggle={() => onAddUpdateFeeModalClose()}>
        <ModalHeader toggle={() => onAddUpdateFeeModalClose()}>
          {editFee ? "Update Class Type" : "Create New Class Type"}
        </ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">Fee</Label>
              <Input
                type="text"
                name="name"
                defaultValue={name}
                onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">Amount</Label>
              <Input
                type="text"
                name="amount"
                defaultValue={amount}
                onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Description</Label>
              <Input
                type="textarea"
                name="desc"
                defaultValue={desc}
                onChange={onChange}
                required
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              variant="contained"
              className="text-white btn-success"
            >
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You Want To Delete?"
        message="This will delete fee permanently."
        onConfirm={() => {
          deleteFee(deleteId);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getFees: (spinner) => dispatch(getFees(spinner)),
    createFee: (name, amount, desc) => dispatch(createFee(name, amount, desc)),
    updateFee: (id, name, amount, desc) =>
      dispatch(updateFee(id, name, amount, desc)),
    deleteFee: (id) => dispatch(deleteFee(id)),
  };
}

const mapStateToProps = (state) => ({
  fees: state.fees.fees,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Fees);
