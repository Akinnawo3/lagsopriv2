/**
 * Emergency Numbers
 */
import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Form, FormGroup, Label, Input} from "reactstrap";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Button from "@material-ui/core/Button";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {deleteSOSNumber, getSOSNumber, setSOSNumber} from "Actions/emergencyAction";
import EmptyData from "Components/EmptyData/EmptyData";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {verifyUserPermssion} from "../../container/DefaultLayout";

const EmergencyNumber = ({match, setSOSNumber, getSOSNumber, sosNumbers, loading, deleteSOSNumber}) => {
  const [number, setNumber] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const inputEl = useRef(null);

  useEffect(() => {
    getSOSNumber(true);
  }, []);

  console.log(sosNumbers);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsModal(false);
    await setSOSNumber(number);
    setNumber("");
  };

  const onDelete = (number) => {
    inputEl.current.open();
    setDeleteId(number);
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Emergency Numbers"} match={match} />
      <RctCollapsibleCard heading={sosNumbers?.phone_numbers?.length > 0 ? "Emergency Numbers" : null} fullBlock style={{minHeight: "70vh"}}>
        <div className="float-right">
          <a href="#" onClick={(e) => verifyUserPermssion("create_emergency_numbers", () => setIsModal(true))} color="primary" className="caret btn-sm mr-10">
            Add New SOS Number <i className="zmdi zmdi-plus"></i>
          </a>
        </div>
        {!loading && sosNumbers.phone_numbers?.length > 0 && (
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {sosNumbers.phone_numbers?.length > 0 &&
                    sosNumbers.phone_numbers.map((data) => (
                      <TableRow hover key={data}>
                        <TableCell>{data}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn ml-lg-3 text-danger ml-2" onClick={() => verifyUserPermssion("delete_emergency_number", () => onDelete(data))}>
                            <i className="ti-trash"></i>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
        )}
      </RctCollapsibleCard>
      {sosNumbers.phone_numbers?.length < 1 && <EmptyData />}
      <Modal isOpen={isModal} toggle={() => setIsModal(false)}>
        <ModalHeader toggle={() => setIsModal(false)}>Add SOS Number</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">Number</Label>
              <Input type="number" name="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
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
        title="Are You Sure You??Want To Delete?"
        message="This will delete Number permanently."
        onConfirm={() => {
          deleteSOSNumber(deleteId);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSOSNumber: (spinner) => dispatch(getSOSNumber(spinner)),
    deleteSOSNumber: (number) => dispatch(deleteSOSNumber(number)),
    setSOSNumber: (number) => dispatch(setSOSNumber(number)),
  };
}

const mapStateToProps = (state) => ({
  sosNumbers: state.sos.sosNumbers,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyNumber);
