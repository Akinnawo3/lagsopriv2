/**
 * Payment Widget
 */
import React, {Component, useEffect, useState} from 'react';
import { Card, CardTitle } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import axios from "axios";
import api from "../../environments/environment";
import {getTodayDate} from "Helpers/helpers";
import {NotificationManager} from "react-notifications";

const PaymentWidget = () =>  {
    const [count, setCount] = useState(0)
    const [countSuccess, setCountSuccess] = useState(0)
    const [countUnsuccess, setCountUnsuccess] = useState(0)

    useEffect(() => {
        getPaymentCount();
        getPaymentCountSuccessful();
        getPaymentCountUnsuccessful();
    },[])

    const getPaymentCount = async () => {
        try {
            const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setCount(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    const getPaymentCountSuccessful = async () => {
        try {
            const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&transaction_status=2`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setCountSuccess(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    const getPaymentCountUnsuccessful = async () => {
        try {
            const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}&transaction_status=3`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setCountUnsuccess(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }
        return (
            <Card className="rct-block">
                <List className="p-0 fs-14">
                    <ListItem className="mt-3 d-flex justify-content-between border-bottom  align-items-center p-15">
                        <span className="font-weight-bold">
                            Today Payments
                        </span>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center border-bottom p-15">
                        <span>
                            <i className="material-icons mr-25 text-warning fs-14">check_box</i>
                            Total
                        </span>
                        <span>{count}</span>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center border-bottom p-15">
                        <span>
                            <i className="material-icons mr-25 text-success fs-14">check_box</i>
                            Successful
                        </span>
                        <span>{countSuccess}</span>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center p-15">
                        <span>
                            <i className="material-icons mr-25 text-danger fs-14">access_time</i>
                           Unsuccessful
                        </span>
                        <span>{countUnsuccess}</span>
                    </ListItem>
                </List>
            </Card>
        );
}

export default PaymentWidget
