/**
 * Payment Widget
 */
import React, {Component, useEffect, useState} from "react";
import {Card, CardTitle} from "reactstrap";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

// intl messages
import IntlMessages from "Util/IntlMessages";
import axios from "axios";
import api from "../../environments/environment";
import {getTodayDate} from "Helpers/helpers";
import {NotificationManager} from "react-notifications";

const PaymentWidget = () => {
  const [paymentData, setPaymentData] = useState({});

  useEffect(() => {
    getPaymentsData();
  }, []);

  const getPaymentsData = async () => {
    try {
      // const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&status=1`);
      const res = await axios.get(`${api.wallet}/v1.1/admin/finance-stat?payment_type=trip&date_type=daily&start_date=${getTodayDate()}&end_date=${getTodayDate()}`);
      // const res = await axios.get(`${api.wallet}/v1.1/admin/finance-stat?payment_type=trip&date_type=daily`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        setPaymentData(res?.data?.data[0]);
      }
    } catch (err) {}
  };

  const successfulPayment = paymentData?.data?.find((item) => item?.status === 1);
  const unsuccessfulPayment = paymentData?.data?.find((item) => item?.status === 2);
  const undecidedPayment = paymentData?.data?.find((item) => item?.status === 3);

  console.log(successfulPayment);
  console.log(unsuccessfulPayment);
  console.log(undecidedPayment);
  const total = {
    balance: (successfulPayment?.balance || 0) + (unsuccessfulPayment?.balance || 0) + (undecidedPayment?.balance || 0),
    total: (successfulPayment?.total || 0) + (unsuccessfulPayment?.total || 0) + (undecidedPayment?.total || 0),
  };

  console.log(total);
  return (
    <Card className="rct-block">
      <List className="p-0 fs-14">
        <ListItem className="mt-3 d-flex justify-content-between border-bottom  align-items-center p-15">
          <span className="font-weight-bold">Today's Payments</span>
        </ListItem>
        <ListItem className="d-flex justify-content-between align-items-center border-bottom p-15">
          <span>
            <i className="material-icons mr-25 text-warning fs-14">check_box</i>
            Total
          </span>
          <span>{`₦${total?.balance} (${total?.total})`}</span>
        </ListItem>
        <ListItem className="d-flex justify-content-between align-items-center border-bottom p-15">
          <span>
            <i className="material-icons mr-25 text-success fs-14">check_box</i>
            Successful
          </span>
          <span>{`₦${successfulPayment?.balance || 0} (${successfulPayment?.total || 0})`}</span>
        </ListItem>
        <ListItem className="d-flex justify-content-between align-items-center p-15">
          <span>
            <i className="material-icons mr-25 text-danger fs-14">access_time</i>
            Unsuccessful
          </span>
          <span>
            <span>{`₦${unsuccessfulPayment?.balance || 0} (${unsuccessfulPayment?.total || 0})`}</span>
          </span>
        </ListItem>
        <ListItem className="d-flex justify-content-between align-items-center p-15">
          <span>
            <i className="material-icons mr-25 text-danger fs-14">access_time</i>
            Undecided
          </span>
          <span>{`₦${undecidedPayment?.balance || 0} (${undecidedPayment?.total || 0})`}</span>
        </ListItem>
      </List>
    </Card>
  );
};

export default PaymentWidget;
