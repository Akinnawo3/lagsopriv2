/**
 * Email Prefrences Page
 */
import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import Button from '@material-ui/core/Button';
import { NotificationManager } from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Card, CardBody, Col, Row, Table} from 'reactstrap';

// intl messages
import IntlMessages from 'Util/IntlMessages';
import StarRatings from "react-star-ratings";

export default class EmailPrefrences extends Component {



   render() {
      return (
         <div className="prefrences-wrapper">
            <div className="animated fadeIn">
               <Row>
                  <Col xs="12" sm="6" lg="3">
                     <Card className="text-dark" >
                        <CardBody className="pb-0">
                           {/*<div className="float-right" style={{color: "black"}}>*/}
                           {/*  <i className="fa fa-user fa-2x"></i>*/}
                           {/*</div>*/}
                           <div className="text-value">Aggregate Rating</div>
                           <div>All time Statistic</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                           <span className="pr-2 font-2xl">3</span>
                           <StarRatings
                               rating={3}
                               starRatedColor="#ffc107"
                               starDimension="20px"
                               // changeRating={this.changeRating}
                               numberOfStars={5}
                               name='rating'
                           />
                        </div>
                     </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="3">
                     <Card className="text-dark" >
                        <CardBody className="pb-0">
                           {/*<div className="float-right" style={{color: "black"}}>*/}
                           {/*  <i className="fa fa-user fa-2x"></i>*/}
                           {/*</div>*/}
                           <div className="text-value">Total Reviews</div>
                           <div>All time Statistic</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                           <span className="pr-2 font-2xl">125</span>
                        </div>
                     </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="3">
                     <Card className="text-dark" >
                        <CardBody className="pb-0">
                           {/*<div className="float-right" style={{color: "black"}}>*/}
                           {/*  <i className="fa fa-user fa-2x"></i>*/}
                           {/*</div>*/}
                           <div className="text-value">New Reviews</div>
                           <div>Activity from October</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                           <span className="pr-2 font-2xl">50</span>
                        </div>
                     </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="3">
                     <Card className="text-dark" >
                        <CardBody className="pb-0">
                           {/*<div className="float-right" style={{color: "black"}}>*/}
                           {/*  <i className="fa fa-user fa-2x"></i>*/}
                           {/*</div>*/}
                           <div className="text-value">Ratings Change</div>
                           <div>Activity from October</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                           <span className="pr-2 font-2xl">0.1%</span>
                        </div>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col xl={12}>
                     <Card>
                        {/*<CardHeader className="bg-secondary d-flex">*/}
                        {/*<div className="w-75 d-flex align-items-center ">*/}
                        {/*  <form className="w-100 d-flex align-items-center">*/}
                        {/*    <Input type="text"*/}
                        {/*      // placeholder="Search by Id"*/}
                        {/*           className="w-25"*/}
                        {/*           name="formData"*/}
                        {/*           value={formData}*/}
                        {/*           onChange={onChange}*/}
                        {/*    />*/}
                        {/*    <button className="btn btn-success" type="submit">Search</button>*/}
                        {/*  </form>*/}
                        {/*</div>*/}
                        {/*<div className="w-25 text-right">*/}
                        {/*  <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />*/}
                        {/*  <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />*/}
                        {/*  <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />*/}
                        {/*</div>*/}
                        {/*</CardHeader>*/}
                        {/*<CardHeader className="d-flex align-items-center">*/}
                        {/*  <div className="w-25">*/}
                        {/*    Tope Ajibuwa*/}
                        {/*  </div>*/}
                        {/*  /!*<DriverHeader/>*!/*/}
                        {/*</CardHeader>*/}
                        <CardBody>
                           <Table responsive hover>
                              <thead>
                              <tr>
                                 <th scope="col">Date(s)</th>
                                 <th scope="col">Review(s)</th>
                                 <th scope="col">Channel</th>
                                 <th scope="col">Rating(s)</th>
                                 {/*<th scope="col">Driver License Verified</th>*/}
                                 {/*<th scope="col">NIN Verified</th>*/}
                                 {/*<th scope="col">Action</th>*/}
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                 <td>2020-10-6</td>
                                 <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
                                 <td>USSD</td>
                                 <td>
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffc107"
                                        starDimension="20px"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                 </td>
                              </tr>
                              <tr>
                                 <td>2020-10-6</td>
                                 <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
                                 <td>USSD</td>
                                 <td>
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffc107"
                                        starDimension="20px"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                 </td>
                              </tr>
                              <tr>
                                 <td>2020-10-6</td>
                                 <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
                                 <td>USSD</td>
                                 <td>
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffc107"
                                        starDimension="20px"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                 </td>
                              </tr>
                              <tr>
                                 <td>2020-10-6</td>
                                 <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
                                 <td>USSD</td>
                                 <td>
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffc107"
                                        starDimension="20px"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                 </td>
                              </tr>
                              <tr>
                                 <td>2020-10-6</td>
                                 <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
                                 <td>USSD</td>
                                 <td>
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffc107"
                                        starDimension="20px"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                 </td>
                              </tr>
                              <tr>
                                 <td>2020-10-6</td>
                                 <td>The Driver Drives well and dosent over speed, and he obeys traffic laws</td>
                                 <td>USSD</td>
                                 <td>
                                    <StarRatings
                                        rating={3}
                                        starRatedColor="#ffc107"
                                        starDimension="20px"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                 </td>
                              </tr>
                              </tbody>
                           </Table>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </div>
      );
   }
}
