import React, {Fragment, useState, useEffect} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {calculatePostDate, getStatus2, getStatusColor2} from "Helpers/helpers";
import {Badge, Card, CardBody, Col, Row} from "reactstrap";
import {getDriverRevenueSPlit} from "Actions/revenueSplitAction";
import moment from "moment";
import {stringToNumber} from "Helpers/helpers";

const RevenueSplit = ({getDriverRevenueSPlit, driverRevenueSplit, auth_id}) => {
  //getting the previous day date
  let d = new Date();
  d.setDate(d.getDate() - 1);
  const yesterday = moment(d).format("YYYY-MM-DD");
  const [date, setDate] = useState(yesterday);

  useEffect(() => {
    getDriverRevenueSPlit(false, auth_id, date, date);
  }, [date]);

  const getStatus = (item) => (item < 1 ? "Failed" : "Success");
  const getStatusColor = (item) => (item < 1 ? "danger" : "success");

  const totalDebtService = (driverRevenueSplit?.debt_service?.asset_repayment + driverRevenueSplit?.debt_service?.dashcam + driverRevenueSplit?.debt_service?.mobile_phone).toLocaleString();

  return (
    <div style={{minHeight: "70vh"}}>
      <Row className="mb-4">
        <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-secondary">
            <CardBody className="pb-0">
              <div className="text-value">Today's Gross Earning</div>
            </CardBody>
            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{height: "70px"}}>
              <span className="pr-2 font-xl" style={{fontSize: "2.5rem"}}>
                ₦{driverRevenueSplit?.split_stage?.total_amount_made?.toLocaleString()}
              </span>
              <i className="ti-arrow-up font-lg" />
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Card className="text-success bg-light p-3">
            <CardBody className="pb-0">
              <div className="text-value text-muted fw-bold">Balance</div>
            </CardBody>
            <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{height: "70px"}}>
              <span className=" font-xl" style={{fontSize: "2.5rem"}}>
                ₦{driverRevenueSplit?.balance?.toLocaleString()}
              </span>
              <i className="ti-arrow-up font-lg" />
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="col my-2 ">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} max={yesterday} />
        </div>
      </Row>
      {driverRevenueSplit !== "" && (
        <RctCollapsibleCard heading="Revenue Split Transaction">
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Stakeholders</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>Amount </TableCell>
                  <TableCell>Date </TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell>Debt Service</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${totalDebtService}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(totalDebtService)}>{getStatus(totalDebtService)}</Badge>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>Daily LASG Tax</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${driverRevenueSplit?.daily_tax}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(driverRevenueSplit?.daily_tax)}>{getStatus(driverRevenueSplit?.daily_tax)}</Badge>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>Tech Co.</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${driverRevenueSplit?.tech_co}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(driverRevenueSplit?.tech_co)}>{getStatus(driverRevenueSplit?.tech_co)}</Badge>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>Refleeting</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${driverRevenueSplit?.refleeting}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(driverRevenueSplit?.refleeting)}>{getStatus(driverRevenueSplit?.refleeting)}</Badge>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>Asset Co</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${driverRevenueSplit?.asset_co}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(driverRevenueSplit?.asset_co)}>{getStatus(driverRevenueSplit?.asset_co)}</Badge>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>Communication</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${driverRevenueSplit?.comms}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(driverRevenueSplit?.comms)}>{getStatus(driverRevenueSplit?.comms)}</Badge>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell>Maintenance</TableCell>
                  {/* <TableCell>Percentage</TableCell> */}
                  <TableCell>{` ₦${driverRevenueSplit?.maintenance}`}</TableCell>
                  <TableCell>{moment(driverRevenueSplit?.created).format("dddd, MMMM Do YYYY")} </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(driverRevenueSplit?.maintenance)}>{getStatus(driverRevenueSplit?.maintenance)}</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            {/* <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={walletsCount} onChange={paginate} /> */}
          </div>
        </RctCollapsibleCard>
      )}
      {driverRevenueSplit === "" && <EmptyData />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDriverRevenueSPlit: (spinner, auth_id, startDate, endDate) => dispatch(getDriverRevenueSPlit(spinner, auth_id, startDate, endDate)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  driverRevenueSplit: state.revenueSplit.driverRevenueSplit.length ? state.revenueSplit.driverRevenueSplit[0] : "",
});

export default connect(mapStateToProps, mapDispatchToProps)(RevenueSplit);
