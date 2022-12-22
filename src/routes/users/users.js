import React, { useState, useEffect, Fragment, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Badge } from "reactstrap";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { deleteUser, getUserCount, getUsers, searchUsers, ResetUserDetails, changeKycStatus, getUserExport } from "Actions/userAction";
import EmptyData from "Components/EmptyData/EmptyData";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import { verifyUserPermssion } from "../../container/DefaultLayout";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { sendVerificationRequest } from "Actions/idVerificationAction";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import Button from "@material-ui/core/Button";
import Spinner from "Components/spinner/Spinner";
import emailMessages from "Assets/data/email-messages/emailMessages";
import { getStatusColorKYC, getTodayDate } from "Helpers/helpers";
import { Button } from "reactstrap";
const qs = require("qs");
export let onUserDetailsResetModalClose;

const Users = ({
  history,
  match,
  getUsers,
  loading,
  loadingStatus,
  users,
  userCount,
  getUserCount,
  deleteUser,
  searchUsers,
  ResetUserDetails,
  dataMode,
  sendVerificationRequest,
  verificationResult,
  changeKycStatus,
  getUserExport,
  forNotification,
}) => {
  const pageFromQuery = qs.parse(history?.location?.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [deleteId, setDeleteId] = useState(null);
  const [openedDropdownID, setOpenedDropdownID] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [component, setComponent] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [idVerificationModalOpen, setIdVerificationModalOpen] = useState(false);
  const [authId, setAuthId] = useState("");
  const [kycStatus, setKycStatus] = useState("");
  const [argument, setArgument] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const inputEl = useRef(null);
  const exportRef = useRef(null);

  useEffect(() => {
    if (pageFromQuery === undefined || users.length < 1) {
      getUsers(currentPage, true);
      getUserCount();
    }
  }, []);

  const isTest = dataMode === "test" ? true : false;

  const paginate = (pageNumber) => {
    history.push(`${history?.location?.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getUsers(pageNumber);
    window.scrollTo(0, 0);
  };

  onUserDetailsResetModalClose = () => {
    setModalOpen(false);
  };

  const triggerIdVerifcation = (type, user, kycStatus) => {
    setUser(user);
    setAuthId(user?.auth_id);
    setKycStatus(kycStatus);
    // !isTest &&
    sendVerificationRequest(type, user?.nin_id?.value, user.first_name, user?.last_name);
    setIdVerificationModalOpen(true);
  };

  const onDelete = (id) => {
    setArgument(1);
    setTitle("Are you sure you want to delete this user?");
    setMessage("This user will be deleted permanently.");
    inputEl.current.open();
    setDeleteId(id);
  };
  const verifyId = (auth_id, kyc_Status) => {
    setArgument(2);
    setTitle("Are you sure you want to update KYC status?");
    setMessage("This user's KYC status will be updated permanently.");
    setIdVerificationModalOpen(false);
    auth_id && setAuthId(auth_id);
    kyc_Status && setKycStatus(kyc_Status);
    inputEl.current.open();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let detailType;
    let newData;
    if (component === "email") {
      detailType = "email";
      newData = newEmail;
    } else if (component === "phone_number") {
      detailType = "phone number";
      newData = newPhoneNumber;
    } else {
      detailType = "password";
      newData = password;
    }
    const emailData = {
      type: "generic",
      subject: "Details Reset",
      message: emailMessages.userDetailResetMsg(userFirstName, detailType, newData),
      name: userFirstName,
      email: oldEmail,
    };
    component === "email" && ResetUserDetails({ component, old_email: oldEmail, new_email: newEmail }, emailData);
    component === "phone_number" && ResetUserDetails({ component, old_phone_number: phoneNumber, new_phone_number: newPhoneNumber }, emailData);
    component === "password" && ResetUserDetails({ component, phone_number: phoneNumber, password }, emailData);
  };

  const toggle = (id, name) => {
    setNewEmail("");
    setNewPhoneNumber("");
    setPassword("");
    openedDropdownID === id ? setOpenedDropdownID("") : setOpenedDropdownID(id);
    setUserFirstName(name);
  };
  const handleOptionCLick = ({ editedComponent, oldEmail = "", OldPhoneNumber = "" }) => {
    setComponent(editedComponent);
    setOldEmail(oldEmail);
    setPhoneNumber(OldPhoneNumber);
    setModalOpen(true);
  };

  const onConfirm = () => {
    if (argument === 1) {
      deleteUser(deleteId, users);
    } else if (argument === 2) {
      changeKycStatus(authId, kycStatus);
    }
    console.log(argument);
    inputEl.current.close();
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getUserExport("", "", "", startDate, endDate);
  };

  const handleFilter = () => {
    getUsers(1, false, startDate, endDate);
    getUserCount(startDate, endDate);
  };

  return (
    <div className="table-wrapper">
      {!forNotification && <PageTitleBar title={"Users"} match={match} />}
      <RctCollapsibleCard heading="Users" fullBlock item={users} currentPage={currentPage} totalCount={userCount}>
        <div className="d-flex justify-content-between">
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getUsers} getSearchedData={searchUsers} setCurrentPage={setCurrentPage} getCount={getUserCount} />
          </li>
          <div>
            <li className="list-inline-item search-icon d-inline-block mb-2">
              <small className="fw-bold mr-2">From</small>
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue={startDate}
                min="2018-01-01"
                max={getTodayDate()}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <small className="fw-bold mr-2">To</small>
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue={endDate}
                min="2018-01-01"
                max={getTodayDate()}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </li>
            <Button onClick={() => handleFilter()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="success">
              Apply filter
            </Button>
          </div>
          {!forNotification && (
            <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>
        {!loading && users.length > 0 && (
          <>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>NIN </TableCell>
                    <TableCell>KYC status</TableCell>
                    {!forNotification && <TableCell>Action</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {users.map((user, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{user.first_name}</TableCell>
                        <TableCell>{user.last_name}</TableCell>
                        <TableCell>{user.phone_number}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.user_type}</TableCell>
                        <TableCell className="fw-bold text"> {user?.nin_id?.value}</TableCell>
                        <TableCell className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <Badge color={getStatusColorKYC(user.kyc_status)}>
                                {user.kyc_status === 0 && "Pending"}
                                {user.kyc_status === 1 && "Verified"}
                                {user.kyc_status === 2 && "Suspended"}
                              </Badge>
                            </div>
                            {!forNotification && (
                              <div className="fw-bold text muted ml-1 ">
                                {(user.kyc_status === 0 || !user.kyc_status) && (
                                  <button onClick={() => triggerIdVerifcation("nin", user, "1")} className="ml-2 btn btn-success p-0 px-2">
                                    <small>Verify</small>
                                  </button>
                                )}
                                {user.kyc_status === 1 && (
                                  // <span className="fw-bold text muted ml-1 text-danger">
                                  //    <Button onClick={() => verifyId(user?.auth_id, "2")} className="align-items-center justify-content-center ml-2" color="danger">
                                  //       Suspend
                                  //    </Button>
                                  // </span>
                                  <button onClick={() => verifyId(user?.auth_id, "2")} className="ml-2 btn btn-danger p-0 px-2">
                                    <small>Suspend</small>
                                  </button>
                                )}
                                {user.kyc_status === 2 && (
                                  // <span className="fw-bold text muted ml-1 text-info " onClick={() => verifyId(user?.auth_id, "1")}>
                                  //    Re-activate
                                  // </span>
                                  <button onClick={() => verifyId(user?.auth_id, "1")} className="ml-2 btn btn-success p-0 px-2">
                                    <small>Re-activate</small>
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        {!forNotification && (
                          <TableCell>
                            <span className="d-flex">
                              <Dropdown isOpen={openedDropdownID === user?.auth_id} toggle={() => toggle(user.auth_id, user.first_name)}>
                                <DropdownToggle outline={false}>Reset Details</DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem header>choose action</DropdownItem>
                                  <DropdownItem onClick={() => handleOptionCLick({ editedComponent: "email", oldEmail: user.email })}>Change Email</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem onClick={() => handleOptionCLick({ editedComponent: "phone_number", OldPhoneNumber: user.phone_number, oldEmail: user.email })}>
                                    Change Phone Number
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem onClick={() => handleOptionCLick({ editedComponent: "password", OldPhoneNumber: user.phone_number, oldEmail: user.email })}>
                                    Change Password
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                              <button type="button" className="rct-link-btn ml-lg-3 " onClick={() => verifyUserPermssion("delete_user", () => onDelete(user.auth_id))}>
                                <i className="ti-trash text-danger"></i>
                              </button>
                            </span>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
              <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={userCount} onChange={paginate} />
              </div>
            </div>
          </>
        )}
        {users.length < 1 && <EmptyData />}
      </RctCollapsibleCard>

      <Modal size="md" isOpen={idVerificationModalOpen} toggle={() => setIdVerificationModalOpen(!idVerificationModalOpen)}>
        <ModalHeader toggle={() => setIdVerificationModalOpen(!idVerificationModalOpen)}>Verify NIN</ModalHeader>
        <ModalBody style={{ minHeight: 100 }}>
          {loadingStatus && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Spinner />
              <h3 className="fw-bold mt-3">verifying id </h3>
            </div>
          )}
          {!loadingStatus && (
            <div>
              {isTest && (
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="fw-bold text-danger">This is test enironment so there is no verification API call </div>
                  </div>
                  <div className="mt-2 text-right">
                    <button className=" btn rounded btn-primary" onClick={() => verifyId()}>
                      Verify NIN
                    </button>
                  </div>
                </div>
              )}
              {verificationResult?.status === "error" && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="fw-bold text-danger">{verificationResult?.msg} </div>
                </div>
              )}
              {verificationResult?.status === "error" && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="fw-bold text-danger">{verificationResult?.message} </div>
                </div>
              )}
              {verificationResult?.status === "success" && (
                <div>
                  <ul className="list-group">
                    <div className="rounded rounded-circle">
                      <img src={`data:image/png;base64, ${verificationResult?.data?.photo}`} alt="Red dot" />
                      {/* <img alt="" src={verificationResult?.data?.photo} /> */}
                    </div>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Name</strong>
                      </span>
                      {`${verificationResult?.data?.firstname} ${verificationResult?.data?.middlename} ${verificationResult?.data?.lastname}`}
                    </li>

                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>First Name Matches Reg. Details</strong>
                      </span>
                      {`${verificationResult?.data?.firstname?.toUpperCase() === user?.first_name?.toUpperCase() ? "Yes" : "No"} `}
                    </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Last Name Matches Reg. Details</strong>
                      </span>
                      {`${verificationResult?.data?.lastname?.toUpperCase() === user?.last_name?.toUpperCase() ? "Yes" : "No"} `}
                    </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Phone Number Matches Reg. Details</strong>
                      </span>
                      {`${verificationResult?.data?.phone === user?.phone_number ? "Yes" : "No"} `}
                    </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Birth Date</strong>
                      </span>
                      {`${verificationResult?.data?.birthdate} `}
                    </li>
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <strong>Gender</strong>
                      </span>
                      {`${verificationResult?.data?.gender} `}
                    </li>
                    <div className="mt-2 text-right">
                      <button className=" btn rounded btn-primary" onClick={() => verifyId(user?.auth_id, "1")}>
                        Verify NIN
                      </button>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          )}
        </ModalBody>
      </Modal>

      <Modal isOpen={modalOpen} toggle={() => onUserDetailsResetModalClose()}>
        <ModalHeader toggle={() => onUserDetailsResetModalClose()}>
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
      <DeleteConfirmationDialog ref={inputEl} title={title} message={message} onConfirm={onConfirm} />
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (page_no, loading, start_date, end_date) => dispatch(getUsers(page_no, loading, start_date, end_date)),
    deleteUser: (auth_id, users) => dispatch(deleteUser(auth_id, users)),
    getUserCount: (start_date, end_date) => dispatch(getUserCount(start_date, end_date)),
    getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),
    searchUsers: (searchData) => dispatch(searchUsers(searchData)),
    ResetUserDetails: (body, emailData) => dispatch(ResetUserDetails(body, emailData)),
    changeKycStatus: (auth_id, kyc_status) => dispatch(changeKycStatus(auth_id, kyc_status)),
    sendVerificationRequest: (id_type, id_value, first_name, last_name) => dispatch(sendVerificationRequest(id_type, id_value, first_name, last_name)),
  };
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  userCount: state.users.userCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  dataMode: state.authUser.userProfile.data_mode,
  verificationResult: state.idVerification.verificationResult,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
