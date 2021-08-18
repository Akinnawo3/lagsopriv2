/**
 * Fdt
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Input} from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import GoogleMapComponentSchedule from "Components/Maps/GoogleMapComponentSchedule";
import ComponentChart from "Routes/fdt/component/chart";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFdt, getFdtCount} from "Actions/fdtActions";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";




const  Fdt = ({match, getFdt, fdt, loading, getFdtCount, fdtCount}) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        getFdt(1, true)
        getFdtCount();
    },[])

    const paginate = async (pageNumber) => {
       await setCurrentPage(pageNumber);
       await window.scrollTo(0, 0);
        getFdt(pageNumber)
    };



    return (
        <div className="table-wrapper">
            <PageTitleBar title={"FDTs"} match={match} />
            <RctCollapsibleCard heading={'Fdt'} fullBlock style={{minHeight: "70vh"}}>
                {fdt.length > 0 &&
                <div>
                    <div className="table-responsive" style={{minHeight: "50vh"}}>
                        {!loading &&  <Table>
                            <TableHead>
                                <TableRow hover>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <Fragment>
                                    {fdt.length > 0 && fdt.map((record, key) => (
                                        <TableRow hover key={key}>
                                            <TableCell>{record.users?.first_name}</TableCell>
                                            <TableCell>{record.users?.last_name}</TableCell>
                                            <TableCell>
                                                <button type="button" className="rct-link-btn text-primary"><Link to={`/admin/fdt/${record.auth_id}`}><i className="ti-eye"></i></Link></button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </Fragment>
                            </TableBody>
                        </Table>}
                    </div>
                    <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">

                        <Pagination
                            activePage={currentPage}
                            itemClass="page-item"
                            linkClass="page-link"
                            itemsCountPerPage={20}
                            totalItemsCount={fdtCount}
                            onChange={paginate}
                        />
                    </div>
                </div>
                }
                {fdt?.length < 1 && <EmptyData />}
            </RctCollapsibleCard>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getFdt: (page_no, spinner) => dispatch(getFdt(page_no, spinner)),
        getFdtCount: () => dispatch(getFdtCount()),
    };
}

const mapStateToProps = state => ({
    fdt: state.fdt.fdt,
    fdtCount: state.fdt.fdtCount,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (Fdt);
