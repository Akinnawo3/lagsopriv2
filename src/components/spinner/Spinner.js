import React, { Fragment } from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";


export default () => (
    <div className="d-flex justify-content-center loader-overlay bg-white">
      <CircularProgress />
    </div>
  // <Fragment>
  //   <div className="animated fadeIn pt-1 text-center text-info d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
  //     <div className="sk-chase">
  //       <div className="sk-chase-dot" />
  //       <div className="sk-chase-dot" />
  //       <div className="sk-chase-dot" />
  //       <div className="sk-chase-dot" />
  //       <div className="sk-chase-dot" />
  //       <div className="sk-chase-dot" />
  //     </div>
  //   </div>
  // </Fragment>
);
