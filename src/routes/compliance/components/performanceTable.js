import {TableCell, TableRow,TableBody,TableHead} from "@material-ui/core";
import React, {Fragment, useEffect, useState} from "react";

import {Card, CardTitle, Table} from "reactstrap";

const PerformanceTable = ({loading, getDownloadsByDate, downloadsByDate}) => {
  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span>Showing 24 riders</span>
          <div>
            <span>All areas</span>
            <span>Export</span>
          </div>
        </div>
        {/* <span>Today</span> */}
      </CardTitle>
      <div>
        <Table>
          <TableHead>
            <TableRow hover>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>% Performance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Fragment>
              {Array.from({length: 6}).map((item, index) => (
                <TableRow key={index}>
                  <TableCell>Joanna</TableCell>
                  <TableCell>Lane</TableCell>
                  <TableCell>070 3397 6621 </TableCell>
                  <TableCell>80%</TableCell>
                </TableRow>
              ))}
            </Fragment>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default PerformanceTable;
