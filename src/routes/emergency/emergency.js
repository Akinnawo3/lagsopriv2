/**
 * Emergency
 */
import React, {useState, useEffect, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getSOS, getSOSCount} from "Actions/emergencyAction";
import EmptyData from "Components/EmptyData/EmptyData";
import Pagination from "react-js-pagination";
import {Badge} from "reactstrap";
import moment from "moment";
const qs = require("qs");

const Emergency = ({history, match, getSOS, sos, loading, getSOSCount, sosCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || sos.length < 1) {
      getSOS(1, true);
      getSOSCount();
    }
  }, []);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getSOS(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Emergency"} match={match} />
      {!loading && sos?.length > 0 && (
        <RctCollapsibleCard heading="Emergency" fullBlock style={{minHeight: "70vh"}}>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Reporter</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Latitude</TableCell>
                  <TableCell>Longitude</TableCell>
                  <TableCell>Time of Report</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {sos.length > 0 &&
                    sos.map((data) => (
                      <TableRow hover key={data.id}>
                        <TableCell>{data.user_data?.user_type}</TableCell>
                        <TableCell>{data.address}</TableCell>
                        <TableCell>{data.latitude}</TableCell>
                        <TableCell>{data.longitude}</TableCell>
                        <TableCell>{moment(data.createdAt).format("LLLL")}</TableCell>
                        <TableCell>
                          <Badge color={data.status === 0 ? "danger" : "success"}>{data.status === 0 ? "Unresolved" : "Resolved"}</Badge>
                        </TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/emergency/${data.sos_id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={sosCount} onChange={paginate} />
          </div>
        </RctCollapsibleCard>
      )}
      {sos.length < 1 && <EmptyData />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSOS: (page_no, spinner) => dispatch(getSOS(page_no, spinner)),
    getSOSCount: () => dispatch(getSOSCount()),
  };
}

const mapStateToProps = (state) => ({
  sos: state.sos.sos,
  sosCount: state.sos.sosCount,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Emergency);
