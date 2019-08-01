import React from 'react';

let LeafletMap;
let TileLayer;
let Marker;
let Popup;

class MapComponent extends React.Component {
  componentDidMount() {
    LeafletMap = require('react-leaflet').Map;
    TileLayer = require('react-leaflet').TileLayer;
    Marker = require('react-leaflet').Marker;
    Popup = require('react-leaflet').Popup;
    this.forceUpdate();
  }

  render() {
    if (LeafletMap && TileLayer && Marker && Popup) {
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
    } return null;
  }
}

export default MapComponent;
