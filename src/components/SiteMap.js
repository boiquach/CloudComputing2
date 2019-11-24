/*global google*/
import {compose,withProps,withHandlers,withStateHandlers} from 'recompose'
import {withGoogleMap,GoogleMap,Marker,InfoWindow} from 'react-google-maps'
import {MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer"
import React, {Component} from "react";
import PropTypes from 'prop-types';


let geocoder;

class SiteMap extends Component{

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
        this.state={
            currentLocation:{},
            latlng:[],
        }
    }


    getAddress = (geocoder) =>{
        console.log('abc')
        let locationData = []
        for(let i = 0; i < this.props.sites.length;i++){
            //console.log(this.props.sites[i].info.location)
            locationData.push(this.findLatLang(this.props.sites[i].info.location,geocoder))
        }
        return locationData;
    }

    findLatLang = (address, geocoder)=>{
        console.log('def')
        // console.log(address)
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
        console.log('ghi')
        let locations = this.getAddress(geocoder)
        let places = []

        Promise.all(locations)
        .then((returnValues)=>{
            returnValues.forEach((latlng)=>{
                let place = {lat: parseFloat(latlng[0]),lng:parseFloat(latlng[1])}
                places.push(place)
            })
            this.setState(()=>{
                return {
                    latlng:places
                }
            })
            // console.log(places)
            // console.log(this.state.latlng[0])
            
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
        //console.log(this.state.latlng)
        console.log(this.state.latlng)
        const CleanUpMap = compose(
            withProps({
                loadingElement: <div style = {{height:`100%`}} />,
                containerElement: <div style={{height:`400px`,width:`400px`}} />,
                mapElement: <div style={{height:`100%`}} />
            }),
            withHandlers({
                  onMarkerClustererClick:()=>(markerClusterer)=>{
                      const clickedMarkers = markerClusterer.getMarkers()
                  }
                
              })
              ,
            withStateHandlers(()=>
            ({
                isOpen:false,
                infoIndex:null,
                shown:false,
                destination:null
                }),
            {
                onToggleOpen: ({isOpen,shown})=>()=>({
                    isOpen:!isOpen,
                    shown:!shown,
                    destination:null
                }),
                showInfo: ({isOpen,infoIndex,shown,destination})=> (index,destinationCoord) =>({
                    isOpen: infoIndex!== index || !isOpen,
                    infoIndex:index,
                    shown:destinationCoord!==destination||!shown,
                    destination:destinationCoord
                    
                })
            }),
            withGoogleMap
        )(props=>
            <GoogleMap
                defaultZoom ={5}
                defaultCenter={{lat:this.state.currentLocation.lat,lng:this.state.currentLocation.lng}}
            >
                <MarkerClusterer
                    onClick = {props.onMarkerClustererClick}
                    averageCenter
                    enableRetinaIcons
                    gridSize={60}
                >
                    {this.state.latlng!==[] && this.props.sites.map((site,index)=>{
                        //console.log(index)
                        //console.log(this.state.latlng[index])
                        const coord = this.state.latlng[index]
                        console.log(coord)

                        if(coord!==undefined){
                        return(
                        
                        <Marker key={site.id} position = {coord} onClick={()=>props.showInfo(index,coord)}>
                            {props.isOpen && props.infoIndex ===index && <InfoWindow onCloseClick={props.hideInfo}>
                                
                                <div>{site.info.name}
                                <a href={`site/${site.id}`}>View</a>
                                </div>
                                </InfoWindow>}


                        </Marker>
                    )}
                    else{
                        return null
                    }
                }
                    
                    )}
        
        
                </MarkerClusterer>
            </GoogleMap>
            
        );
        return(
            
            <div className="map">
                <CleanUpMap currentLocation={this.state.currentLocation}  />
            </div>
        );
    }



}
SiteMap.propTypes={
    initialCenter:PropTypes.object,
    centerAroundCurrentLocation:PropTypes.bool
}

SiteMap.defaultProps={

    centerAroundCurrentLocation:true
}

export default SiteMap