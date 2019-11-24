/*global google*/
import React, { Component } from 'react';
import { fetchSite } from '../actions/siteAction'
import { connect } from 'react-redux';
import { compose, withProps, withStateHandlers } from 'recompose'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import MapDirection from './MapDirection'

let geocoder;

class SiteInfo extends Component {

    componentDidMount() {
        this.props.fetchSite(this.props.siteId);
        this.getInitialLocation();
        this.getLatLng()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.site !== this.props.site) {
            
            this.getLatLng()
            
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {},
            latlng: [],
        }
    }


    getAddress = (geocoder) => {
        console.log('abc')
        let locationData = []
        if(this.props.site.location!==undefined){
            locationData.push(this.findLatLang(this.props.site.location, geocoder))
        }

        return locationData;
    }

    findLatLang = (address, geocoder) => {
        console.log('def')
        console.log(address)
        return new Promise(function (resolve, reject) {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {
                    //console.log(results)
                    resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()])
                } else {
                    reject(new Error('Cant find location.'));
                }
            })
        })
    }


    getLatLng = () => {
        console.log('ghi')
        let locations = this.getAddress(geocoder)
        let places = []

        Promise.all(locations)
            .then((returnValues) => {
                returnValues.forEach((latlng) => {
                    let place = { lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1]) }
                    places.push(place)
                })
                this.setState(() => {
                    return {
                        latlng: places
                    }
                })

            })

    }

    getInitialLocation = () => {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    //console.log(position)
                    const coords = position.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                })
            }
        }
    }
    render() {
        geocoder = new google.maps.Geocoder()
        console.log(this.props.site)
        const CleanUpMap = compose(
            withProps({
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div style={{ height: `400px`, width: `400px` }} />,
                mapElement: <div style={{ height: `100%` }} />
            })
            ,
            withStateHandlers(() =>
                ({
                    isOpen: false
                    
                }),
                {
                    onToggleOpen: ({ isOpen}) => () => ({
                        isOpen: !isOpen,
                        
                    })
                }),
            withGoogleMap
        )(props =>
            <GoogleMap
                defaultZoom={5}
                defaultCenter={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
            >
                
                    {this.state.latlng[0] !== undefined && this.state.currentLocation!=={} && <MapDirection origin={this.state.currentLocation} destination={this.state.latlng[0]} />}
            </GoogleMap>

        );
        return (

            <div>

                <CleanUpMap currentLocation={this.state.currentLocation}  />
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        site: state.site.site

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSite: (siteId) => dispatch(fetchSite(siteId))
    }
}
SiteInfo.defaultProps={

    centerAroundCurrentLocation:true
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteInfo);