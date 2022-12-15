import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import { calculatePostDate, getStatus2, getStatusColor2 } from "Helpers/helpers";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";
import { getWallets } from "Actions/walletAction";

const Wallets = ({ wallets, walletsCount, auth_id, getWallets, loading, wallet }) => {
   const [currentPage, setCurrentPage] = useState(1);

   const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      getWallets(pageNumber, "", auth_id, true);
      window.scrollTo(0, 0);
   };

   console.log(wallets);
   return (
      <div style={{ minHeight: "70vh" }}>
         <Row className="mb-4">
            {/* <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-secondary">
            <CardBody className="pb-0">
              <div className="text-value">Balance</div>
            </CardBody>
            <div
              className="chart-wrapper mx-3 d-flex align-items-center justify-content-center"
              style={{ height: "70px" }}
            >
              <span className="pr-2 font-xl" style={{ fontSize: "1.5rem" }}>
                ₦{wallet.toLocaleString()}
              </span>
            </div>
          </Card>
        </Col> */}
            <Col xs="12" sm="6" lg="4">
               <Card className="text-success bg-light p-2">
                  <CardBody className="pb-0">
                     <div className="text-value text-muted fw-bold">Balance</div>
                  </CardBody>
                  <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{ height: "70px" }}>
                     <span className=" font-xl" style={{ fontSize: "2.5rem" }}>
                        ₦{wallet.toLocaleString()}
                     </span>
                     <i className="ti-arrow-up font-lg" />
                  </div>
               </Card>
            </Col>
         </Row>
         {wallets?.length > 0 && (
            <RctCollapsibleCard heading="Transaction" item={wallets} currentPage={currentPage} totalCount={walletsCount}>
               <div className="table-responsive" style={{ minHeight: "50vh" }}>
                  <Table>
                     <TableHead>
                        <TableRow hover>
                           <TableCell>Description</TableCell>
                           <TableCell>Amount </TableCell>
                           <TableCell>Actual Amount </TableCell>
                           <TableCell>Payment Method </TableCell>
                           <TableCell>Date </TableCell>
                           <TableCell>Status</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        <Fragment>
                           {wallets.map((user, key) => (
                              <TableRow hover key={key}>
                                 <TableCell>{user?.description}</TableCell>
                                 <TableCell>₦{user.amount?.toLocaleString() || 0}</TableCell>
                                 <TableCell>₦{user.actual_amount?.toLocaleString() || 0}</TableCell>
                                 <TableCell className="text-capitalize">{user?.payment_method}</TableCell>
                                 <TableCell>{calculatePostDate(user?.createdAt)}</TableCell>
                                 {/* <TableCell>{user.recipient}</TableCell> */}
                                 <TableCell>
                                    <Badge color={getStatusColor2(user?.status)}>{getStatus2(user?.status)}</Badge>
                                 </TableCell>
                              </TableRow>
                           ))}
                        </Fragment>
                     </TableBody>
                  </Table>
               </div>
               <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                  <Pagination activePage={currentPage} itemClass="page-item undo-folding" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={walletsCount} onChange={paginate} />
               </div>
            </RctCollapsibleCard>
         )}
         {wallets?.length < 1 && <EmptyData />}
      </div>
   );
};

function mapDispatchToProps(dispatch) {
   return {
      getWallets: (pageNo, transaction_status, auth_id, loading) => dispatch(getWallets(pageNo, transaction_status, auth_id, loading)),
   };
}

const mapStateToProps = (state) => ({
   loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);
