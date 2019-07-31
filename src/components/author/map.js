import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
}
  from 'react-leaflet';

class Map extends React.Component {
  render() {
    const result = (
      <LeafletMap
        center={[10, 5]}
        zoom={6}
        maxZoom={18}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[10, 5]}>
          <Popup>
            Very intresting info
          </Popup>
        </Marker>
      </LeafletMap>
    );
    return result;
  }
}

export default Map;
