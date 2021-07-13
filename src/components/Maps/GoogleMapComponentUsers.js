/**
 * Google Map
 */
import React, {useEffect, useState} from 'react';
import GoogleMap from 'google-map-react';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {NotificationManager} from "react-notifications";


const  GoogleMapComponentUser  = ({match})=> {
    const [center, setCenter] = useState([6.459970538, 3.301247232])
    const [search, setSearch] = useState('')
    const [zoom, setZoom] = useState(14)
    const [options, setOptions] = useState([])
    const AnyReactComponent = ({text, cord}) =>
        <div>
            <div className="tooltipo"> <i className="zmdi zmdi-pin text-primary zoom" style={{fontSize: '30px'}}><span className="ml-1 font-weight-bold text-primary" style={{fontSize: '10px'}}>{text}</span></i>
                <div className="tooltiptexto">
                    <div>
                        Driver name: {cord.name}
                    </div>
                    <div>
                        Plate No: {cord.plate_no}
                    </div>
                </div>
            </div>
        </div>
    const data = [
        {
            lat:6.45878949,
            lng: 3.278338958,
            name: 'Tope Chi',
            plate_no: 'ASCFR890'
        },
        {
            lat:6.459554831,
            lng: 3.284814647,
            name: 'Sunday Jim',
            plate_no: 'ANMCFR894'
        },
        {
            lat:6.459970538,
            lng: 3.301247232,
            name: 'Jaye Mark',
            plate_no: 'APMCFR838'
        },
        {
            lat:6.460063551,
            lng: 3.312027333,
            name: 'Tim Deo',
            plate_no: 'AMKFR892'
        },
    ]

    useEffect(()=> {
        const dataArr = []
        data.map(dat => {
            dataArr.push({name:dat.plate_no, value: dat.plate_no})
        })
        setOptions(dataArr)
    },[])

    const MAP_OPTIONS = {
        // scrollwheel: false,
        panControl: false,
        mapTypeControl: false,
    }

 const  _onClick = ({x, y, lat, lng, event}) => console.log(event)


    return (
      <div className="map-wrapper">
        <RctCollapsibleCard heading="Riders Map">
          <GoogleMap
            bootstrapURLKeys={{ key: "AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0" }}
            yesIWantToUseGoogleMapApiInternals={true}
            center={center}
            zoom={zoom} style={{ position: 'relative', width: '100%', height: 400 }}
            options={MAP_OPTIONS}
            hoverDistance={40 / 2}
            onClick={_onClick}
          >
            {data.map((m, index)=> (
                <AnyReactComponent
                    lat={m.lat}
                    lng={m.lng}
                    key={index}
                    text={m.plate_no}
                    cord={m}
                />
            ))}
          </GoogleMap>
            <div>Transit: 10</div>
            <div>Booking: 10</div>
        </RctCollapsibleCard>
      </div>
    );

}

export default GoogleMapComponentUser


