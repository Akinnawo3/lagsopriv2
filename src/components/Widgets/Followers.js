/**
 * Followers Widget
 */
import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class FollowersWidget extends Component {
   render() {
      return (
         <Card className="rct-block">
            <CardBody className="pb-0 d-flex justify-content-between">
               <h4 className="mb-5">Today Refunds</h4>
            </CardBody>
            <List className="p-0">
               <ListItem className="d-flex justify-content-between border-bottom py-5 fs-14 px-20">
                  <span>
                       <i className="material-icons mr-25 text-success fs-14">check_box</i>
                      Completed
                  </span>
                  <span>5400</span>
               </ListItem>
               <ListItem className="d-flex justify-content-between border-bottom py-5 fs-14 px-20">
                  <span>
                       <i className="material-icons mr-25 text-danger fs-14">access_time</i>
                      Pending
                  </span>
                  <span>2400</span>
               </ListItem>
            </List>
            <div className="px-20 py-10 d-flex justify-content-end">
               <Button className="btn-xs" variant="contained" size="small" className="text-white" color="primary">
                  <IntlMessages id="button.seeInsights" />
               </Button>
            </div>
         </Card>
      );
   }
}
