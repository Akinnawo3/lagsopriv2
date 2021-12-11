import React, {useEffect, useState} from "react";
import {Badge, Modal, ModalBody, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getTrip} from "Actions/tripAction";
import {formatTime, getActualAddress} from "Helpers/helpers";
import {Link} from "react-router-dom";
import {getPromoDiscountDetails} from "../../actions/promoDiscountsAction";
import {calculatePostDate} from "Helpers/helpers";
import moment from "moment";

const PromoDiscountDetails = ({getPromoDiscountDetails, match, loading, location, promoDetails}) => {
  const [isModal, setIsModal] = useState(false);
  const [riderDetails, setRiderDetails] = useState({});
  const [actualDropoffAddress, setActualDropoffAddress] = useState("");

  //only available for cancelled trips, serves the purpose of the trip details to show more info , it is passed along with the "Link"

  useEffect(() => {
    getPromoDiscountDetails(match.params.id);
  }, [match.params.id]);

  console.log(promoDetails);
  return (
    <div className="mb-5" style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Promo Details</title>
        <meta name="description" content="Trip Details" />
      </Helmet>
      <PageTitleBar title={`Promo details`} match={match} />
      {!loading && (
        <div className="row" style={{fontSize: "0.8rem"}}>
          <div className="col-sm-6">
            <div className="tab-content px-4">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Promo Code</strong>
                    </span>
                    {promoDetails?.code}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Promo Code Owner</strong>
                    </span>
                    {promoDetails?.promo_code_owner}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Promo Code ID</strong>
                    </span>
                    {promoDetails?.promo_code_id}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Code Type</strong>
                    </span>
                    {promoDetails?.code_type}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Creation Time</strong>
                    </span>
                    {calculatePostDate(promoDetails?.createdAt)}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Description</strong>
                    </span>
                    {promoDetails?.description}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Discount Type</strong>
                    </span>
                    {promoDetails?.discount_type}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Discount Value </strong>
                    </span>
                    {promoDetails?.discount_value}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Expiry Date </strong>
                    </span>
                    {moment(promoDetails.expiry_date).format("LL")}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Number of Rides </strong>
                    </span>
                    {promoDetails.num_of_rides}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Users Limit </strong>
                    </span>
                    {promoDetails.users_limit}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>View Beneficiaries </strong>
                    </span>
                    <button type="button" className="rct-link-btn text-primary" title="view details">
                      <Link to={`/admin/promo-discounts/k`}>
                        <i className="ti-eye" />
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPromoDiscountDetails: (promo_id) => dispatch(getPromoDiscountDetails(promo_id)),
  };
}

const mapStateToProps = (state) => ({
  promoDetails: state.promoDiscounts.promoDetails,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoDiscountDetails);
