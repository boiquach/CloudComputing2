/*global google*/
import React, { Component } from 'react';
import { fetchSite, deleteSite, addVolunteerId, fetchVolunteerId, fetchVolunteerEmail } from '../actions/siteAction'
import { connect } from 'react-redux';
import { compose, withProps, withStateHandlers } from 'recompose'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import MapDirection from './MapDirection'
import SiteEditForm from './SiteEditForm'
import VolunteerForm from './VolunteerForm'

let geocoder;

class SiteInfo extends Component {

    componentDidMount() {
        this.props.fetchSite(this.props.siteId);
        this.getInitialLocation();
        if (this.props.site !== undefined) {
            this.getLatLng()
            if (this.props.site.owner === this.props.userId) {
                this.props.fetchVolunteerId(this.props.siteId)
                this.props.fetchVolunteerEmail(this.props.siteId)
            }
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.site !== this.props.site) {
            if (this.props.site !== undefined) {
                this.getLatLng()

                if (this.props.site.owner === this.props.userId) {
                    this.props.fetchVolunteerId(this.props.siteId)
                    this.props.fetchVolunteerEmail(this.props.siteId)
                }
            }

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps) || JSON.stringify(this.state) !== JSON.stringify(nextState)
    }

    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {},
            latlng: [],
            editing: false,
            joining: false
        }
        this.openEdit.bind(this)
        this.openJoin.bind(this)
        this.delete.bind(this)
        this.join.bind(this)
    }

    join = () => {
        const data = {
            site: this.props.siteId,
            volunteer: this.props.userId
        }

        this.props.addVolunteerId(data)
    }

    openJoin = () => {
        this.setState({
            joining: !this.state.joining
        })
    }

    delete = () => {
        this.props.deleteSite(this.props.siteId)
    }

    openEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    getAddress = (geocoder) => {
        console.log('abc')
        let locationData = []
        if (this.props.site.location !== undefined) {
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
                    onToggleOpen: ({ isOpen }) => () => ({
                        isOpen: !isOpen,

                    })
                }),
            withGoogleMap
        )(props =>
            <GoogleMap
                defaultZoom={5}
                defaultCenter={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
            >

                {this.state.latlng[0] !== undefined && this.state.currentLocation !== {} && <MapDirection origin={this.state.currentLocation} destination={this.state.latlng[0]} />}
            </GoogleMap>

        );
        return (

            <div>
                {!this.props.fetching ?
                    <div>
                        {!this.props.fetchingFail ?
                            <div>
                                <CleanUpMap currentLocation={this.state.currentLocation} />

                                {/*volunteers with no account*/}
                                {this.props.volunteerEmail !== undefined && <ul> {this.props.volunteerEmail.map((volunteer, index) => {
                                    console.log(volunteer)
                                    return (<li key={index}>
                                        {volunteer}
                                    </li>)
                                })}</ul>}

                                {/*volunteers with accounts*/}
                                {this.props.volunteerObject !== undefined && <ul> {this.props.volunteerObject.map(volunteer => {
                                    console.log(volunteer)
                                    return (<li key={volunteer.id}>
                                        {volunteer.data.firstname}
                                        {volunteer.data.lastname}
                                        {volunteer.data.email}
                                    </li>)
                                })}</ul>}

                                {this.props.site.owner === this.props.userId ?
                                    <div>
                                        <button onClick={this.openEdit}>Edit</button>
                                        <button onClick={this.delete}>Delete</button>
                                    </div>
                                    : <div>
                                        {this.props.userId === null && <button onClick={this.openJoin}>Join</button>}
                                        {this.props.userId !== null && <button onClick={this.join}>Join</button>}

                                    </div>}
                                {this.state.editing && <SiteEditForm site={this.props.site} siteId={this.props.siteId} />}
                                {this.state.joining && <VolunteerForm siteId={this.props.siteId} />}

                                {/*Output Repor*/}
                            </div>
                            :
                            <div>Site does not exist.</div>
                        }
                    </div>
                    : <div>
                        Loading...
                    </div>}

            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {
        site: state.site.site,
        userId: state.userId.userId,
        volunteerObject: state.volunteerObject.volunteerObject,
        volunteerEmail: state.volunteerEmail.volunteerEmail,
        fetching: state.fetching.fetching,
        fetchingFail: state.fetchingFail.fetchingFail

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSite: (siteId) => dispatch(fetchSite(siteId)),
        deleteSite: (siteId) => dispatch(deleteSite(siteId)),
        addVolunteerId: (data) => dispatch(addVolunteerId(data)),
        fetchVolunteerEmail: (siteId) => dispatch(fetchVolunteerEmail(siteId)),
        fetchVolunteerId: (siteId) => dispatch(fetchVolunteerId(siteId))

    }
}
SiteInfo.defaultProps = {

    centerAroundCurrentLocation: true
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteInfo);