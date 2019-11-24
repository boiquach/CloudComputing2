/*global google*/
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import React, {Component} from "react";
import PropTypes from 'prop-types';

const mapStyles={
    width:'500px',
    height:'500px'
}

let geocoder;
let directionsService;
let directionRenderer;

class MapContainer extends Component{
    componentDidMount=()=>{
        this.getInitialLocation();
        this.getLatLng();
    }

    componentDidUpdate(prevProps){
        if(prevProps.sites!==this.props.sites){
            this.getLatLng()
        }
    }
    constructor(props){
        super(props);
        //this.geocoder = new google.maps.Geocoder();
        this.state={
            container:[{latitude: 47.49855629475769, longitude: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}],
            showingInfoWindow:false,
            activeMarker:{},
            //selectedPlace:{},
            currentLocation:{},
            latlng:[],
            destination:{},
            directions:{}
        }
        this.searchDirection = this.searchDirection.bind(this)
    }

    findDirection = () =>{
        let originCoord = this.state.currentLocation
        let destinationCoord = this.state.activeMarker.position
        return new Promise(function(resolve,reject){
            directionsService.route({origin:originCoord,destination:destinationCoord,travelMode:'DRIVING'},function(results,status){
                if(status=== 'OK'){
                    console.log(results)
                    directionRenderer.setDirections(results)
                    console.log(directionRenderer.getDirections())
                    resolve(results)
                }
                else{
                    reject(new Error('Cant find route.'));
                }
            })
        })
    }

    searchDirection = () =>{
        console.log('abc')
        this.getDirection()
    }

    getDirection = (coord)=>{
        let data = []
        data.push(this.findDirection())

        Promise.all(data)
        .then((returnValues)=>{

            // directionRenderer.setDirections(returnValues)
            // console.log(directionRenderer.getDirections())
            this.setState(()=>{
                return {
                    directions:returnValues
                }
            })
            //console.log(returnValues)
            // returnValues.forEach((routes)=>{
                // let place = {lat: latlng[0],lng:latlng[1]}
                // places.push(place)
                //console.log(route)
                // routes.forEach((route)=>{
                //     console.log(route)
                //     route.legs.forEach((leg)=>{
                //         console.log(leg.steps)
                //     })
                // })
                
            // })
            // this.setState(()=>{
            //     return {
            //         latlng:places
            //     }
            // })
            
            
        })
    }

    getAddress = (geocoder) =>{
        // console.log('ghi')
        // console.log(this.props.sites)
        let locationData = []
        for(let i = 0; i < this.props.sites.length;i++){
            console.log(this.props.sites[i].info.location)
            locationData.push(this.findLatLang(this.props.sites[i].info.location,geocoder))
        }
        return locationData;
    }

    findLatLang = (address, geocoder)=>{
        //console.log('abc')
        return new Promise(function(resolve,reject){
            geocoder.geocode({'address':address}, function(results, status){
                if(status === 'OK'){
                    //console.log(results)
                    
                    resolve([results[0].geometry.location.lat(),results[0].geometry.location.lng()])
                }else{
                    reject(new Error('Cant find location ' + address));
                }
            })
        })
    }


    getLatLng = ()=>{
        //console.log('def')
        let locations = this.getAddress(geocoder)
        let places = []

        Promise.all(locations)
        .then((returnValues)=>{
            returnValues.forEach((latlng)=>{
                let place = {lat: latlng[0],lng:latlng[1]}
                places.push(place)
            })
            this.setState(()=>{
                return {
                    latlng:places
                }
            })
            
            
        })
        
    }
    


    onMarkerClick = (props,marker,e)=>{
        this.setState({
        
            //selectedPlace:props,
            activeMarker:marker,
            showingInfoWindow:true
        })
        this.searchDirection()
    }
    
    showMarkers = ()=>{
        //console.log(this.state.latlng)
        //this.getLatLng()
        return this.props.sites.map((site, index)=>{
            
            //Geocode.setApiKey("AIzaSyBUlqF7sZtQ3I43i6JG8x3mD7ZSp2AXQlI")
            return <Marker key={site.id} id={site.id} position={this.state.latlng[index]}
            onClick={this.onMarkerClick} name={site.info.name}/>
        
        })

    }

    getInitialLocation=()=>{
        if(this.props.centerAroundCurrentLocation){
            if(navigator && navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                    //console.log(position)
                    const coords = position.coords;
                    this.setState({
                        currentLocation:{
                            lat:coords.latitude,
                            lng:coords.longitude
                        }
                    })
                })
            }
        }
    }

    render(){
        geocoder = new google.maps.Geocoder()
        directionsService = new google.maps.DirectionsService()
        directionRenderer = new google.maps.DirectionsRenderer()

        return(
            
            <div className="map">
                <Map google={this.props.google} zoom={this.props.zoom} style={mapStyles} center={this.state.currentLocation}
                    
                >
                    
                    {this.showMarkers()}


                    <Marker position={this.state.currentLocation}
                            onClick={this.onMarkerClick} name="Current" id=""/>

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}    
                    >   
                        <div>    
                            <a href={`${this.state.activeMarker.id}`}>View</a>
                            <div>
                            <button name="route" onClick={()=>{alert('click')}}>Find route</button>
                            </div>
                        </div>
                    </InfoWindow>

                </Map>
            </div>
        );
    }

}


MapContainer.propTypes={
    google:PropTypes.object,
    zoom:PropTypes.number,
    initialCenter:PropTypes.object,
    centerAroundCurrentLocation:PropTypes.bool
}

MapContainer.defaultProps={
    zoom:6,
    // initialCenter:{
    //     lat:47.444,
    //     lng:-122.176
    // },
    centerAroundCurrentLocation:true
}


export default GoogleApiWrapper({
    apiKey:'AIzaSyBUlqF7sZtQ3I43i6JG8x3mD7ZSp2AXQlI'
})(MapContainer);


