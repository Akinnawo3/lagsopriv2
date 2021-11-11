import React, { useEffect, useState } from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Badge } from "reactstrap";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

const Roles = ({ match }) => {
  const [parameterModalOpen, setParameterModalOpen] = useState(false);
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Roles"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard heading="Roles" style={{ minHeight: "70vh" }}>
            <div className="px-2">
              <div className="float-right">
                <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
                  <select
                    id="filter-dropdown"
                    name="fiter-dropdown"
                    onChange={() => null}
                    className="p-1 px-4"
                  >
                    <option value="value">Filter roles</option>
                  </select>
                </li>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                  <Link exact to="/admin/setup/add-personnel">
                    <button className="btn btn-success">Add Personnel</button>
                  </Link>
                </li>
              </div>
              <>
                <div className="table-responsive" style={{ minHeight: "50vh" }}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell> Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <>
                        <TableRow hover>
                          <TableCell>Victor Akinnawo</TableCell>
                          <TableCell>08166551790</TableCell>
                          <TableCell>akinnawovictor@gmail.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell>
                            <button
                              type="button"
                              className="rct-link-btn ml-lg-3 text-danger"
                              onClick={() => null}
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Victor Akinnawo</TableCell>
                          <TableCell>08166551790</TableCell>
                          <TableCell>akinnawovictor@gmail.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell>
                            <button
                              type="button"
                              className="rct-link-btn ml-lg-3 text-danger"
                              onClick={() => null}
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Victor Akinnawo</TableCell>
                          <TableCell>08166551790</TableCell>
                          <TableCell>akinnawovictor@gmail.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell>
                            <button
                              type="button"
                              className="rct-link-btn ml-lg-3 text-danger"
                              onClick={() => null}
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Victor Akinnawo</TableCell>
                          <TableCell>08166551790</TableCell>
                          <TableCell>akinnawovictor@gmail.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell>
                            <button
                              type="button"
                              className="rct-link-btn ml-lg-3 text-danger"
                              onClick={() => null}
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                        <TableRow hover>
                          <TableCell>Victor Akinnawo</TableCell>
                          <TableCell>08166551790</TableCell>
                          <TableCell>akinnawovictor@gmail.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell>
                            <button
                              type="button"
                              className="rct-link-btn ml-lg-3 text-danger"
                              onClick={() => null}
                            >
                              <i className="ti-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      </>
                    </TableBody>
                  </Table>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                  <Pagination
                    activePage={1}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={20}
                    totalItemsCount={20}
                    onChange={() => null}
                  />
                </div>
              </>
            </div>
          </RctCollapsibleCard>
        </div>
      </div>
    </div>
  );
};

export default Roles;
