import React, {useEffect, useState} from "react";
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
  const [infoType, setInfoType] = useState("downloads");
  useEffect(() => {
    getDownloadsByArea(true);
  }, []);

  const requestByArea = [
    {area: "Area", number: 0},
    {area: "Area", number: 0},
    {area: "Area", number: 0},
    {area: "Area", number: 0},
    {area: "Area", number: 0},
  ];
  return (
    <RctCollapsibleCard heading="Updates">
      <div className="mb-2">
        <select id="filter-dropdown" name="fiter-dropdown" onChange={(e) => setInfoType(e.target.value)} className="p-1 px-4">
          <option value="downloads">Downloads</option>
          <option value="requests">Requests</option>
        </select>
      </div>
      {!loading && downloadsByArea.length > 0 && (
        <Table>
          <TableHead>
            <TableRow hover>
              <TableCell>Area</TableCell>
              <TableCell className="text-right">Number</TableCell>
            </TableRow>
          </TableHead>
          {infoType === "downloads" && (
            <TableBody>
              {downloadsByArea.map((item) => (
                <TableRow hover>
                  <TableCell>{item._id}</TableCell>
                  <TableCell className="text-right">{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
          {infoType === "requests" && (
            <TableBody>
              {requestByArea.map((item) => (
                <TableRow hover>
                  <TableCell>{item.area}</TableCell>
                  <TableCell className="text-right">{item.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
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
