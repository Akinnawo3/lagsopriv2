import React, {useEffect} from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {connect} from "react-redux";
import {getDownloadsByArea} from "Actions/userAction";

const DownloadsTable = ({getDownloadsByArea}) => {
  useEffect(() => {
    getDownloadsByArea(true);
  }, []);
  return (
    <RctCollapsibleCard heading="Updates">
      <Table>
        <TableHead>
          <TableRow hover>
            <TableCell>Area</TableCell>
            <TableCell className="text-right">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover>
            <TableCell>area 1</TableCell>
            <TableCell className="text-right">2000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </RctCollapsibleCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getDownloadsByArea: (spinner) => dispatch(getDownloadsByArea(spinner)),
});
const mapStateToProps = (state) => ({
  downloadsByArea: state.users.downloadsByArea,
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsTable);
