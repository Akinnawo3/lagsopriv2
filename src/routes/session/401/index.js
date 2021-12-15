import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import QueueAnim from "rc-queue-anim";

export default class NotFound extends Component {
  render() {
    return (
      <div className="table-wrapper">
        <QueueAnim type="bottom" duration={2000}>
          <div className="error-wrapper" key="1">
            <AppBar position="static" className="session-header">
              <Toolbar>
                <div className="container">
                  <div className="d-flex justify-content-between"></div>
                </div>
              </Toolbar>
            </AppBar>
            <div className="session-inner-wrapper">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 mx-auto">
                  <div className="error-body text-center">
                    <h2 className="oops">Oops.. </h2>
                    <h2 className="bold mb-0">401</h2>
                    <h2 className="error-msg mb-30">Access Denied</h2>
                    <h4 className="mb-50">
                      {" "}
                      Looks like you have navigated to a Page you are not granted permission to access . Our Application <br />
                      cannot help you here.
                    </h4>
                    <Button component={Link} to="/" variant="contained" className="btn-danger btn-lg">
                      Go To Home Page
                    </Button>

                    <button>giwj ejfnwerj efjnvero</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </QueueAnim>
      </div>
    );
  }
}
