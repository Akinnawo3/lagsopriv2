import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Badge} from 'reactstrap';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {getDrivers, getDriversCount, searchDrivers} from "Actions/driverAction";
import { CSVLink } from "react-csv";
import Pagination from "react-js-pagination";
import {getStatus, getStatusColor} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";


const  DriverTable = ({ drivers, isLoading, driversCount, getDrivers, status,  searchDrivers, header, getDriversCount}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [excelExport, setExcelExport] = useState([])


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getDrivers(status, pageNumber)
        window.scrollTo(0, 0);
    };

    const getPreviousData = () => {
        getDrivers(status, 1)
    }

   const getSearchData = (searchData) => {
        searchDrivers(searchData, status)
    }

    const handleCount = () => {
        getDriversCount(status)
    }


    useEffect(()=> {
        if(drivers.length > 0) {
            let result = drivers.map(driver=> {
                return {
                    firstName: driver['first_name'],
                    lastName: driver['last_name'],
                    phoneNumber: driver['phone_number'],
                    email: driver['email'],
                    bloodGroup: driver['blood_group'],
                    dateOfBirth: driver['dob'],
                    education:driver['education'],
                    stateOfOrigin: driver['state']
                }
            })
            setExcelExport(result)
        }
    },[drivers])

    return (
        <div>
            <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} />
                </li>
                <div className="float-right">
                    {!isLoading && drivers.length > 0 &&
                    <CSVLink
                        data={excelExport}
                        filename={"drivers.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-primary text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>
                        Export to Excel
                    </CSVLink>
                    }
                </div>
                {!isLoading && drivers.length > 0 &&
                    <>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>App Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {drivers.map((driver, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{driver.first_name}</TableCell>
                                        <TableCell>{driver.last_name}</TableCell>
                                        <TableCell><Badge color={getStatusColor(driver.driver_data?.driver_status)}>{getStatus(driver.driver_data?.driver_status)}</Badge></TableCell>
                                        <TableCell><Badge color={driver.driver_data.online ? 'success': 'danger'}>{driver.driver_data.online ? 'Online': 'Offline'}</Badge></TableCell>

                                        <TableCell>
                                                <button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/drivers/${driver.auth_id}`}><i className="ti-eye"/></Link></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={driversCount}
                        onChange={paginate}
                    />
                </div>
                </>
                    }
                {drivers.length === 0 && !isLoading && <EmptyData />}
            </RctCollapsibleCard>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getDrivers: (status, page_no, spinner) => dispatch(getDrivers(status, page_no, spinner)),
        searchDrivers: (searchData, status) => dispatch(searchDrivers(searchData, status)),
        getDriversCount: (status) => dispatch(getDriversCount(status)),
    };
}


const mapStateToProps = state => ({
    drivers: state.driver.drivers,
    driversCount: state.driver.driversCount,
    vehicles: state.vehicle.vehicles,
});

export default connect( mapStateToProps, mapDispatchToProps) (DriverTable);
