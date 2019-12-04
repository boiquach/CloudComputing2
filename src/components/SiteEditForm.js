import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import { uploadImage, editSite } from "../actions/siteAction"
import 'react-datepicker/dist/react-datepicker.css'

const minDate = new Date()

class SiteEditForm extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
        this.state = {
            name: "",
            description: "",
            datetime: null,
            location: '',
            image: '',
            kit: '',
            container: '',
            errors: [{
                name: 'no file',
                state: false,
                warn: 'No image is selected!'
            },
            {
                name: 'wrong type',
                state: false,
                warn: 'Please provide a valid image! Accepted types are jpeg, jpg and png.'
            }

            ],
            file: null,

        }
    }

    submit = () => {
        const site = {
            name: this.state.name,
            description: this.state.description,
            datetime: this.state.datetime,
            location: this.state.location,
            image: this.state.image,
            kit: this.state.kit,
            container: this.state.container,
            owner: sessionStorage.getItem('user')
        }
        console.log(site)
        console.log(this.props.siteId)
        this.props.editSite(this.props.siteId, site)
    }

    handleChange = (e) => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeDate = date => {
        this.setState({
            datetime: date
        })
    }

    componentDidMount() {
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            { "types": ["establishment"], componentRestrictions: { country: 'vn' } });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);

        Object.keys(this.props.site).forEach((key, index) => {

            if (this.props.site[key] !== undefined) {
                // console.log(key)
                if (key === 'datetime') {
                    console.log(this.props.site)
                    console.log(this.props.site[key].seconds)
                    console.log(new Date(this.props.site[key].seconds * 1000))
                    this.setState({
                        [key]: new Date(this.props.site[key].seconds * 1000)
                    })
                }
                else {

                    this.setState({
                        [key]: this.props.site[key]
                    })
                }
            }
        })
    }

    handlePlaceChanged = () => {

        const place = this.autocomplete.getPlace();
        console.log(place)
        if (place !== undefined) {
            this.setState({
                location: place.formatted_address
            })
            //this.props.input.onChange(place.formatted_address)
        }
    }


    onFormSubmit = e => {
        e.preventDefault()

        if (this.state.file === null) {
            let { errors } = this.state
            for (let i = 0; i < errors.length; i++) {
                if (errors[i].name === 'no file') {
                    errors[i].state = !this.state.errors[i].state
                    console.log(errors[i])
                    this.setState({
                        errors: errors
                    })
                }
            }
            return;
        }

        // if (this.state.file.size > 1048576) {
        //     alert("Image size must be less than 1MB!")
        //     return
        // }

        // if (this.state.file.width > 2048 || this.state.file.height > 2048) {
        //     alert("Image dimensions must not be larger than 2048 x 2048 px")
        //     return
        // }

        if (this.state.file.type === "image/jpeg" || this.state.file.type === "image/jpg" || this.state.file.type === "image/png") {
            this.props.uploadImage(this.state.file)
            let { errors } = this.state
            for (let i = 0; i < errors.length; i++) {
                errors[i].state = false
            }
            this.setState({
                errors: errors
            })
        }
        else {
            let { errors } = this.state
            for (let i = 0; i < errors.length; i++) {
                if (errors[i].name === 'wrong type') {
                    errors[i].state = !this.state.errors[i].state
                    console.log(errors[i])
                    this.setState({
                        errors: errors
                    })
                }
            }
            return;
        }
    }

    fileChange = e => {
        e.preventDefault()
        this.setState({
            file: e.target.files[0]
        })

        let imageFile = e.target.files[0]
        if (imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile)
            const imageObject = new window.Image()
            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth
                imageFile.height = imageObject.naturalHeight
                URL.revokeObjectURL(imageFile)
            }
            imageObject.src = localImageUrl
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.image !== this.props.image && this.props.image !== '') {
            this.setState({
                image: this.props.image
            })

        }
        if (prevProps.site !== this.props.site) {
            Object.keys(this.props.site).forEach((key, index) => {

                if (this.props.site[key] !== undefined) {
                    // console.log(key)
                    if (key === 'datetime') {
                        // console.log(this.props.site[key].seconds)
                        // console.log(new Date(this.props.site[key].seconds*1000))
                        this.setState({
                            [key]: new Date(this.props.site[key].seconds * 1000)
                        })
                    }
                    else {

                        this.setState({
                            [key]: this.props.site[key]
                        })
                    }
                }
            })
        }

    }

    render() {
        // if (this.props.site.datetime !== undefined) {
        //     console.log(this.props.site.datetime.seconds)
        // }

        const { image } = this.state

        const bags = ["0", "10", "20"]
        const container = ["Yes", "No"]

        return (
            <div className="align">
                <div className="site_form edit">
                <h4>Edit Site's information</h4>
                <div>
                    {image === '' ?
                        <div>
                            <img src="https://react.semantic-ui.com/images/wireframe/image.png" alt="none" style={{ width: 320, height: 180 }} />

                        </div> :
                        <div>
                            <img src={image} style={{ width: 320, height: 180 }} alt="site" />
                        </div>}
                    <br />
                    {this.state.errors.map(error => {
                        return (
                            <div key={error.name}>
                                {error.state && <span>{error.warn}</span>}
                            </div>
                        )
                    })}
                    <div>
                        <button className="next" type="button" onClick={() => this.inputRef.current.click()}>Pick image</button>
                        <button className="next" type="button" onClick={this.onFormSubmit}>Upload</button>
                        <input type="file" ref={this.inputRef} onChange={e => this.fileChange(e)} hidden />

                    </div>

                </div>
                <form>

                    <div className="form-group">
                        <label>Site's Name</label>
                        <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" name="description" type="text" value={this.state.description} onChange={this.handleChange.bind(this)} />
                    </div>



                </form>

                <div className="form-group">
                    <input className="form-control" ref={this.autocompleteInput} id="autocomplete" name="location" placeholder="Enter your address"
                        onChange={this.handleChange.bind(this)} type="text" value={this.state.location} ></input>
                </div>

                <DatePicker
                    showTimeSelect
                    inline
                    name="datetime"
                    timeCaption="Time"
                    timeFormat="HH:mm"
                    dateFormat="yyyy-MM-dd@HH:mm:ss"
                    timeInvervals={30}
                    minDate={minDate}
                    onChange={this.handleChangeDate.bind(this)}
                    required
                    placeholderText="Choose date and time for the clean up"
                    selected={this.state.datetime !== null ? this.state.datetime : minDate}
                />


                <div>
                    Clean Up bags <br />
                    {bags.map((amount) => {
                        return (
                            <div className="form-group form-check">
                                <label className="form-check-label"><input className="form-check-input" onChange={this.handleChange.bind(this)} name="kit" type="radio" value={amount} checked={this.state.kit === amount} />{amount}</label>
                            </div>
                        )
                    })}

                </div>

                <div>
                    Sharp container <br />
                    {container.map((choice) => {
                        return (
                            <div className="form-group form-check">
                                <label className="form-check-label"><input className="form-check-input" onChange={this.handleChange.bind(this)} name="container" type="radio" value={choice} checked={this.state.container === choice} />{choice}</label>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <button className="next fill" onClick={this.submit.bind(this)}>Update</button>
                    <button className="next" onClick={this.props.closeEdit}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        error: state.image_error.image_error,
        percent: state.image_percent.image_percent,
        showProgress: state.image_showProgress.image_showProgress,
        image: state.image.image
    }
};

const mapDispatchToProps = dispatch => {
    return {
        uploadImage: (file) => dispatch(uploadImage(file)),
        editSite: (id, site) => dispatch(editSite(id, site))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SiteEditForm)