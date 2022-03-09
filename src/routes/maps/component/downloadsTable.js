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
import {firstLetterToUpperCase} from "../../../helpers/helpers";

const DownloadsTable = ({getDownloadsByArea, downloadsByArea, loading}) => {
  const [infoType, setInfoType] = useState("downloads");
  const [expandedLga, setExpandedLga] = useState("");

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
  const handleLgaClick = (id) => {
    expandedLga === id ? setExpandedLga("") : setExpandedLga(id);
  };
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
            <div className="accordion " id="accordionExample">
              <div className="card bg-secondary">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <div className=" d-flex justify-content-between text-white fw-bold ">
                      <small>LGA</small>
                      <small>DOWNLOADS</small>
                    </div>
                  </h2>
                </div>
              </div>

              {downloadsByArea.map((item) => (
                <div className="card" key={item._id}>
                  <div className="card-header" id="headingOne" onClick={() => handleLgaClick(item?._id)}>
                    <h2 className="mb-0">
                      <div className=" d-flex justify-content-between">
                        <small>{firstLetterToUpperCase(item?.lga)}</small>
                        <small>{item?.riders_home_area_count?.toLocaleString()}</small>
                      </div>
                    </h2>
                  </div>
                  <div id="collapseOne" className={`collapse ${expandedLga === item._id && "show"}`} aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body " style={{padding:"2px 5px"}}>
                      <ul className="list-inline">
                        {item.areas.map((area, index) => (
                          <li className="text-right border-bottom m-0 " style={{padding:"2px 5px", fontSize:13}}>
                            <div className="pull-left ">{firstLetterToUpperCase(area?.area_name)}</div>
                            <div > {area?.riders_home_area_count?.toLocaleString()}</div>
                          </li>
                        ))}
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
      {infoType === "requests" && (
        <div>
          {!loading && requestByArea.length > 0 && (
            <div className="accordion" id="accordionExample">
              {requestByArea.map((item, index) => (
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
                    <div className="card-body"></div>
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
