import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

const latlng  = [36.93548, 30.8152]

class Contactmap extends Component {
    render() {
        return (
            <div className="section-map pb-0">
                <div className="ct-contact-map-wrapper">
                    <MapContainer
                        className="markercluster-map ct-contact-map"
                        center={latlng}
                        zoom={16}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                               attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                               maxZoom={16}
                        />
                        <Marker position={latlng} icon={customMarker}></Marker>
                    </MapContainer>
                </div>
            </div>
        );
    }
}

export default Contactmap;