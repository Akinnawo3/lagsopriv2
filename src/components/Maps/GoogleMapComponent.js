
/**
 * Google Map
 */
import React, { useState } from 'react';
import GoogleMap from 'google-map-react';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import { m } from "Helpers/helpers";

const GoogleMapComponent = ({ match, userLocation, getUsersLocation, waiting, moving }) => {
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

        if (geoCode >= 3.0) {
            getUsersLocation(centerValue[1], centerValue[0])
            setCenter(centerValue);
        }
    }

    const MAP_OPTIONS = {
        panControl: false,
        mapTypeControl: false,
    }

    // const  _onClick = ({x, y, lat, lng, event}) => {
    //     setCenter([lat, lng])
    //     getUsersLocation(lng, lat)
    // }


    const AnyReactComponent = ({ text, cord }) =>
        <div>
            <div className="tooltipo">
                <i className="zmdi zmdi-car text-danger zoom" style={{ fontSize: '30px' }} />
                <div className="tooltiptexto">
                    <div>
                        Name: {cord?.first_name} {cord?.last_name}
                    </div>
                    <div>
                        Plate No: {cord?.vehicle_data[0]?.car_number_plate}
                    </div>
                </div>
            </div>
        </div>


    return (
        <div className="map-wrapper">
            <RctCollapsibleCard heading="Drivers Map">
                <GoogleMap
                    bootstrapURLKeys={{ key: "AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0" }}
                    yesIWantToUseGoogleMapApiInternals={true}
                    center={center}
                    zoom={zoom} style={{ position: 'relative', width: '100%', height: 400 }}
                    options={MAP_OPTIONS}
                    hoverDistance={40 / 2}
                    // onClick={_onClick}
                    onBoundsChange={center => getUsersNewLocations(center)}
                >
                    {userLocation.map((m, index) => (
                        <AnyReactComponent
                            draggable={false}
                            lat={m.location?.coordinates[1]}
                            lng={m.location?.coordinates[0]}
                            key={index}
                            cord={m}
                        />
                    ))}
                </GoogleMap>
                <div>Waiting Drivers: {waiting}</div>
                <div>Moving Drivers: {moving}</div>
            </RctCollapsibleCard>
        </div>
    );
}
export default GoogleMapComponent


