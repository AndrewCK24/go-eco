import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const Map = (prop) =>{
    const[center,setCenter] = useState({});
    Geocode.setApiKey("AIzaSyDJ3glifWE4FiuEm5ycid-1Upl--0IHTuo");
    Geocode.setLanguage("zh-TW");
    Geocode.setRegion("tw");
    Geocode.fromAddress(prop.location).then(
    (response) => {
        setCenter(response.results[0].geometry.location);
    })
    return(
        <LoadScript googleMapsApiKey="AIzaSyDJ3glifWE4FiuEm5ycid-1Upl--0IHTuo">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
            <MarkerF  
                position={center}
            />
            </GoogleMap>
        </LoadScript>
    )   
}

export default Map;