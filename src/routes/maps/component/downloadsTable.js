import React, {useEffect} from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {connect} from "react-redux";
import EmptyData from "Components/EmptyData/EmptyData";
import {getDownloadsByArea} from "Actions/userAction";

const DownloadsTable = ({getDownloadsByArea, downloadsByArea, loading}) => {
  useEffect(() => {
    getDownloadsByArea(true);
  }, []);
  console.log(downloadsByArea);
  return (
    <RctCollapsibleCard heading="Updates">
      {!loading && downloadsByArea.length > 0 && (
        <Table>
          <TableHead>
            <TableRow hover>
              <TableCell>Area</TableCell>
              <TableCell className="text-right">Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downloadsByArea.map((item) => (
              <TableRow hover>
                <TableCell>{item._id}</TableCell>
                <TableCell className="text-right">{item.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {downloadsByArea.length < 1 && <EmptyData />}
    </RctCollapsibleCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getDownloadsByArea: (spinner) => dispatch(getDownloadsByArea(spinner)),
});
const mapStateToProps = (state) => ({
  downloadsByArea: state.users.downloadsByArea,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsTable);
