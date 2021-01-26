import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {getAdmins} from "Actions/adminAction";
import {connect} from "react-redux";
import StarRatings from "react-star-ratings";




const  DriverRatings = ({match, getAdmins, admins}) => {
    const [employeePayroll, setEmployeePayroll] = useState(null)

    useEffect(()=> {
        getEmployeePayrolls();
        getAdmins();
    },[])



    // get employee payrols
    const getEmployeePayrolls = () => {
        api.get('employeePayrols.js')
            .then((response) => {
                setEmployeePayroll(response.data)
            })
            .catch(error => {
                // error handling
            })
    }

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Ratings"} match={match} />
            <RctCollapsibleCard heading="Driver Ratings" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Reviews</TableCell>
                                <TableCell>Ratings</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>John Deo</TableCell>
                                        <TableCell>
                                            Smooth driving, but slow
                                        </TableCell>
                                        <TableCell>
                                            <StarRatings
                                                rating={3}
                                                starRatedColor="red"
                                                numberOfStars={5}
                                                starDimension="18px"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            01-18-2021
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
            </RctCollapsibleCard>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getAdmins: () => dispatch(getAdmins()),
    };
}

const mapStateToProps = state => ({
    admins: state.admins.admins,
    isLoading: state.admins.isLoading,



});

export default connect( mapStateToProps, mapDispatchToProps) (DriverRatings);
