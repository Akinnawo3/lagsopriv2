/**
 * Google Map
 */
import React, {useState} from 'react';
import GoogleMap from 'google-map-react';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {m} from "Helpers/helpers";


const  GoogleMapComponentUser  = ({match, userLocation, getUsersLocation, waiting, moving})=> {
    const [center, setCenter] = useState([6.459970538, 3.301247232])
    const [zoom, setZoom] = useState(14)


    const getUsersNewLocations = (centerValue) => {
       const geoCode = m({
           latitude: centerValue[0],
           longitude: centerValue[1]
       }, {
           latitude: center[0],
           longitude: center[1]
       })

        if(geoCode >= 3.5) {
            setCenter(centerValue);
            getUsersLocation(centerValue[1], centerValue[0])
        }
    }

    const MAP_OPTIONS = {
        panControl: false,
        mapTypeControl: false,
    }

    const  _onClick = ({x, y, lat, lng, event}) => {
        setCenter([lat, lng])
        getUsersLocation(lng, lat)
    }



    const AnyReactComponent = () =>
        <div>
            <i className="zmdi zmdi-pin text-danger zoom" style={{fontSize: '30px'}} />
        </div>


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
            onBoundsChange={center => getUsersNewLocations(center)}
          >
            {userLocation.map((m, index)=> (
                <AnyReactComponent
                    lat={m.location?.coordinates[1]}
                    lng={m.location?.coordinates[0]}
                    key={index}
                />
            ))}
          </GoogleMap>
            <div>Waiting Riders: {waiting}</div>
            <div>Moving Riders: {moving}</div>
        </RctCollapsibleCard>
      </div>
    );

}

export default GoogleMapComponentUser


