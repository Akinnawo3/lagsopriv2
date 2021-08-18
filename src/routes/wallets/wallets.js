/**
 * Wallets
 */
import React, { useEffect} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import WalletTable from "Routes/wallets/component/walletTable";
import {getWallets, getWalletsCount} from "Actions/walletAction";


const  Wallets = ({match, getWallets, getWalletsCount}) => {

useEffect(()=> {
	getWallets(1, '', true);
	getWalletsCount()
	},[])



	return (
			<div className="table-wrapper">
				<PageTitleBar title={"Wallets"} match={match} />
				<WalletTable status={''} />
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getWallets: (pageNo, transaction_status, spinner) => dispatch(getWallets(pageNo, transaction_status, spinner)),
		getWalletsCount: (transaction_status) => dispatch(getWalletsCount(transaction_status)),
	};
}


const mapStateToProps = state => ({
	trips: state.trips.trips,
	tripCount: state.trips.tripCount,
	isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (Wallets);
