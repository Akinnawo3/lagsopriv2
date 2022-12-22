import React, { useState } from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { Card, CardBody, Form, Input } from "reactstrap";
import Users from "Routes/users/users";
import ActiveDrivers from "../../drivers/activeDrivers";
import Passengers from "../../passengers/passengers";
const SendNotifications = ({ match }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [authId, setAuthId] = useState("");
  const [recipients, setRecipients] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
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
              <Input type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} className="p-1 px-4 w-100" />
            </div>
            <div className="mt-3">
              <small className="fw-bold ">Recipients</small>
              <Input type="select" value={recipients} onChange={(e) => setRecipients(e.target.value)} className="p-1 px-4 w-100">
                <option value="" hidden>
                  --Select Recipients --
                </option>
                <option value="users">All Users</option>
                <option value="drivers">All Drivers</option>
                <option value="riders">All Riders</option>
                <option value="selected_users">Selected Users</option>
                <option value="selected_drivers">Selected Drivers</option>
                <option value="selected_riders">Selected Riders</option>
              </Input>
            </div>
          </CardBody>
        </Card>
        <div className="mx-auto" style={{ maxWidth: 800 }}>
          {recipients === "selected_users" && <Users forNotification />}
          {recipients === "selected_drivers" && <ActiveDrivers forNotification />}
          {recipients === "selected_riders" && <Passengers forNotification />}
        </div>

        {/* <div className="mt-3 d-flex justify-content-end">
          <Button style={{ height: "30px" }} className="align-items-center justify-content-center" color="success">
            Submit
          </Button>
        </div> */}
      </Form>
    </div>
  );
};
export default SendNotifications;
