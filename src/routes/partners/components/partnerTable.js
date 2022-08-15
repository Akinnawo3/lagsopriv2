import React, {useState, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import Pagination from "react-js-pagination";
import {Form, FormGroup, Label, Input, Badge, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {useHistory} from "react-router-dom";
import {createPartners, getPartners, getPartnersCount, searchPartners} from "Actions/partnersAction";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {calculatePostDate, getTodayDate} from "Helpers/helpers";
import {getUserExport} from "Actions/userAction";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {NotificationManager} from "react-notifications";
const qs = require("qs");



const PartnerTable = ({
  loading,
  header,
  partners,
  partnersCount,
  getPartners,
  getUserExport,
  getPartnersCount,
  searchPartners,
  createPartners,
    status = ''
}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const exportRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [org_name, setOrg_name] = useState('')
  const [formData, setFormData] = useState({
    last_name: '',
    first_name: '',
    phone_number: '',
    email: '',
    account_type: 'individual',
    user_type: 'partner',
    account_class: 'B',
    nin: '',
    vehicle_interested: {
      unit: '',
      amount: '140000',
      has_driver: '0'
    },
    partner_driver_payment: {
      type: '',
      driver_payment: ''
    }
  })

  const {last_name, first_name, account_type, email, password, phone_number, user_type, account_class, nin, vehicle_interested, partner_driver_payment} = formData

  const data =
      {
        first_name: account_type === 'individual' ? first_name : org_name,
        last_name: account_type === 'individual' ? last_name : org_name,
        account_type,
        email,
        phone_number,
        user_type,
        account_class,
        nin,
        vehicle_interested,
        partner_driver_payment
      }


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPartners(pageNumber, false);
    window.scrollTo(0, 0);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getUserExport('partner', '', '', startDate, endDate)
  }

  const handleFilter = () => {
    getPartners(1, false, startDate, endDate, status)
    getPartnersCount(startDate, endDate)
  }

  const handleSuccess = () => {
    setIsModalOpen(false);
    setFormData({
      last_name: '',
      first_name: '',
      phone_number: '',
      email: '',
      password: '',
      account_type: 'individual',
      user_type: 'partner',
      account_class: '',
      nin: '',
      vehicle_interested: {
        unit: '',
        amount: '140000',
        has_driver: '0'
      },
      partner_driver_payment: {
        type: '',
        driver_payment: ''
      }
    });
    setOrg_name('')
  }

  return (
    <div>
          <RctCollapsibleCard heading={header} fullBlock>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <SearchComponent setCurrentPage={setCurrentPage} getSearchedData={searchPartners} getPreviousData={getPartners} getCount={getPartnersCount} />
              <IconButton mini="true" className="search-icon-btn">
                <i className="zmdi zmdi-search"></i>
              </IconButton>
              <MobileSearchForm
                  // isOpen={isMobileSearchFormVisible}
                  // onClose={() => this.setState({ isMobileSearchFormVisible: false })}
              />
            </li>
            {/*<div>*/}
            <li className="list-inline-item search-icon d-inline-block mb-2 ml-3">
              <small className="fw-bold mr-2">From</small>
              <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {
                setStartDate(e.target.value)
              }} />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <small className="fw-bold mr-2">To</small>
              <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {
                setEndDate(e.target.value)
              }} />
            </li>
            <Button onClick={() => handleFilter()} style={{height: '30px'}} className='align-items-center justify-content-center' color='success'>Apply filter</Button>
            {/*</div>*/}
            <div className="float-right">
              <a href="#" onClick={() => setIsModalOpen(true)} color="primary" className="caret btn-sm mr-10">
                Create Partner <i className="zmdi zmdi-plus"></i>
              </a>
              {partners.length > 0 && (
                  <Button onClick={() => handleExport()} style={{height: '30px'}} className='align-items-center justify-content-center mr-2' color='primary'> <i className="zmdi zmdi-download mr-2"></i>  Export to Excel</Button>
              )}
            </div>
            {partners.length > 0 && (
                <>
                  <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                      <TableHead>
                        <TableRow hover>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Phone No</TableCell>
                          <TableCell>Date / Time of Registration</TableCell>
                          <TableCell>Account Type</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          {partners.map((partner, key) => (
                              <TableRow hover key={key}>
                                <TableCell>{partner?.partner_data?.account_type === 'individual' ? `${partner.first_name} ${partner.last_name}` : partner.first_name}</TableCell>
                                {/*<TableCell>{partner.last_name}</TableCell>*/}
                                <TableCell>{partner.email}</TableCell>
                                <TableCell>{partner.phone_number}</TableCell>
                                <TableCell>{calculatePostDate(partner?.partner_data?.createdAt)}</TableCell>
                                <TableCell>{partner?.partner_data?.account_type}</TableCell>
                                <TableCell>
                                  <Badge color={partner?.partner_data?.partner_status === 4 ? "success" : partner?.partner_data?.partner_status === 2 ? 'primary' : "warning"}>{partner?.partner_data?.partner_status === 4 ? "Approved" : partner?.partner_data?.partner_status === 2 ? "Verified" : "Pending"}</Badge>
                                </TableCell>
                                <TableCell>
                                  <button type="button" className="rct-link-btn text-primary" title="view details">
                                    <Link to={`/admin/partners/${partner.auth_id}`}>
                                      <i className="ti-eye" />
                                    </Link>
                                  </button>
                                </TableCell>
                              </TableRow>
                          ))}
                        </Fragment>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={partnersCount} onChange={paginate} />
                  </div>
                </>
            )}
            {!loading && partners.length < 1 && <EmptyData />}
          </RctCollapsibleCard>

      {/*create partner modal*/}
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>Create Partner</ModalHeader>
        <Form onSubmit={(e) => {
          e.preventDefault();
          if(vehicle_interested?.has_driver === '1') {
            if(parseInt(vehicle_interested.amount) <  140000) {
              return NotificationManager.error('Equity payment amount must be 140000 or above')
            }
          }
          createPartners(data, handleSuccess)
        }}>
          <ModalBody>
            <FormGroup>
              <Label>Register as an</Label>
              <Input type="select" value={account_type} onChange={onChange} name='account_type' required>
                <option value="individual">Individual</option>
                <option value="organization">Organisation</option>
              </Input>
            </FormGroup>
            {/*<FormGroup>*/}
            {/*  <Label>Register as an</Label>*/}
            {/*  <Input type="select" value={account_class} onChange={onChange} name='account_class' required>*/}
            {/*    <option value="">Select Account class</option>*/}
            {/*    <option value="A">A</option>*/}
            {/*    <option value="B">B</option>*/}
            {/*  </Input>*/}
            {/*</FormGroup>*/}
            {account_type === 'organization' &&
                <FormGroup>
                  <Label for="firstName">Organisation Name</Label>
                  <Input type="text" value={org_name}   onChange={(e) => setOrg_name(e.target.value)} required />
                </FormGroup>
            }
            {account_type === 'individual' &&
                <>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" value={first_name}  name='first_name' onChange={onChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phoneNumber">Last Name</Label>
                    <Input type="text" value={last_name}  name='last_name' onChange={onChange} required />
                  </FormGroup>
                </>
            }
            <FormGroup>
              <Label for="text">Email</Label>
              <Input type="email" value={email}  name='email' onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="text">Phone Number</Label>
              <Input type="number" value={phone_number}  name='phone_number' onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="text">NIN</Label>
              <Input type="number" value={nin}  name='nin' onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="text"> No of Vehicles Interested</Label>
              <Input type="number" value={vehicle_interested?.unit}   onChange={(e) => setFormData({...formData, vehicle_interested: {...vehicle_interested, unit: e.target.value}})} required />
            </FormGroup>
            <FormGroup>
              <Label>Do you have a driver for this vehicle?</Label>
              <Input type="select" value={vehicle_interested?.has_driver} onChange={(e) => setFormData({...formData, vehicle_interested: {...vehicle_interested, has_driver: e.target.value, amount: e.target.value === '0' ? '140000' : ''}})} required>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="text">Equity payment amount</Label>
              <Input readOnly={vehicle_interested?.has_driver === '0'} type="number" value={vehicle_interested?.amount}   onChange={(e) => setFormData({...formData, vehicle_interested: {...vehicle_interested, amount: e.target.value}})} required />
            </FormGroup>
            <FormGroup>
              <Label>Driver's payment type</Label>
              <Input type="select" value={partner_driver_payment?.type} onChange={(e) => setFormData({...formData, partner_driver_payment: {...partner_driver_payment, type: e.target.value}})} required>
                <option value="">Select</option>
                <option value="fixed">Fixed</option>
                <option value="percent">Percent</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="text">Driver's payment {partner_driver_payment?.type === 'percent' ? 'percentage' : 'amount'}</Label>
              <Input  type="number" value={partner_driver_payment?.driver_payment}   onChange={(e) => setFormData({...formData, partner_driver_payment: {...partner_driver_payment, driver_payment: e.target.value}})} required />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-success">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <DeleteConfirmationDialog ref={exportRef} title={'Are you sure you want to Export File?'} message={'This will send the excel file to your email'} onConfirm={confirmExport} />

    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPartners: (page_no, spinner, start_date, end_date) => dispatch(getPartners(page_no, spinner, start_date, end_date)),
    getPartnersCount: (start_date, end_date) => dispatch(getPartnersCount(start_date, end_date)),
    getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),
    searchPartners: (searchData) => dispatch(searchPartners(searchData)),
    createPartners: (data, handleSuccess) => dispatch(createPartners(data, handleSuccess)),


  };
}

const mapStateToProps = (state) => ({
  partners: state.partners.partners,
  partnersCount: state.partners.partnersCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerTable);
