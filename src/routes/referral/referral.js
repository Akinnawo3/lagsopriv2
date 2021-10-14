
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Badge, Input} from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {getReferral, getReferralCount} from "Actions/referrerAction";
import EmptyData from "Components/EmptyData/EmptyData";
import Pagination from "react-js-pagination";



const  Referral = ({match, referrals, referralCount, getReferral, getReferralCount, loading}) => {
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=> {
        getReferral(1, true);
        getReferralCount();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getReferral(pageNumber)
        window.scrollTo(0, 0);
    };

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Referral"} match={match} />
            {!loading && referrals.length > 0 &&
            <RctCollapsibleCard heading="Referrals" fullBlock style={{minHeight: "70vh"}}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="float-right d-flex align-items-center p-3">
                    </div>
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Referrer Number</TableCell>
                                <TableCell>Referee Number</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {referrals.map((item, key) => (
                                    <TableRow hover key={item.id}>
                                        <TableCell>{item.referrer_number}</TableCell>
                                        <TableCell>{item.referee_number}</TableCell>
                                        <TableCell><Badge color={item.status === 0 ? 'warning': 'success'}>{item.status === 0 ? 'Pending': 'Confirmed'}</Badge></TableCell>
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
                        totalItemsCount={referralCount}
                        onChange={paginate}
                    />
                </div>
            </RctCollapsibleCard>}
            {!loading && referrals.length < 1 && <EmptyData />}
            {/*<Modal isOpen={isOpen}*/}
            {/*       toggle={() => setIsOpen(!isOpen)}*/}
            {/*    >*/}
            {/*   <ModalBody className="p-4">*/}
            {/*       <div style={{color: '#2E407B'}}>Reward</div>*/}
            {/*       <div style={{marginTop: '40px', color: '#898888', fontSize: '12px'}}>Receipient Phone Number</div>*/}
            {/*       <div className='w-50 mt-1'><Input type="text" value='07032838025'   required /></div>*/}
            {/*           <Button type="button" variant="contained" className="text-white btn-primary mt-4">Reward</Button>*/}

            {/*   </ModalBody>*/}
            {/*</Modal>*/}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getReferral: (page_no, spinner) => dispatch(getReferral(page_no, spinner)),
        getReferralCount: () => dispatch(getReferralCount()),

    };
}


const mapStateToProps = state => ({
    referrals: state.referrals.referrals,
    referralCount: state.referrals.referralCount,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus
});

export default connect( mapStateToProps, mapDispatchToProps)(Referral);
