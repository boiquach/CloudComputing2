import React, { Component } from 'react';
import classnames from 'classnames';

class PlaceSearch extends Component {

    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
        this.state={
            address:''
        }
    }

    componentDidMount() {
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            { "types": ["establishment"],componentRestrictions: {country: 'vn'} });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }

    handlePlaceChanged(e) {
        this.props.input.onChange(e)
        const place = this.autocomplete.getPlace();
        console.log(place)
        if(place)
        {
            this.props.input.onChange(place.formatted_address)

        }
    }
  

    render() {
        const { input, className,  meta: { touched, error } } = this.props
        return (
            <div className={classnames('form-group')}>
                <input ref={this.autocompleteInput} id="autocomplete" name="location" placeholder="Enter your address"
                   {...input} onChange={this.handlePlaceChanged} type="text" className={classnames(className)}></input>
                {touched && error && <span className="error_text">{error}</span>}
            </div>)

    }
}

PlaceSearch.defaultProps = {
    className: 'form-control',
    // required: true
}

export default PlaceSearch