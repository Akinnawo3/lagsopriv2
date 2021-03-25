/**
 * Simple Menu
 */
import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux"
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {changeDriverStatus} from "Actions/driverAction";
import AssignForm from "Routes/drivers/components/assignForm";
import {ModalHeader, ModalBody, Modal} from "reactstrap";

 const ViewBtn = ({driver, changeDriverStatus, vehicles, getDrivers2}) => {
     const [anchorEl, setAnchorEl] = useState(null);
     const [addNewUserModal, setAddNewUserModal] = useState(false)

  const  button = undefined;
   const handleClose = () => {
        setAnchorEl(null)
    };
  const  handleClick = event => {
        setAnchorEl(event.currentTarget)
    };

     const opnAddNewUserModal = (e) => {
         e.preventDefault();
         setAddNewUserModal(true)
     }



     const onAddUpdateUserModalClose = () => {
         setAddNewUserModal(false);
     }


        return (
            <div>
                <Button variant="contained" color="primary" className="text-white" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={handleClick} >
                    <i title="view" className="ti-eye" />
                {/*    <IconButton variant="contained" color="primary" className="text-white" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick} aria-label="Delete"><i className="ti-eye"></i></IconButton>*/}
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
                    <MenuItem ><Link to={`/admin/drivers/${driver.id}`}>Profile</Link></MenuItem>
                    {driver.status == 0 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '1', driver.email, driver.firstName);
                        handleClose()
                    }}>Accept</MenuItem>}
                    {driver.status == 1 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '2', driver.email, driver.firstName);
                        handleClose()
                    }}>Approve</MenuItem>}
                    {driver.status == 2 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '3', driver.email, driver.firstName);
                        handleClose()
                    }}>Suspend</MenuItem>}
                    {driver.status == 3 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '1', driver.email, driver.firstName);
                        handleClose()
                    }}>Reactivate</MenuItem>}
                    {driver.status == 2 && !driver.vehicleId && <MenuItem onClick={(e)=> {
                        opnAddNewUserModal(e)
                        handleClose()
                    }}>Assign</MenuItem>}

                </Menu>
                <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                    <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                        Assign Vehicle
                    </ModalHeader>
                    <ModalBody>
                        <AssignForm driver={driver}  vehicles={vehicles} onAddUpdateUserModalClose={onAddUpdateUserModalClose} getDrivers2={getDrivers2}/>
                    </ModalBody>
                </Modal>
            </div>
        );
 }


function mapDispatchToProps(dispatch) {
    return {
        changeDriverStatus: (id, status, emailAddress, driverName) => dispatch(changeDriverStatus(id, status, emailAddress, driverName)),
    };
}


export default connect( null, mapDispatchToProps)(ViewBtn)
