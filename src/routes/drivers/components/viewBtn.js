/**
 * Simple Menu
 */
import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux"
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {changeDriverStatus} from "../../../actions/driverAction";
import AssignForm from "Routes/drivers/components/assignForm";
import {ModalHeader, ModalBody, Modal} from "reactstrap";

 const ViewBtn = ({driver, changeDriverStatus, vehicles, getDrivers2, currentPage, status}) => {
     const [anchorEl, setAnchorEl] = useState(null);
     const [addVehicleModal, setAddVehicleModal] = useState(false)

  const  button = undefined;
   const handleClose = () => {
        setAnchorEl(null)
    };
  const  handleClick = event => {
        setAnchorEl(event.currentTarget)
    };

     const opnAddVehicleModal = (e) => {
         e.preventDefault();
         setAddVehicleModal(true)
     }



     const onAddVehicleModalClose = () => {
         setAddVehicleModal(false);
     }


        return (
            <div>
                <Button variant="contained" color="primary" className="text-white" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={handleClick} >
                    <i title="view" className="ti-eye" />
                {/*    <IconButton variant="contained" color="primary" className="text-white" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick} aria-label="Delete"><i className="ti-eye"></i></IconButton>*/}
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
                    <MenuItem ><Link to={`/admin/drivers/${driver.auth_id}`}>Profile</Link></MenuItem>
                    {/*{driver.driver_data?.driver_status === 0 && <MenuItem onClick={()=> {*/}
                    {/*    changeDriverStatus(driver.auth_id, '1', status, currentPage);*/}
                    {/*    handleClose()*/}
                    {/*}}>Accept</MenuItem>}*/}
                    {/*{driver.driver_data?.driver_status === 1 && <MenuItem onClick={()=> {*/}
                    {/*    changeDriverStatus(driver.auth_id, '2', status, currentPage);*/}
                    {/*    handleClose()*/}
                    {/*}}>Approve</MenuItem>}*/}
                    {/*{driver.driver_data?.driver_status === 2 && <MenuItem onClick={()=> {*/}
                    {/*    changeDriverStatus(driver.auth_id, '3', status, currentPage);*/}
                    {/*    handleClose()*/}
                    {/*}}>Suspend</MenuItem>}*/}
                    {/*{driver.driver_data?.driver_status === 3 && <MenuItem onClick={()=> {*/}
                    {/*    changeDriverStatus(driver.auth_id, '1', status, currentPage);*/}
                    {/*    handleClose()*/}
                    {/*}}>Reactivate</MenuItem>}*/}
                    {/*{driver.driver_data?.driver_status == 2 && !driver.driver_data?.vehicle_id && <MenuItem onClick={(e)=> {*/}
                    {/*    opnAddVehicleModal(e)*/}
                    {/*    handleClose()*/}
                    {/*}}>Assign</MenuItem>}*/}

                </Menu>
                <Modal isOpen={addVehicleModal} toggle={() => onAddVehicleModalClose()}>
                    <ModalHeader toggle={() => onAddVehicleModalClose()}>
                        Assign Vehicle
                    </ModalHeader>
                    <ModalBody>
                        <AssignForm driver={driver}  vehicles={vehicles} onAddVehicleModalClose={onAddVehicleModalClose} driver_status={status} current_page={currentPage}/>
                    </ModalBody>
                </Modal>
            </div>
        );
 }


function mapDispatchToProps(dispatch) {
    return {
        changeDriverStatus: (auth_id, driver_status, status, current_page) => dispatch(changeDriverStatus(auth_id, driver_status, status, current_page)),
    };
}


export default connect( null, mapDispatchToProps)(ViewBtn)
