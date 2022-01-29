import React, {useState, useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import "../../assets/scss/_notifications.scss";
import notification from "../../assets/img/notification.jpg";
import {connect} from "react-redux";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {getNotifications} from "../../actions/notificationAction";
import EmptyData from "Components/EmptyData/EmptyData";

const Notifications = ({match, notifications, getNotifications, authUserProfile, loading, loadingStatus}) => {
  const [items, setItems] = useState(Array.from({length: 6}));
  useEffect(() => {
    getNotifications(false, 1, authUserProfile.user_type);
  }, []);

  console.log(notifications);

  return (
    <div>
      <PageTitleBar title={"Notifications"} match={match} />
      {loadingStatus && (
        <SkeletonTheme baseColor="#ffff" highlightColor="#EFF1F3">
          {items.map((item) => (
            <div className="d-flex align-items-center item  border-bottom">
              <div className=" mr-2 ">
                <Skeleton width={550} height={70} />
              </div>
            </div>
          ))}
        </SkeletonTheme>
      )}

      {!loadingStatus && notifications.length > 0 && (
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
      )}
      {!loadingStatus && notifications.length === 0 && <EmptyData />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getNotifications: (spinner, page, userType) => dispatch(getNotifications(spinner, page, userType)),
  };
}

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
  authUserProfile: state.authUser.userProfile,
  loadingStatus: state.loading.loadingStatus,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
