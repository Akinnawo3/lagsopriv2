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
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

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

  console.log(downloadsByArea);
  return (
    <RctCollapsibleCard heading="Updates">
      <div className="mb-2">
        <select id="filter-dropdown" name="fiter-dropdown" onChange={(e) => setInfoType(e.target.value)} className="p-1 px-4">
          <option value="downloads">Downloads</option>
          <option value="requests">Requests</option>
        </select>
      </div>

      {infoType === "downloads" && (
        <div>
          {!loading && downloadsByArea.length > 0 && (
            <div className="accordion" id="accordionExample">
              {downloadsByArea.map((item, index) => (
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <div className=" d-flex justify-content-between">
                        <span>Area</span>
                        <span>Number</span>
                      </div>
                    </h2>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item text-right">
                          <span className="pull-left">
                            <strong>Message</strong>
                          </span>
                          number
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {downloadsByArea.length < 1 && <EmptyData />}
        </div>
      )}
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
