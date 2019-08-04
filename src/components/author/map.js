import React from 'react';
import PropTypes from 'prop-types';
import id from 'react-id-generator';

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
      const { markerTimeline } = this.props;
      const Places = markerTimeline.filter(
        place => place.width && place.length,
      );
      const Markers = Places.map(places => (
        <Marker key={id()} position={[places.width, places.length]}>
          <Popup>{places.text}</Popup>
        </Marker>
      ));
      const result = (
        <LeafletMap
          center={[Places[0].width, Places[0].length]}
          zoom={12}
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
          {Markers}
        </LeafletMap>
      );
      return result;
    } return null;
  }
}

MapComponent.propTypes = {
  markerTimeline: PropTypes.array,
};

MapComponent.defaultProps = {
  markerTimeline: [],
};

export default MapComponent;
