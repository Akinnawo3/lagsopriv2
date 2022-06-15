/**
 * Google Map
 */
import React from "react";
import {compose, withHandlers, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {m} from "Helpers/helpers";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `400px`}} />,
    mapElement: <div style={{height: `100%`}} />,
  }),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      onZoomChanged: () => () => {
        console.log(refs.map.getZoom());
        console.log(refs.map.getCenter());
      },
      onBoundsChanged: () => () => {
        return refs.map.getCenter().toJSON();
      },
    };
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={16}
    center={props.center}
    onBoundsChanged={() => {
      const value = props.onBoundsChanged();
      props.getUsersNewLocations(value);
    }}
    ref={props.onMapMounted}
  >
    {props.userLocation.length > 0 &&
      props.userLocation.map((m, index) => {
        const riderData = `Name: ${m.first_name}  ${m.last_name}\nPhone: ${m.phone_number}`;
        const driverData =
          m?.vehicle_data &&
          m?.vehicle_data.length > 0 &&
          `Name: ${m.first_name}  ${m.last_name}\nPhone: ${m.phone_number}\nPlate No: ${m?.vehicle_data[0].car_number_plate}\nSerial No: ${m?.vehicle_data[0].car_number}`;
        return (
          <Marker
            key={index}
            position={{lat: m.coordinates ? m.coordinates[1] : m.home_coordinate?.latitude, lng: m.coordinates ? m.coordinates[0] : m.home_coordinate?.longitude}}
            title={`${m?.vehicle_data && m?.vehicle_data.length > 0 ? driverData : riderData}`}
          />
        );
      })}
  </GoogleMap>
));

const GoogleMapComponent1 = ({userLocation, getUsersLocation, waiting, moving, title, center, setCenter}) => {
  const getUsersNewLocations = (centerValue) => {
    const geoCode = m(
      {
        latitude: centerValue?.lat,
        longitude: centerValue?.lng,
      },
      {
        latitude: center?.lat,
        longitude: center?.lng,
      }
    );

    if (geoCode >= 3.5) {
      setCenter(centerValue);
      getUsersLocation(centerValue?.lng, centerValue?.lat);
    }
  };

  return (
    <div className="map-wrapper">
      <RctCollapsibleCard heading={title}>
        <MyMapComponent userLocation={userLocation} getUsersNewLocations={getUsersNewLocations} center={center} />
        <div>
          Waiting {title === "Drivers Map" ? "Driver" : "Rider"}: {waiting}
        </div>
        <div>Moving {title === "Drivers Map" ? "Driver" : "Rider"}: {moving}</div>
      </RctCollapsibleCard>
    </div>
  );
};
export default GoogleMapComponent1;
