/**
 * Trip Card
 */
import React, { Component, useEffect, useState } from 'react';
import { Badge } from 'reactstrap';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';

// card component
import { RctCardFooter } from 'Components/RctCard';

//chart component
import DoughnutChart from 'Components/Charts/DoughnutChart';

// intl messagess
import IntlMessages from 'Util/IntlMessages';
import axios from "axios";
import api from "../../environments/environment";
import { getFirstDayOfMonth, getLastDayOfMonth, getTodayDate } from "Helpers/helpers";
import { NotificationManager } from "react-notifications";

const TripCard = () => {
   const [tripCountComplete, settTripCountComplete] = useState(0)
   const [tripCountWaiting, settTripCountWaiting] = useState(0)
   const [tripCountCancel, settTripCountCancel] = useState(0)
   const [tripCountCurrent, settTripCountCurrent] = useState(0)
   const [tripCount, settTripCount] = useState(0)



   useEffect(() => {
      getTripCount();
      getTripCountCancelled();
      getTripCountCompleted();
      getTripCountCurrent();
      getTripCountWaiting();
   }, [])




   const getTripCount = async () => {
      try {
         const res = await axios.get(`${api.trip}/v1.1/trips/?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}`);
         if (res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
         } else {
            settTripCount(res.data.data.total ? res.data.data.total : 0)
         }
      } catch (err) {
      }
   }

   const getTripCountWaiting = async () => {
      try {
         const res = await axios.get(`${api.trip}/v1.1/trips/?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&trip_status=waiting`);
         if (res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
         } else {
            settTripCountWaiting(res.data.data.total ? res.data.data.total : 0)
         }
      } catch (err) {
      }
   }
   const getTripCountCompleted = async () => {
      try {
         const res = await axios.get(`${api.trip}/v1.1/trips/?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&trip_status=completed`);
         if (res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
         } else {
            settTripCountComplete(res.data.data.total ? res.data.data.total : 0)
         }
      } catch (err) {
      }
   }

   const getTripCountCancelled = async () => {
      try {
         const res = await axios.get(`${api.trip}/v1.1/trips/?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&trip_status=cancel`);
         if (res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
         } else {
            settTripCountCancel(res.data.data.total ? res.data.data.total : 0)
         }
      } catch (err) {
      }
   }

   const getTripCountCurrent = async () => {
      try {
         const res = await axios.get(`${api.trip}/v1.1/trips/?component=count&trip_status=on_ride`);
         // const res = await axios.get(`${api.trip}/v1.1/trips/?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&trip_status=on_ride`);
         if (res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
         } else {
            settTripCountCurrent(res.data.data.total ? res.data.data.total : 0)
         }
      } catch (err) {
      }
   }




   return (
      <div className="support-widget-wrap">
         <div className="text-center py-10">
            <DoughnutChart completed={tripCountComplete} cancelled={tripCountCancel} current={tripCountCurrent} waiting={tripCountWaiting} />
         </div>
         <List className="list-unstyled p-0">
            <ListItem className=" px-15 py-10 d-flex justify-content-between align-content-center bg-white">
               <p className="mb-0 content-title"><IntlMessages id="widgets.total" /></p>
               <Badge color="primary" className="px-4">{tripCount}</Badge>
            </ListItem>
            <ListItem className="bg-white px-15 py-10 d-flex justify-content-between align-content-center">
               <p className="mb-0 content-title"><IntlMessages id="widgets.waiting" /></p>
               <Badge color="warning" className="px-4">{tripCountWaiting}</Badge>
            </ListItem>
            <ListItem className="bg-white px-15 py-10 d-flex justify-content-between align-content-center">
               <p className="mb-0 content-title"><IntlMessages id="widgets.completed" /></p>
               <Badge color="success" className="px-4">{tripCountComplete}</Badge>
            </ListItem>
            <ListItem className="bg-white px-15 py-10 d-flex justify-content-between align-content-center">
               <p className="mb-0 content-title"><IntlMessages id="widgets.current" /></p>
               <Badge color="secondary" className="px-4">{tripCountCurrent}</Badge>
            </ListItem>
            <ListItem className="bg-white px-15 py-10 d-flex justify-content-between align-content-center">
               <p className="mb-0 content-title"><IntlMessages id="widgets.cancelled" /></p>
               <Badge color="danger" className="px-4">{tripCountCancel}</Badge>
            </ListItem>
         </List>
         <RctCardFooter customClasses="d-flex justify-content-between border-0 align-items-center">
         </RctCardFooter>
      </div>
   );

}

export default TripCard;
