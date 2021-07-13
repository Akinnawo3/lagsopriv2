/**
 * App Header
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import screenfull from 'screenfull';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { collapsedSidebarAction } from 'Actions';
import Notifications from './Notifications';
import ChatSidebar from './ChatSidebar';
import DashboardOverlay from '../DashboardOverlay/DashboardOverlay';
// import SearchForm from './SearchForm';
// import QuickLinks from './QuickLinks';
// import MobileSearchForm from './MobileSearchForm';
import {logoutUser} from "../../actions/authAction";
import LinearProgress from "@material-ui/core/LinearProgress";

class Header extends Component {

	state = {
		customizer: false,
		isMobileSearchFormVisible: false
	}

	// function to change the state of collapsed sidebar
	onToggleNavCollapsed = (event) => {
		const val = !this.props.navCollapsed;
		this.props.collapsedSidebarAction(val);
	}

	// open dashboard overlay
	openDashboardOverlay(e) {
		var el = document.getElementsByClassName('dashboard-overlay')[0];
		el.classList.toggle("d-none");
		el.classList.toggle("show");
		if (el.classList.contains('show')) {
			document.body.style.overflow = "hidden";
		}
		else {
			document.body.style.overflow = "";
		}
		e.preventDefault();
	}

	// close dashboard overlay
	closeDashboardOverlay() {
		var e = document.getElementsByClassName('dashboard-overlay')[0];
		e.classList.remove('show');
		e.classList.add('d-none');
		document.body.style.overflow = "";
	}

	// toggle screen full
	toggleScreenFull() {
		screenfull.toggle();
	}

	// mobile search form
	openMobileSearchForm() {
		this.setState({ isMobileSearchFormVisible: true });
	}

	render() {

		const { isMobileSearchFormVisible } = this.state;
		const { horizontalMenu, agencyMenu, location, isLoadingStatus } = this.props;
		return (
			<div>
				{isLoadingStatus &&
					<LinearProgress />
				}
				<AppBar position="static" className="rct-header">
					<Toolbar className="d-flex justify-content-between w-100 pl-0">
						<div className="d-inline-flex align-items-center">
							{(horizontalMenu || agencyMenu) &&
							<div className="site-logo">
								<Link to="/" className="logo-mini">
									<img src={require('Assets/img/appLogo.png')} className="mr-15" alt="site logo" width="35" height="35" />
								</Link>
								<Link to="/" className="logo-normal">
									<img src={require('Assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
								</Link>
							</div>
							}
							{!agencyMenu &&
							<ul className="list-inline mb-0 navbar-left">
								{!horizontalMenu ?
									<li className="list-inline-item" onClick={(e) => this.onToggleNavCollapsed(e)}>
										<Tooltip title="Sidebar Toggle" placement="bottom">
											<IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
												<MenuIcon />
											</IconButton>
										</Tooltip>
									</li> :
									<li className="list-inline-item">
										<Tooltip title="Sidebar Toggle" placement="bottom">
											<IconButton color="inherit" aria-label="Menu" className="humburger p-0" component={Link} to="/">
												<i className="ti-layout-sidebar-left"></i>
											</IconButton>
										</Tooltip>
									</li>
								}
								{/*{!horizontalMenu && <QuickLinks />}*/}
								{/*<li className="list-inline-item search-icon d-inline-block">*/}
								{/*	<SearchForm />*/}
								{/*	<IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>*/}
								{/*		<i className="zmdi zmdi-search"></i>*/}
								{/*	</IconButton>*/}
								{/*	<MobileSearchForm*/}
								{/*		isOpen={isMobileSearchFormVisible}*/}
								{/*		onClose={() => this.setState({ isMobileSearchFormVisible: false })}*/}
								{/*	/>*/}
								{/*</li>*/}
							</ul>
							}
						</div>
						<ul className="navbar-right list-inline mb-0">
							<Notifications />
							{/*<Cart />*/}
							{/*<li className="list-inline-item setting-icon mr-2">*/}
							{/*	<div className=	'text-dark'>*/}
							{/*		bruce*/}
							{/*	</div>*/}
							{/*	/!*<Tooltip title="Chat" placement="bottom">*!/*/}
							{/*	/!*	<IconButton aria-label="settings" onClick={() => this.setState({ customizer: true })}>*!/*/}
							{/*	/!*		/!*<i className="zmdi zmdi-comment"></i>*!/Tope*!/*/}
							{/*	/!*	</IconButton>*!/*/}
							{/*	/!*</Tooltip>*!/*/}
							{/*</li>*/}
							<li className="list-inline-item setting-icon ml-2">
								<a onClick={()=> {this.props.logoutUser()}} href="#" className="text-primary">
									<i className="zmdi zmdi-power text-danger mr-1" style={{fontSize: '20px'}}></i>
									{/*<span>Log Out</span>*/}
								</a>
							</li>
							<li className="list-inline-item">
								<Tooltip title="Full Screen" placement="bottom">
									<IconButton aria-label="settings" onClick={() => this.toggleScreenFull()}>
										<i className="zmdi zmdi-crop-free"></i>
									</IconButton>
								</Tooltip>
							</li>
						</ul>
						<Drawer
							anchor={'right'}
							open={this.state.customizer}
							onClose={() => this.setState({ customizer: false })}
						>
							<ChatSidebar />
						</Drawer>
					</Toolbar>
					<DashboardOverlay
						onClose={() => this.closeDashboardOverlay()}
					/>
				</AppBar>
			</div>
		);
	}
}


// map state to props
const mapStateToProps = ({ settings, loading }) => {
	const isLoadingStatus = loading.loadingStatus
	return {settings, isLoadingStatus};
};

// const mapStateToProps = state => ({
// 	settings: state.settings,
// 	loadingStatus: state.loading.loadingStatus
// });

export default withRouter(connect(mapStateToProps, {
	collapsedSidebarAction,logoutUser
})(Header));
