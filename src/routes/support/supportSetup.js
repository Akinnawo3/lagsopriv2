import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {Form, FormGroup, Label, Input} from "reactstrap";
import {getTicketTypes} from "Actions/ticketTypeAction";
import {connect} from "react-redux";
import {createSupportTickets} from "Actions/supportAction";
import {getAdmins} from "Actions/adminAction";
import api from "../../environments/environment";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NotificationManager} from "react-notifications";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {verifyUserPermssion} from "../../container/DefaultLayout";

const SupportSetup = ({getTicketTypes, ticketTypes, createSupport, admins, getAdmins, loadingStatus, match}) => {
  const [formData, setFormData] = useState({ticketId: "", forType: "", channel: "", desc: "", status: "", assignedTo: "", email: ""});
  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const {ticketId, forType, channel, desc, status, assignedTo} = formData;
  const [searchData, setSearchData] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [userAuthId, setUserAuthId] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useEffect(() => {
    getTicketTypes();
    getAdmins();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await createSupport(ticketId, channel, desc, status, assignedTo, userAuthId);
    setFormData({ticketId: "", forType: "", channel: "", desc: "", status: "", assignedTo: "", email: ""});
    setSearchData("");
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  useEffect(() => {
    if (focused && searchData.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        searchUser();
      }, 2000);
      return () => clearTimeout(delayDebounceFn);
    } else {
      setIsShow(false);
    }
  }, [searchData]);

  const searchUser = async () => {
    try {
      if (!forType) {
        NotificationManager.error("select user type");
        return;
      }
      setLoading(true);
      const res = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&user_type=${forType}`);
      setSearchedUser(res.data.data);
      setIsShow(true);
      setLoading(false);
    } catch (e) {}
  };

  const handleOption = (user) => {
    setSearchData(`${user.first_name} ${user.last_name}`);
    setUserAuthId(user.auth_id);
    setIsShow(false);
  };

  return (
    <div className="bg-white" style={{minHeight: "99vh"}}>
      <Helmet>
        <title>Create Ticket</title>
        <meta name="description" content="Create Ticket" />
      </Helmet>
      <PageTitleBar title={`Create Tickets`} match={match} />
      <Form onSubmit={(e) => verifyUserPermssion("create_tickets", () => onSubmit(e))}>
        <div className="row  justify-content-around">
          <div className="col-sm-6 bg-white">
            {/*<div className="font-weight-bold pb-5 pt-3" style={{fontSize: '20px'}}>Ticket Details</div>*/}
            <FormGroup>
              <Label>Ticket Type</Label>
              <Input type="select" name="ticketId" value={ticketId} onChange={onChange} required>
                <option value="">Select</option>
                {ticketTypes &&
                  ticketTypes.map((ticket) => (
                    <option key={ticket.support_id} value={ticket.support_id}>
                      {ticket.title}
                    </option>
                  ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Description of ticket </Label>
              <Input type="textarea" name="desc" value={desc} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Status </Label>
              <Input type="select" name="status" value={status} onChange={onChange} required>
                <option value="">Select</option>
                <option value="1">New</option>
                <option value="2">Opened</option>
                <option value="3">In-progress</option>
                <option value="4">Closed</option>
                <option value="5">Unresolved</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Channel</Label>
              <Input type="text" name="channel" value={channel} onChange={onChange} required />
            </FormGroup>
            {/*<FormGroup>*/}
            {/*    <Label>Upload images </Label>*/}
            {/*    <Input type="file"  onChange={onChange} />*/}
            {/*</FormGroup>*/}
          </div>
          <div className="col-sm-5 bg-white">
            <div>
              {/*<div className="font-weight-bold pb-5 font-2x pt-3">User Details</div>*/}
              <FormGroup>
                <Label>User Type</Label>
                <Input type="select" name="forType" value={forType} onChange={onChange} required>
                  <option value="">Select</option>
                  <option value="driver">Driver</option>
                  <option value="rider">Passenger</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="browser">Ticket For</Label>
                <Input
                  onFocus={onFocus}
                  onBlur={onBlur}
                  type="search"
                  className="search-input-lg"
                  name="searchData"
                  value={searchData}
                  onChange={onChangeSearch}
                  placeholder="Search.. name, email, phone number"
                  autoComplete="off"
                  required
                />
                {loading && (
                  <div className="page-loader d-flex justify-content-center mb-30 mt-30">
                    <CircularProgress size={24} />
                  </div>
                )}
                {!loading && searchedUser?.length > 0 && isShow && (
                  <div className="pr-4 w-100" style={{position: "absolute"}}>
                    <div className="bg-white" style={{border: "1px solid #EBEDF2", maxHeight: "200px", overflow: "auto", zIndex: 10, width: "100%"}}>
                      {searchedUser?.length > 0 &&
                        searchedUser.map((user) => (
                          <option onClick={() => handleOption(user)} key={user.auth_id} className="p-2 custom-dropdown">
                            {user.first_name} {user.last_name}
                          </option>
                        ))}
                    </div>
                  </div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Assign To</Label>
                <Input type="select" name="assignedTo" value={assignedTo} onChange={onChange} required>
                  <option value="">Select</option>
                  {admins?.length > 0 &&
                    admins.map((admin) => (
                      <option key={admin.auth_id} value={admin.auth_id}>
                        {admin.first_name} {admin.last_name}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="mt-5 float-right" style={{paddingRight: "15px"}}>
          <Button disabled={loadingStatus} type="submit" variant="contained" className="text-white btn-success">
            {loadingStatus ? "loading.." : "Submit"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    createSupport: (support_id, channel, desc, status, assigned_to, for_id) => dispatch(createSupportTickets(support_id, channel, desc, status, assigned_to, for_id)),
    getAdmins: () => dispatch(getAdmins()),
    getTicketTypes: (page_no, spinner) => dispatch(getTicketTypes(page_no, spinner)),
  };
}

const mapStateToProps = (state) => ({
  ticketTypes: state.ticketTypes.ticketTypes,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  admins: state.admins.admins,
});

export default connect(mapStateToProps, mapDispatchToProps)(SupportSetup);
