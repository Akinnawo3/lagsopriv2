/**
 * Fdt
 */
import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Button, Input} from "reactstrap";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import GoogleMapComponentSchedule from "Components/Maps/GoogleMapComponentSchedule";
import ComponentChart from "Routes/fdt/component/chart";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {exportFdt, getFdt, getFdtCount} from "Actions/fdtActions";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {getTodayDate} from "Helpers/helpers";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
const qs = require("qs");

const Fdt = ({history, match, getFdt, fdt, loading, getFdtCount, fdtCount, exportFdt}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const exportRef = useRef(null);



  useEffect(() => {
    if (pageFromQuery === undefined || fdt.length < 1) {
      getFdt(currentPage, true);
      getFdtCount();
    }
  }, []);

  const paginate = async (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    await setCurrentPage(pageNumber);
    await window.scrollTo(0, 0);
    getFdt(pageNumber);
  };

  const handleFilter = () => {
    getFdt(1, false, startDate, endDate)
    getFdtCount(startDate, endDate)
  }

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    exportFdt(startDate, endDate)
  }

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"FDTs"} match={match} />
      <RctCollapsibleCard heading={"Fdt"} fullBlock style={{minHeight: "70vh"}}>
        <div className='ml-2'>
          <li className="list-inline-item search-icon d-inline-block mb-2">
            <small className="fw-bold mr-2">From</small>
            <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {
              setStartDate(e.target.value)
            }} />
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">To</small>
            <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {
              setEndDate(e.target.value)
            }} />
          </li>
          <Button onClick={() => handleFilter()} style={{height: '30px'}} className='align-items-center justify-content-center' color='success'>Apply filter</Button>

        <div className="float-right">
        <Button onClick={() => handleExport()} style={{height: '30px'}} className='align-items-center justify-content-center mr-2' color='primary'> <i className="zmdi zmdi-download mr-2"></i>  Export to Excel</Button>
          </div>
        </div>

        {fdt.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              {!loading && (
                <Table>
                  <TableHead>
                    <TableRow hover>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Fragment>
                      {fdt.length > 0 &&
                        fdt.map((record, key) => (
                          <TableRow hover key={key}>
                            <TableCell>{record.users?.first_name}</TableCell>
                            <TableCell>{record.users?.last_name}</TableCell>
                            <TableCell>
                              <button type="button" className="rct-link-btn text-primary">
                                <Link to={`/admin/fdt/${record.auth_id}`}>
                                  <i className="ti-eye"></i>
                                </Link>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </Fragment>
                  </TableBody>
                </Table>
              )}
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={fdtCount} onChange={paginate} />
            </div>
          </div>
        )}
        {fdt?.length < 1 && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={'Are you sure you want to Export File?'} message={'This will send the excel file to your email'} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getFdt: (page_no, spinner, start_date, end_date) => dispatch(getFdt(page_no, spinner, start_date, end_date)),
    getFdtCount: (start_date, end_date) => dispatch(getFdtCount(start_date, end_date)),
    exportFdt: (start_date, end_date) => dispatch(exportFdt(start_date, end_date)),
  };
}

const mapStateToProps = (state) => ({
  fdt: state.fdt.fdt,
  fdtCount: state.fdt.fdtCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Fdt);
