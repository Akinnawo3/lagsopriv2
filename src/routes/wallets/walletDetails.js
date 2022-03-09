import React, {useEffect, useState} from "react";
import {Badge, Modal, ModalBody, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getSingleWalletTransaction} from "Actions/walletAction";
import {formatTime} from "Helpers/helpers";
import {Link} from "react-router-dom";

const WalletDetails = ({getSingleWalletTransaction, transaction, match, loading, trip}) => {
  useEffect(() => {
    getSingleWalletTransaction(match.params.id, true);
  }, [match.params.id]);

  console.log(transaction);
  return (
    <div className="mb-5" style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Trip Details</title>
        <meta name="description" content="Wallet Transaction Details" />
      </Helmet>
      <PageTitleBar title={`Transaction details`} match={match} />
      {!loading && (
        <div className="row" style={{fontSize: "0.8rem"}}>
          <div className="col-sm-6">
            <div className="tab-content px-4">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Transaction ID</strong>
                    </span>
                    {transaction?.transaction_id}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Date</strong>
                    </span>
                    {new Date(transaction?.createdAt)?.toDateString()} {new Date(transaction?.createdAt)?.toLocaleTimeString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Amount</strong>
                    </span>
                    ₦{transaction?.amount?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Description</strong>
                    </span>
                    {transaction?.description}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Recipient</strong>
                    </span>
                    {transaction?.recipient}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Status</strong>
                    </span>
                    {transaction.status === 1 ? "Complete" : transaction.status === 0 ? "Pending" : transaction.status === 2 ? "Cancelled" : "Debit "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Transaction Type</strong>
                    </span>
                    {transaction?.transaction_type}
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
    getSingleWalletTransaction: (tansaction_id, spinner) => dispatch(getSingleWalletTransaction(tansaction_id, spinner)),
  };
}

const mapStateToProps = (state) => ({
  transaction: state.wallets.singleWalletTransaction,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletDetails);
