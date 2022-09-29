import React, {useEffect, useState} from "react";
import {Card, CardTitle} from "reactstrap";
import userImg from "../../../assets/img/user-7.jpg";
const TopFive = ({loading, getDownloadsByDate, downloadsByDate}) => {
  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <h3>Compliance Top 5 today</h3>
        <div className="mt-4">
          {Array.from({length: 5}).map((item) => (
            <div className="d-flex align-items-center justify-content-between my-3">
              <div>
                <span>
                  <img alt="thumbnail" src={userImg} height={25} width={22} className="rounded-circle" />
                </span>
                <small className="ml-2">Brooklyn Simmons</small>
              </div>
              <div className="fw-bold" style={{color: "#04A7A7"}}>
                88% {`>`}
              </div>
            </div>
          ))}
        </div>
        <hr className="my-2" />
        <h3 className="mt-3">Gender compliance</h3>
        <div className="mt-2">
          <div className="d-flex align-items-center">
            <progress id="male-progress" value="62" max="100" className="w-100">
              62%
            </progress>
            <small className="ml-2 fw-bold" style={{color: "#0065E1"}}>
              62%
            </small>
          </div>
          <div className="mt-1 d-flex align-items-center">
            <progress id="female-progress" value="41" max="100" className="w-100">
              32%
            </progress>
            <small className="ml-2 fw-bold" style={{color: "#a33db3"}}>
              41%
            </small>
          </div>
          <div className="d-flex mt-2">
            <div>
              <span className="mr-1">
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.646484" width="10" height="10" rx="2" fill="#0065E1" />
                </svg>
              </span>
              <span>Male</span>
            </div>
            <div className="ml-3">
              <span className="mr-1">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.646484" width="10" height="10" rx="2" fill="#A33DB3" />
                </svg>
              </span>
              <span>Female</span>
            </div>
          </div>
        </div>
      </CardTitle>
    </Card>
  );
};

export default TopFive;
