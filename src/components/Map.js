import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { mapsAPI } from "../api/config";
import MapMarker from './MapMarker'


class SimpleMap extends PureComponent {
    
  static defaultProps = {
    center: {
      lat: 26.3351,
      lng: 17.2283
    },
    zoom: 0
  };

 

  render() {
    console.log("map props", this.props)
    let { images, setId, photoId } = this.props
    console.log("setId", setId)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsAPI }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
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
            />
        )) : null}
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;