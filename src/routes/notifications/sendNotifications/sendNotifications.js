import React, { useState } from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { Button, Card, CardBody, Form, Input } from "reactstrap";
import Users from "Routes/users/users";
import ActiveDrivers from "../../drivers/activeDrivers";
import Passengers from "../../passengers/passengers";
import { connect } from "react-redux";
import { sendNotification } from "../../../actions/messagesAction";
export let resetNotificationData;
const SendNotifications = ({ match, loadingStatus, history, sendNotification }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [authIdList, setAuthIdList] = useState([]);
  const [recipients, setRecipients] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = title
      ? authIdList.map((item) => ({
          title,
          message,
          auth_id: item,
        }))
      : authIdList.map((item) => ({
          message,
          auth_id: item,
        }));
        console.log(data)
    sendNotification({data});
  }

  const updateList = (e) => {
    if (e.target.checked) {
      setAuthIdList([...authIdList, e.target.value]);
    } else {
      setAuthIdList(authIdList.filter((item) => item !== e.target.value));
    }
  };

  resetNotificationData = () => {
    setTitle("");
    setMessage("");
    setAuthIdList([]);
    setRecipients("");
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Send Notification"} match={match} />
      <Form onSubmit={handleSubmit}>
        <Card className="mx-auto mb-4" style={{ maxWidth: 800 }}>
          <CardBody>
            <div className="">
              <small className="fw-bold "> Title</small>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="p-1 px-4 w-100" />
            </div>
            <div className="mt-3">
              <small className="fw-bold ">Message</small>
              <Input type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} className="p-1 px-4 w-100" required />
            </div>
            <div className="mt-3">
              <small className="fw-bold ">Recipients</small>
              <Input
                type="select"
                value={recipients}
                onChange={(e) => {
                  history.push(`${history?.location?.pathname}`);
                  setAuthIdList([]);
                  if (e.target.value === "user" || e.target.value === "driver" || e.target.value === "rider") {
                    setAuthIdList([e.target.value]);
                  }
                  setRecipients([e.target.value]);
                }}
                className="p-1 px-4 w-100"
              >
                <option value="" hidden>
                  --Select Recipients --
                </option>
                <option value="user">All Users</option>
                <option value="driver">All Drivers</option>
                <option value="rider">All Riders</option>
                <option value="selected_users">Selected Users</option>
                <option value="selected_drivers">Selected Drivers</option>
                <option value="selected_riders">Selected Riders</option>
              </Input>
            </div>
          </CardBody>
        </Card>
        <div className="mx-auto" style={{ maxWidth: 800 }}>
          {recipients[0] === "selected_users" && <Users forNotification history={history} updateList={updateList} authIdList={authIdList} />}
          {recipients[0] === "selected_drivers" && <ActiveDrivers forNotification history={history} updateList={updateList} authIdList={authIdList} />}
          {recipients[0] === "selected_riders" && <Passengers forNotification history={history} updateList={updateList} authIdList={authIdList} />}
          <div className="mt-3 d-flex justify-content-end mb-4">
            <Button disabled={loadingStatus} style={{ height: "30px" }} className="align-items-center justify-content-center" color="success">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    sendNotification: (page_no, spinner, start_date, end_date) => dispatch(sendNotification(page_no, spinner, start_date, end_date)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});
export default connect(mapStateToProps, mapDispatchToProps)(SendNotifications);
