/*global google*/
import React, { Component } from 'react';
import { fetchSite, deleteSite, addVolunteerId, fetchVolunteerId, fetchVolunteerEmail } from '../actions/siteAction'
import { connect } from 'react-redux';
import { compose, withProps, withStateHandlers } from 'recompose'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import MapDirection from './MapDirection'
import SiteEditForm from './SiteEditForm'
import VolunteerForm from './VolunteerForm'
import Modal from 'react-bootstrap/Modal'

let geocoder;

class SiteInfo extends Component {

    componentDidMount() {
        this.props.fetchSite(this.props.siteId);
        this.getInitialLocation();
        if (this.props.site !== undefined) {
            this.getLatLng()
            
                this.props.fetchVolunteerId(this.props.siteId)
                this.props.fetchVolunteerEmail(this.props.siteId)
            
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.site !== this.props.site) {
            if (this.props.site !== undefined) {
                this.getLatLng()

                
                this.props.fetchVolunteerId(this.props.siteId)
                this.props.fetchVolunteerEmail(this.props.siteId)
                
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
            joining: false,
            showMap: false,
            showVolunteers: false,
            showDelete: false,
            showJoin:false
        }
        this.openEdit.bind(this)
        this.openJoin.bind(this)
        this.delete.bind(this)
        this.join.bind(this)
        this.openMap.bind(this)
        this.openVolunteersList.bind(this)
        this.confirmDelete.bind(this)
        this.confirmJoin.bind(this)
    }

    confirmJoin = ()=>{
        this.setState({
            showJoin:!this.state.showJoin
        })
    }

    confirmDelete = () => {
        this.setState({
            showDelete: !this.state.showDelete
        })
    }

    openMap = () => {
        this.setState({
            showMap: !this.state.showMap
        })
    }

    openVolunteersList = () => {
        this.setState({
            showVolunteers: !this.state.showVolunteers
        })
    }

    join = () => {
        const data = {
            site: this.props.siteId,
            volunteer: this.props.userId
        }

        this.props.addVolunteerId(data)
        this.confirmJoin()
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
                containerElement: <div style={{ width: '600px', height: '400px', display: `inline-block` }} />,
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
        console.log(this.props.userId)
        console.log(this.props.volunteerObject)
        // console.log(this.props.volunteerEmail)
        console.log(this.props.volunteerObject.filter(object=>(object.id===this.props.userId)))
        return (

            <div>
                {!this.props.fetching ?
                    <div>
                        {!this.props.fetchingFail ?
                            <div>

                                {!this.state.editing ?
                                <div className="bg">



                                    <div className="surround">
                                        <div >
                                            <h5 className="align info_title">{this.props.site.name}</h5></div>
                                        <div className="info_background">
                                            <div className="float_center">

                                                {this.props.site.image === '' ? <div>no image</div> :

                                                    <img src={this.props.site.image} className="site_image" alt="site" />}
                                                <div className="invite info_text">
                                                    <h5>Location:</h5> {`\n${this.props.site.location}`}
                                                    <h5>Date: </h5> {`\n${new Date(this.props.site.datetime.seconds * 1000)}`}

                                                    {this.props.site.owner === this.props.userId ?
                                                        <div>
                                                            <button className="edit_button" onClick={this.openEdit}></button>
                                                            <button className="delete_button" onClick={this.confirmDelete}></button>
                                                            <button className="volunteer_button" onClick={this.openVolunteersList}></button>
                                                            {/* <button className="info_button" onClick={this.openMap}>View Map</button> */}
                                                        </div>
                                                        : <div>
                                                            {this.props.userId === null && <div> <button className="info_button" onClick={this.openJoin}>Join</button>
                                                                <button className="info_button" onClick={this.openMap}>View Map</button>
                                                            </div>}
                                                            {this.props.userId !== null ? 
                                                            <div>
                                                                
                                                                {this.props.volunteerObject.filter(object=>(object.id===this.props.userId)).length===0
                                                                    
                                                                    && <button className="info_button" onClick={this.confirmJoin}>Join</button>}
                                                                <button className="info_button" onClick={this.openMap}>View Map</button>
                                                            </div>
                                                            
                                                            :
                                                            
                                                            <div></div>}

                                                        </div>}

                                                </div>
                                            </div>



                                        </div>

                                    </div>

                                    <Modal show={this.state.joining} onHide={this.openJoin}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Volunteer</Modal.Title>
                                            <Modal.Body><VolunteerForm list={this.props.volunteerEmail} openJoin={this.openJoin} siteId={this.props.siteId} /></Modal.Body>
                                            {/* <Modal.Footer>
                                                <button className="info_button" onClick={this.openJoin}>Close</button>
                                            </Modal.Footer> */}
                                        </Modal.Header>
                                    </Modal>

                                    <Modal size="lg" show={this.state.showMap} onHide={this.openMap}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Direction</Modal.Title>
                                            <Modal.Body><CleanUpMap currentLocation={this.state.currentLocation} /></Modal.Body>
                                            {/* <Modal.Footer>
                                                <button className="info_button" onClick={this.openJoin}>Close</button>
                                            </Modal.Footer> */}
                                        </Modal.Header>
                                    </Modal>

                                    <Modal size="lg" show={this.state.showVolunteers} onHide={this.openVolunteersList}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Volunteers</Modal.Title>
                                            <Modal.Body>
                                                {/*volunteers with no account*/}
                                                {this.props.volunteerEmail !== undefined && <ul> {this.props.volunteerEmail.map((volunteer, index) => {
                                                    // console.log(volunteer)
                                                    return (<li key={index}>
                                                        {volunteer}
                                                    </li>)
                                                })}</ul>}

                                                {/*volunteers with accounts*/}
                                                {this.props.volunteerObject !== undefined && <ul> {this.props.volunteerObject.map(volunteer => {
                                                    // console.log(volunteer)
                                                    return (<li key={volunteer.id}>
                                                        {volunteer.data.firstname}
                                                        {volunteer.data.lastname}
                                                        {volunteer.data.email}
                                                    </li>)
                                                })}</ul>}
                                            </Modal.Body>

                                        </Modal.Header>
                                    </Modal>

                                    <Modal size="lg" show={this.state.showDelete} onHide={this.confirmDelete}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Confirmation</Modal.Title>
                                            <Modal.Body>
                                                Are you sure you want to delete this site?
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button className="next fill" onClick={this.delete}>Yes</button>
                                                <button className="next" onClick={this.confirmDelete}>No</button>
                                            </Modal.Footer>
                                        </Modal.Header>
                                    </Modal>

                                    <Modal size="lg" show={this.state.showJoin} onHide={this.confirmJoin}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Confirmation</Modal.Title>
                                            <Modal.Body>
                                                Are you sure you want to join this site?
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button className="next fill" onClick={this.join}>Yes</button>
                                                <button className="next" onClick={this.confirmJoin}>No</button>
                                            </Modal.Footer>
                                        </Modal.Header>
                                    </Modal>


                                </div> :
                                    <SiteEditForm closeEdit = {this.openEdit} site={this.props.site} siteId={this.props.siteId} />
                                }



                                {/*Output Report*/}
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