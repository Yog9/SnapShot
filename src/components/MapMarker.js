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

    onMarkerClick = (id) => {
     console.log("photo", id, "clicked")
     this.props.setId(id)
    }
    setHover = (id) => {
        console.log("photo", id)
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
        console.log("lat", this.props.lat)
        console.log("long", this.props.lng)
        return (
            <div onClick={() => this.onMarkerClick(this.props.id)} onMouseOver={() => this.setHover(this.props.id)} onMouseLeave={this.setHoverOff}>
                {this.state.hover ? <div style ={higlightedStyle} /> : <div style ={markerStyle} /> }
            </div>
            
        )
    }
    
}

export default MapMarker