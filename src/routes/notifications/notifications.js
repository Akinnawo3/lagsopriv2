import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import "../../assets/scss/_notifications.scss";
import notification from "../../assets/img/notification.jpg";

const Notifications = ({match}) => {
  return (
    <div>
      <PageTitleBar title={"Notifications"} match={match} />
      <section className="section-50">
        <div className="container">
          <div className="notification-ui_dd-content">
            <div className="notification-list notification-list--unread">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src={notification} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>John Doe</b> reacted to your post
                  </p>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-ui_dd-content">
            <div className="notification-list notification-list--unread">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src={notification} alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>John Doe</b> reacted to your post
                  </p>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center">
            <a href="#!" className="dark-link">
              Load more activity
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Notifications;
