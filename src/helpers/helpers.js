/**
 * Helpers Functions
 */
import moment from "moment";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import {startOfWeek} from "date-fns";

/**
 * Function to convert hex to rgba
 */
export function hexToRgbA(hex, alpha) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + "," + alpha + ")";
  }
  throw new Error("Bad Hex");
}

/**
 * Text Truncate
 */
export function textTruncate(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

/**
 * Get Date
 */
export function getTheDate(timestamp, format) {
  let time = timestamp * 1000;
  let formatDate = format ? format : "MM-DD-YYYY";
  return moment(time).format(formatDate);
}

/**
 * Convert Date To Timestamp
 */
export function convertDateToTimeStamp(date, format) {
  let formatDate = format ? format : "YYYY-MM-DD";
  return moment(date, formatDate).unix();
}

/**
 * Function to return current app layout
 */
export function getAppLayout(url) {
  let location = url.pathname;
  let path = location.split("/");
  return path[1];
}

// 0=pending, 1=processing, 2=successful, 3=failed

export function getStatus(status) {
  if (status === 0) {
    return "Pending";
  } else if (status === 1) {
    return "Accepted";
  } else if (status === 2) {
    return "Verified";
  } else if (status === 3) {
    return "Trained";
  } else if (status === 4) {
    return "Active";
  } else {
    return "Inactive";
  }
}

export function getStatus3(status) {
  if (status === 0) {
    return "Pending";
  } else if (status === 1) {
    return "Processing";
  } else if (status === 2) {
    return "Successful";
  } else {
    return "Unsuccessful";
  }
}

export function getStatus4(status) {
  if (status === 0) {
    return "Pending";
  } else if (status === 1) {
    return "Successful";
  } else {
    return "Unsuccessful";
  }
}

export function getStatusColor4(status) {
  if (status === 0) {
    return "warning";
  } else if (status === 1) {
    return "success";
  } else {
    return "danger";
  }
}

export function getStatusColor(status) {
  if (status === 0) {
    return "secondary";
  } else if (status === 1) {
    return "primary";
  } else if (status === 2) {
    return "info";
  } else if (status === 3 || status === 4) {
    return "success";
  } else {
    return "danger";
  }
}
export function getStatusColorKYC(status) {
  if (status === 0) {
    return "secondary";
  } else if (status === 1) {
    return "success";
  } else {
    return "danger";
  }
}

export function getStatus2(status) {
  if (status === 0) {
    return "Pending";
  } else if (status === 1) {
    return "Completed";
  } else if (status === 2) {
    return "Failed";
  } else if (status === -1) {
    return "Debited";
  } else {
    return "Failed";
  }
}

// -1=debit, 0=pending, 1=complete, or 2=cancel/failed

export function getStatusColor2(status) {
  if (status === 0) {
    return "warning";
  } else if (status === 1 || status === -1) {
    return "success";
  } else if (status === 2) {
    return "danger";
  } else {
    return "danger";
  }
}

let timeZone = (date) => {
  var dbDate = new Date(date);
  var timeOffsetInMS = dbDate.getTimezoneOffset() * 60000;
  dbDate.setTime(dbDate.getTime() - timeOffsetInMS);
  return date;
};

let MonthDays = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
export const calculatePostDate = (date) => {
  if (!date) {
    return;
  }
  let DateNow = new Date(); // current date
  let postedDate = new Date(timeZone(date.replace(" ", "T"))); // date posted
  let postedTime = date.indexOf("T") > -1 ? date.substr(date.indexOf("T") + 1, 5) : ""; //get the time
  let postedMnth = MonthDays[postedDate.getMonth()]; //get the month
  let postedYear = postedDate.getFullYear(); //get the year
  let postedDay = postedDate.getDate(); //get the date of the month
  let rDate = null;
  let sDate = (DateNow - postedDate) / 1000; //get the seconds of in the date
  let outputDate = null;
  if (sDate >= 86400) {
    // if days
    rDate = parseInt(Math.round(sDate / 86400));
    outputDate = rDate === 1 ? "Yesterday " + postedTime : `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`;
  } else if (sDate >= 3600) {
    //if hours
    rDate = parseInt(Math.round(sDate / 3600));
    outputDate = rDate + " hr ago";
  } else if (sDate >= 60) {
    //if minuntes
    rDate = parseInt(Math.round(sDate / 60));
    outputDate = rDate + " min ago";
  } else {
    //if seconds
    rDate = Math.ceil(sDate);
    outputDate = sDate < 1 ? "1 sec ago" : rDate + " sec ago";
  }
  return outputDate;
};

export const formatTime = (timestamp) => {
  if (!timestamp && timestamp !== 0) {
    return;
  }
  var hours = Math.floor(timestamp / 60 / 60);
  var minutes = Math.floor(timestamp / 60) - hours * 60;
  var seconds = Math.floor(timestamp % 60);
  var formatted = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

  return formatted;
};

export const getFirstDayOfMonth = () => {
  const date = new Date();
  let firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = firstDay.getDate().toString().length === 1 ? "0" + firstDay.getDate() : firstDay.getDate();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getLastDayOfMonth = () => {
  const date = new Date();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = lastDay.getDate().toString().length === 1 ? "0" + lastDay.getDate() : lastDay.getDate();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getTodayDate = () => {
  const date = new Date();
  const month = date.getMonth().toString().length === 1 && date.getMonth().toString() !== "9" ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getFirstDayOfTheYear = () => moment(new Date(new Date().getFullYear(), 0, 1)).format("YYYY-MM-DD");
export const getLastDayOfTheYear = () => moment(new Date(new Date().getFullYear(), 11, 31)).format("YYYY-MM-DD");

export const getTicketStatus = (status) => {
  if (status == 0) {
    return "New";
  } else if (status == 1) {
    return "Opened";
  } else if (status == 2) {
    return "In-progress";
  } else if (status == 3) {
    return "Closed";
  } else if (status == 4) {
    return "Unresolved";
  } else {
    return "";
  }
};

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export const m = (geo1, geo2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(geo2.latitude - geo1.latitude); // deg2rad below
  var dLon = deg2rad(geo2.longitude - geo1.longitude);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(geo1.latitude)) * Math.cos(deg2rad(geo2.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return !isNaN(d) ? d.toFixed(2) : d;
};

export const idVerificationType = (idType) => {
  switch (idType) {
    case "driver_license":
      return "Driving Licence";
      break;
    case "nin":
      return "NIN ID";
      break;
    case "lassra":
      return "LASSRA ID";
      break;
    case "lasdri":
      return "LASDRI ID";
      break;
    default:
      break;
  }
};

export const getActualAddress = async (lat, lng) => {
  const res = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + lat + "," + lng + "&key=" + "AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results[0].formatted_address;
    });

  return res;
};

export const stringToNumber = (string) => parseFloat(string.replace(/,/g, ""));

export const firstLetterToUpperCase = (string) => {
  const formattedString = string
    ?.split(" ")
    .map((item) => {
      return item.charAt(0) === "i" && item.charAt(1) === "i" ? item.toUpperCase() : item.charAt(0).toUpperCase() + item?.slice(1);
    })
    .join(" ");
  return formattedString;
};

// this function checks the array of the permissions of a user and returns true/false if a perticullar permission is found in the array
// export const verifyUserPermssion = (checkedPermission, permissionsArray) => permissionsArray.includes(checkedPermission);
