import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { mapsAPI } from "../api/config";
import MapMarker from './MapMarker'


class SimpleMap extends Component {
  
    state = {
      currentCenter: {
        lat: 26.3351,
        lng: 17.2283
      },
      zoom: 0
    }

  setCenter = (lat, lng) => {
    console.log("set center reached", lat, lng)
    const newLat = Number(lat)
    const newLng = Number(lng)
    this.setState({
      currentCenter: {
        lat: newLat,
        lng: newLng
      }
    })
  }

  _onChange = ({ center }) => {
    this.setState({
        currentCenter: center
    });
  }

  render() {
    let { images, setId, photoId, center } = this.props
    let { lat, lng } =this.state.currentCenter
    
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsAPI }}
          // defaultCenter={center}
          center={{lat:lat, lng:lng}}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          // onChange={this._onChange}
          // onCenter_changed={this._onChange}
        >
        {images.length > 0 ? images.map((image, index) =>(
            <MapMarker
              lat={image.location ? image.location.latitude : null}
              lng={image.location ? image.location.longitude : null}
              id={image.id}
              text="My Marker"
              key={image.id}
              setId={setId}
              photoId={photoId}
              setCenter={this.setCenter}
            />
        )) : null}
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;