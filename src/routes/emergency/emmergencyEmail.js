/**
 * Emergency Numbers
 */
import React, { useState, useEffect, Fragment, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Form, FormGroup, Label, Input } from "reactstrap";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Button from "@material-ui/core/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {
  deleteSOSEmail,
  getSOSNumber,
  setSOSEmail,
} from "Actions/emergencyAction";
import EmptyData from "Components/EmptyData/EmptyData";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const EmergencyEmail = ({
  match,
  setSOSEmail,
  getSOSNumber,
  sosNumbers,
  loading,
  deleteSOSEmail,
}) => {
  const [email, setEmail] = useState("");
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
    await setSOSEmail(email);
    setEmail("");
  };

  const onDelete = (email) => {
    inputEl.current.open();
    setDeleteId(email);
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Emergency Emails"} match={match} />
      <RctCollapsibleCard
        heading={sosNumbers?.emails?.length > 0 ? "Emergency Emails" : null}
        fullBlock
        style={{ minHeight: "70vh" }}
      >
        <div className="float-right">
          <a
            href="#"
            onClick={(e) => setIsModal(true)}
            color="primary"
            className="caret btn-sm mr-10"
          >
            Add New SOS Email <i className="zmdi zmdi-plus"></i>
          </a>
        </div>
        {!loading && sosNumbers.emails?.length > 0 && (
          <div className="table-responsive" style={{ minHeight: "50vh" }}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Email </TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {sosNumbers.emails?.length > 0 &&
                    sosNumbers.emails.map((data) => (
                      <TableRow hover key={data}>
                        <TableCell>{data}</TableCell>
                        <TableCell>
                          <button
                            type="button"
                            className="rct-link-btn ml-lg-3 text-danger ml-2"
                            onClick={() => onDelete(data)}
                          >
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
      {sosNumbers.emails?.length < 1 && <EmptyData />}
      <Modal isOpen={isModal} toggle={() => setIsModal(false)}>
        <ModalHeader toggle={() => setIsModal(false)}>
          Add SOS Email
        </ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">EMail</Label>
              <Input
                type="email"
                name="tel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
        message="This will delete Number permanently."
        onConfirm={() => {
          deleteSOSEmail(deleteId);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSOSNumber: (spinner) => dispatch(getSOSNumber(spinner)),
    deleteSOSEmail: (email) => dispatch(deleteSOSEmail(email)),
    setSOSEmail: (email) => dispatch(setSOSEmail(email)),
  };
}

const mapStateToProps = (state) => ({
  sosNumbers: state.sos.sosNumbers,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyEmail);
