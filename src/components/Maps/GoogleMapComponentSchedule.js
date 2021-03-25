/**
 * Google Map
 */
import React, {useEffect, useState} from 'react';
import GoogleMap from 'google-map-react';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {NotificationManager} from "react-notifications";


const  GoogleMapComponentSchedule  = ({match})=> {
    const [center, setCenter] = useState([6.459970538, 3.301247232])
    const [search, setSearch] = useState('')
    const [zoom, setZoom] = useState(14)
    const [options, setOptions] = useState([])
    const AnyReactComponent = ({text, cord}) =>
        <div>
            <div className="tooltipo">
                <img
                    src={require('Assets/img/schsuccess.png')}
                    // alt="user profile"
                    className="img-fluid rounded-circle"
                    width="46"
                    height="46"
                />
                {/*<i className="zmdi zmdi-car text-secondary zoom" style={{fontSize: '30px'}}><span className="ml-1 font-weight-bold text-secondary" style={{fontSize: '10px'}}>{text}</span></i>*/}
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
        // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }

 const  _onClick = ({x, y, lat, lng, event}) => console.log(event)

   const handleChange = (value)=> {
        setSearch(value)
    }

    const getVehicleCord = ()=> {
        if(search) {
            data.map(dat=> {
                if(dat.plate_no.toLowerCase() === search.toLocaleLowerCase()) {
                    setCenter([dat.lat, dat.lng])
                    // setZoom(17)
                }
            })
        } else {
            NotificationManager.error('Enter plate No');
        }
    }

    return (
      <div className="map-wrapper">
        {/*<PageTitleBar title={<IntlMessages id="sidebar.googleMaps" />} match={this.props.match} />*/}
        <RctCollapsibleCard heading="Distribution">
          <GoogleMap
            bootstrapURLKeys={{ key: "AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0" }}
            yesIWantToUseGoogleMapApiInternals={true}
            center={center}
            zoom={zoom} style={{ position: 'relative', width: '100%', height: 300 }}
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
        </RctCollapsibleCard>
      </div>
    );

}

export default GoogleMapComponentSchedule


