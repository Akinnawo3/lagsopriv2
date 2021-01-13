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
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import AssignForm from "Routes/drivers/components/assignForm";
import {getVehicles} from "Actions/vehicleAction";

 const ViewBtn = ({driver, changeDriverStatus, vehicles}) => {
     const [anchorEl, setAnchorEl] = useState(null);
     const [addNewUserModal, setAddNewUserModal] = useState(false)
     // const [selectedIndex, setSelectedIndex] = useState(1);

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
                    <MenuItem ><Link to={`/app/drivers/${driver.id}`}>Profile</Link></MenuItem>
                    {driver.status == 0 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '2');
                        handleClose()
                    }}>Approve</MenuItem>}
                    {driver.status == 1 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '4');
                        handleClose()
                    }}>Deactivate</MenuItem>}
                    {driver.status == 4 && <MenuItem onClick={()=> {
                        changeDriverStatus(driver.id, '1');
                        handleClose()
                    }}>Activate</MenuItem>}
                    {driver.status == 2 && <MenuItem onClick={(e)=> {
                        opnAddNewUserModal(e)
                        handleClose()
                    }}>Assign</MenuItem>}

                </Menu>
                <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                    <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                        Assign Vehicle
                    </ModalHeader>
                    <ModalBody>
                        <AssignForm driver={driver} vehicles={vehicles} />
                    </ModalBody>
                </Modal>
            </div>
        );
 }


function mapDispatchToProps(dispatch) {
    return {
        changeDriverStatus: (id, status) => dispatch(changeDriverStatus(id, status)),
    };
}


export default connect( null, mapDispatchToProps)(ViewBtn)
