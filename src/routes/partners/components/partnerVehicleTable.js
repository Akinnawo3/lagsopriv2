import React, {Fragment, useRef, useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {revokePartnerVehicle} from "Actions/partnersAction";
import {connect} from "react-redux";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const PartnerVehicleTable = ({isLoading, partnerDetails, revokePartnerVehicle}) => {
    const [revoke_vehicle, setRevokeVehicle] = useState({})
    const inputEl = useRef(null)


  return (
    <div>
      <RctCollapsibleCard fullBlock style={{minHeight: "70vh"}}>
        {!isLoading && partnerDetails?.vehicle_data?.length > 0 && (
          <>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Plate No</TableCell>
                    <TableCell>Serial No</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {partnerDetails?.vehicle_data?.length  > 0 && partnerDetails?.vehicle_data.map((vehicle, key) => (
                        <TableRow hover key={key}>
                          <TableCell>
                              <Link to={`/admin/vehicles/${vehicle.vehicle_id}`}>
                              {vehicle?.car_number_plate}
                            </Link>
                          </TableCell>
                          <TableCell>{vehicle?.car_number}</TableCell>
                          <TableCell>{vehicle?.car_make}</TableCell>
                          <TableCell>{vehicle?.car_model}</TableCell>
                          <TableCell>
                            <Button onClick={() => {
                                setRevokeVehicle(vehicle);
                                inputEl.current.open()
                            }} className="bg-danger mt-3 text-white ml-3">
                              Revoke
                            </Button>
                          </TableCell>
                        </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            {/*<div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">*/}
            {/*  <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={partnerDetails?.vehicle_dataCount} onChange={paginate} />*/}
            {/*</div>*/}
          </>
        )}
        {partnerDetails?.vehicle_data?.length === 0 && !isLoading && <EmptyData />}
      </RctCollapsibleCard>
       <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You want to revoke vehicle?"
        message="This will revoke vehicle from  partner and driver"
        onConfirm={() => {
            revokePartnerVehicle(revoke_vehicle?._id, revoke_vehicle, partnerDetails)
            inputEl.current.close();
        }}
        />
    </div>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    revokePartnerVehicle: (vehicle_id, vehicleDetails, partnerDetails) => dispatch(revokePartnerVehicle(vehicle_id, vehicleDetails, partnerDetails)),





  };
}

const mapStateToProps = (state) => ({
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerVehicleTable)
