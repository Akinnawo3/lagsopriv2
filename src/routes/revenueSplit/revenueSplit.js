
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import {Badge, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import api from "../../environments/environment";
import Spinner from "../../components/spinner/Spinner";
import {NotificationManager} from "react-notifications";



const  RevenueSplit = ({match}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [revenueSplit, setRevenueSplit] = useState([])
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateId, setUpdateId] = useState('')



    useEffect(()=> {
       getRevenueSplit()
    },[])



   const getRevenueSplit = async () => {
        setLoading(true)
        try {
          const res = await axios.get(`${api.revenueSplit}/api/rslist/`)
            setRevenueSplit(res.data)
            setLoading(false)
        }catch (e) {
            setLoading(false)
        }
   }

    const postRevenueSplit = async () => {
        const body = {name, percentage, walletNumber: '989898989898'}
        setIsOpen(false);
        try {
            const res = await axios.post(`${api.revenueSplit}/api/rslist/`, body)
            if(res.data) {
                await NotificationManager.success('Added Successfully!');
                setName('');
                setPercentage('');
              getRevenueSplit();
            }

        }catch (e) {
            NotificationManager.error('An error occurred try again');
        }
    }

    const updateRevenueSplit = async (id) => {
        const body = {name, percentage}
        setIsOpen(false);
        try {
            const res = await axios.put(`${api.revenueSplit}/api/rs/${id}/`, body)
            if(res.data) {
                await NotificationManager.success('updated Successfully!');
                setName('');
                setPercentage('');
                setUpdateId('');
                setIsUpdate(false)
                getRevenueSplit();
            }

        }catch (e) {
            NotificationManager.error('An error occurred try again');
            setName('');
            setPercentage('');
            setUpdateId('');
            setIsUpdate(false)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        !isUpdate ? postRevenueSplit() : updateRevenueSplit(updateId)
    }

    const handleUpdate = (item) => {
        setName(item.name);
        setPercentage(item.percentage)
        setUpdateId(item.id);
        setIsUpdate(true)
        setIsOpen(true)
    }

    const handleClose = () => {
        if(isUpdate) {
            setName('');
            setPercentage('')
            setUpdateId('')
            setIsUpdate(false);
        }
       setIsOpen(!isOpen)
    }

    console.log(updateId)


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Revenue Split"} match={match} />
            {loading && <Spinner />}
            {!loading && <RctCollapsibleCard fullBlock>
                <div className="row p-3" style={{backgroundColor: '#f8f9fa'}}>
                    <div className="col-sm-6 bg-white pb-4" style={{borderRadius: '10px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'}}>
                        <div className='mt-3' style={{color: '#2E407B'}}>Revenue deduction time</div>
                        <div className='px-3 mt-3' style={{fontSize: '12px', color: '#898888', fontStyle: 'italic'}}>Time</div>
                        <div className="row px-2" style={{color: '#4D4D4D'}}>
                            <div className='col-6 customRevenueTitle'>
                                <div className='p-2'>
                                    <Input type="select"    required>
                                        <option>23:00</option>
                                    </Input>
                                </div>
                            </div>
                            <div className='col-6 customRevenueTitle'>
                                <div className='p-2'>
                                    <Button type="button" variant="contained" className="text-white btn-success w-100">Set time</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-3" style={{backgroundColor: '#f8f9fa'}}>
                    <div className="col-sm-6 bg-white" style={{borderRadius: '10px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'}}>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div style={{color: '#2E407B'}}>Revenue Split</div>
                            {/*<div style={{fontSize: '12px', color: '#898888', fontStyle: 'italic'}}>Updated 2 months ago</div>*/}
                        </div>
                        <div className="row p-2 mt-4">
                            <div className='col-8 customRevenueTitle'>
                                Parameter
                            </div>
                            <div className='col-4 customRevenueTitle'>
                                Percentage
                            </div>
                        </div>
                        {revenueSplit.length > 0 && revenueSplit.map(item => (
                            <div key={item.id} className="row p-2" style={{color: '#4D4D4D'}}>
                                <div className='col-8 customRevenueTitle'>
                                    <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                        {item.name}
                                    </div>
                                </div>
                                <div className='col-3 customRevenueTitle'>
                                    <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                        {item.percentage}
                                    </div>
                                </div>
                                <div className='col-1 customRevenueTitle'>
                                    <button type="button" className="rct-link-btn" onClick={() => handleUpdate(item)}><i className="ti-pencil"></i></button>
                                </div>
                            </div>
                        ))}

                        <div className="py-4 px-2">
                            <Button onClick={()=> setIsOpen(true)} type="button" variant="contained" className="text-white btn-primary">Add Parameter</Button>

                        </div>
                    </div>
                </div>


            </RctCollapsibleCard>}
            <Modal isOpen={isOpen}
                   toggle={handleClose}
                >
               <ModalBody className="p-4">
                   <div style={{color: '#2E407B'}}>Add new parameter</div>
                   <form onSubmit={onSubmit}>
                       <div className="row p-2" style={{color: '#4D4D4D'}}>
                           <div className='col-8 customRevenueTitle'>
                               <div className='p-2'>
                                   <div className='customRevenueTitle pb-1'>
                                       Parameter
                                   </div>
                                   <Input value={name} onChange={(e) => setName(e.target.value)} type="text"    required />
                               </div>
                           </div>
                           <div className='col-4 customRevenueTitle'>
                               <div className='p-2'>
                                   <div className='customRevenueTitle pb-1'>
                                       Percentage
                                   </div>
                                   <Input value={percentage} onChange={(e) => setPercentage(e.target.value)} type="text"   required />
                               </div>
                           </div>
                       </div>
                       <div className='p-2'>
                           <Button type="submit" variant="contained" className="text-white btn-success mt-4 w-100">{isUpdate ? 'Update parameter' : 'Add parameter'}</Button>

                       </div>
                   </form>

               </ModalBody>
            </Modal>
        </div>
    );

}

export default RevenueSplit;
