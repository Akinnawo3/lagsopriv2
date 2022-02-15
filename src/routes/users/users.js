import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import {deleteUser, getUserCount, getUsers, searchUsers} from "Actions/userAction";
import EmptyData from "Components/EmptyData/EmptyData";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {verifyUserPermssion} from "../../container/DefaultLayout";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Form, FormGroup, Label, Input} from "reactstrap";
import Button from "@material-ui/core/Button";

const Users = ({match, getUsers, loading, users, userCount, getUserCount, deleteUser, searchUsers}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [openedDropdownID, setOpenedDropdownID] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [component, setComponent] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const inputEl = useRef(null);
  useEffect(() => {
    getUsers(1, true);
    getUserCount();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber);
    window.scrollTo(0, 0);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  const onSubmit = () => {
    console.log("v");
  };

  const onDelete = (id) => {
    inputEl.current.open();
    setDeleteId(id);
  };
  const toggle = (id) => {
    openedDropdownID === id ? setOpenedDropdownID("") : setOpenedDropdownID(id);
  };
  const handleOptionCLick = ({editedComponent, oldEmail = "", OldPhoneNumber = ""}) => {
    setComponent(editedComponent);
    setOldEmail(oldEmail);
    setPhoneNumber(OldPhoneNumber);
    setModalOpen(true);
  };

  console.log(users);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Users"} match={match} />
      <RctCollapsibleCard heading="Users" fullBlock>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <SearchComponent getPreviousData={getUsers} getSearchedData={searchUsers} setCurrentPage={setCurrentPage} getCount={getUserCount} />
        </li>
        {!loading && users.length > 0 && (
          <>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {users.map((user, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{user.first_name}</TableCell>
                        <TableCell>{user.last_name}</TableCell>
                        <TableCell>{user.phone_number}</TableCell>
                        <TableCell>{user.user_type}</TableCell>
                        <TableCell>
                          <span className="d-flex">
                            <Dropdown isOpen={openedDropdownID === user?.auth_id} toggle={() => toggle(user.auth_id)}>
                              <DropdownToggle outline={false}>Reset Details</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem header>choose action</DropdownItem>
                                <DropdownItem onClick={() => handleOptionCLick({editedComponent: "email", oldEmail: user.email})}>Change Email</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => handleOptionCLick({editedComponent: "phone_number", OldPhoneNumber: user.phone_number})}>Change Phone Number</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => handleOptionCLick({editedComponent: "password", OldPhoneNumber: user.phone_number})}>Change Password</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                            <button type="button" className="rct-link-btn ml-lg-3 " onClick={() => verifyUserPermssion("delete_user", () => onDelete(user.auth_id))}>
                              <i className="ti-trash text-danger"></i>
                            </button>
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={userCount} onChange={paginate} />
            </div>
          </>
        )}
        {users.length < 1 && <EmptyData />}
      </RctCollapsibleCard>

      <Modal isOpen={modalOpen} toggle={() => onModalClose()}>
        <ModalHeader toggle={() => onModalClose()}>
          Reset {component === "email" && "Email"} {component === "phone_number" && "Phone Number"} {component === "password" && "Password"}
        </ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            {(component === "phone_number" || component === "password") && (
              <FormGroup>
                <Label for="firstName">Phone Number</Label>
                <Input type="text" name="name" value={phoneNumber} required />
              </FormGroup>
            )}
            {component === "phone_number" && (
              <FormGroup>
                <Label for="firstName">New Phone Number</Label>
                <Input type="text" name="name" value={newPhoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} required />
              </FormGroup>
            )}
            {component === "password" && (
              <FormGroup>
                <Label for="firstName">New Password</Label>
                <Input type="text" name="name" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </FormGroup>
            )}
            {component === "email" && (
              <FormGroup>
                <Label for="firstName">Old Email</Label>
                <Input type="text" name="name" value={oldEmail} required />
              </FormGroup>
            )}
            {component === "email" && (
              <FormGroup>
                <Label for="firstName">New Email</Label>
                <Input type="text" name="name" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required />
              </FormGroup>
            )}
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
        message="This will delete User permanently."
        onConfirm={() => {
          deleteUser(deleteId, users);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (page_no, loading) => dispatch(getUsers(page_no, loading)),
    deleteUser: (auth_id, users) => dispatch(deleteUser(auth_id, users)),
    getUserCount: () => dispatch(getUserCount()),
    searchUsers: (searchData) => dispatch(searchUsers(searchData)),
  };
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  userCount: state.users.userCount,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
