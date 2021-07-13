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
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import AssignForm from "Routes/drivers/components/assignForm";
import {changeVehicleStatus} from "../../../actions/vehicleAction";

 const ViewBtn = ({vehicle, changeVehicleStatus}) => {
     const [anchorEl, setAnchorEl] = useState(null);
     // const [selectedIndex, setSelectedIndex] = useState(1);

   const handleClose = () => {
        setAnchorEl(null)
    };
  const  handleClick = event => {
        setAnchorEl(event.currentTarget)
    };




        return (
            <div>
                <Button variant="contained" color="primary" className="text-white" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={handleClick} >
                    <i title="view" className="ti-eye" />
                {/*    <IconButton variant="contained" color="primary" className="text-white" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick} aria-label="Delete"><i className="ti-eye"></i></IconButton>*/}
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
                    {vehicle.status == 2 && <MenuItem onClick={()=> {
                        changeVehicleStatus(vehicle.id, '1');
                        handleClose()
                    }}>Activate</MenuItem>}
                    {vehicle.status == 1 && <MenuItem onClick={()=> {
                        changeVehicleStatus(vehicle.id, '2')
                        handleClose()
                    }}>Deactivate</MenuItem>}
                </Menu>
            </div>
        );
 }


function mapDispatchToProps(dispatch) {
    return {
        changeVehicleStatus: (id, status) => dispatch(changeVehicleStatus(id, status))
    };
}
export default connect(null, mapDispatchToProps)(ViewBtn)
