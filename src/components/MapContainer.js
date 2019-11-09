import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from "react";

const mapStyles={
    width:'100%',
    height:'100%'
}

class MapContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            container:[{latitude: 47.49855629475769, longitude: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
        }
    }

    

    showMarkers = ()=>{
        return this.state.container.map((coord, key)=>{

            return <Marker key={key} id={key} position={{lat:coord.latitude,lng:coord.longitude}}
            onClick={()=>console.log(`you clicked: latitude ${coord.latitude} - longitude ${coord.longitude}`)}/>
        
        })

    }

    render(){
        return(

            <Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{lat:47.444,lng:-122.176}}>

                {this.showMarkers()}
            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBUlqF7sZtQ3I43i6JG8x3mD7ZSp2AXQlI'
})(MapContainer);