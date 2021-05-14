import React, {PureComponent} from 'react';

const markerStyle = { 
    backgroundImage: 'url(https://res.cloudinary.com/demxwwdp6/image/upload/v1620815303/map-marker.svg)',
    width: '25px',
    height: '34px',
}

const higlightedStyle = { 
    backgroundImage: 'url(https://res.cloudinary.com/demxwwdp6/image/upload/v1620816042/map-marker-orange.svg)',
    width: '25px',
    height: '34px',
}

class MapMarker extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
          hover: false,
          clicked: false
        }
      }

    componentDidMount = () => {
        const { lat, lng } = this.props
        this.setState({
            lat: lat,
            lng: lng
        })
    }

    componentDidUpdate = () => {
        const { id, photoId, lat, lng, setCenter } = this.props
        if( id == photoId ){
            setCenter(lat, lng)
        }
    }

    onMarkerClick = (id) => {
     this.props.setId(id)
    }

    setHover = (id) => {
        this.props.setId(id)
        this.setState({
            hover:true
        })
    }

    setHoverOff = () => {
        this.setState({
            hover:false
        })
    }

    
    
    render() {
        const { id, photoId } = this.props
        return (
            <div onClick={() => this.onMarkerClick(id)} onMouseOver={() => this.setHover(id)} onMouseLeave={this.setHoverOff}>
                {this.state.hover || photoId == id ? <div style ={higlightedStyle} /> : <div style ={markerStyle} /> }
            </div>
            
        )
    }
    
}

export default MapMarker