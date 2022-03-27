/**
 * Wallets
 */
 import React, {useState, useEffect} from "react";
 import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
 import {connect} from "react-redux";
 import WalletTable from "Routes/wallets/component/walletTable";
 import {getWallets, getWalletsCount, getWalletBalance, getFundingBalance} from "Actions/walletAction";
 const qs = require("qs");

 const WalletsPending = ({history, match,wallets, getWallets, getWalletsCount, getFundingBalance}) => {
   const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
   const [currentPage, setCurrentPage] = useState(() => {
	 return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
   });
   useEffect(() => {
	 if (pageFromQuery === undefined || wallets.length < 1) {
	   getWallets(currentPage, 0, "", true, "");
	   getWalletsCount(0, "", true, "");
	   getFundingBalance("", 0, "");
	 }
   }, []);

   return (
	 <div className="table-wrapper">
	   <PageTitleBar title={"Wallets"} match={match} />
	   <WalletTable status={0} heading={"Pending Transactions"} />
	 </div>
   );
 };

 function mapDispatchToProps(dispatch) {
   return {
	 getWallets: (page_no, status, auth_id, spinner, transaction_type) => dispatch(getWallets(page_no, status, auth_id, spinner, transaction_type)),
	 getWalletsCount: (status, auth_id, loading, transaction_type) => dispatch(getWalletsCount(status, auth_id, loading, transaction_type)),
	 getFundingBalance: (auth_id, status, transaction_type) => dispatch(getFundingBalance(auth_id, status, transaction_type)),
   };
 }
 const mapStateToProps = (state) => ({
   wallets: state.wallets.wallets,
   walletsCount: state.wallets.walletsCount,
   isLoading: state.loading.isLoading,
 });

 export default connect(mapStateToProps, mapDispatchToProps)(WalletsPending);




