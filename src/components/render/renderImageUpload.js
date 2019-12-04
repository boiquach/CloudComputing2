import React, { Component } from "react"
import { uploadImage } from "../../actions/siteAction"
import { connect } from "react-redux"
import classnames from 'classnames';

class ImageUpload extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            errors: [{
                    name:'no file',
                    state:false,
                    warn:'No image is selected!'
                },
                {   name:'wrong type',
                    state:false,
                    warn:'Please provide a valid image! Accepted types are jpeg, jpg and png.'
                }

            ],
            file: null,
            
        }
    }



    onFormSubmit = e => {
        e.preventDefault()

        if (this.state.file === null) {
            let {errors} = this.state
            for(let i = 0;i< errors.length;i++){
                if(errors[i].name==='no file'){
                    errors[i].state=!this.state.errors[i].state
                    console.log(errors[i])
                    this.setState({
                        errors:errors
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
            let {errors} = this.state
            for(let i = 0;i< errors.length;i++){
                errors[i].state=false
            }
            this.setState({
                errors:errors
            })
        }
        else {
            let {errors} = this.state
            for(let i = 0;i< errors.length;i++){
                if(errors[i].name==='wrong type'){
                    errors[i].state=!this.state.errors[i].state
                    console.log(errors[i])
                    this.setState({
                        errors:errors
                    })
                }
            }
            return;
        }
    }

    fileChange = e =>{
        e.preventDefault()
        this.setState({
            file:e.target.files[0]
        })

        let imageFile = e.target.files[0]
        if(imageFile){
            const localImageUrl = URL.createObjectURL(imageFile)
            const imageObject = new window.Image()
            imageObject.onload=()=>{
                imageFile.width = imageObject.naturalWidth
                imageFile.height = imageObject.naturalHeight
                URL.revokeObjectURL(imageFile)
            }
            imageObject.src = localImageUrl
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.image!==this.props.image && this.props.image!==''){
            this.props.input.onChange(this.props.image)
        }
    }

    render(){
        const {image,input, className, meta: { touched, error }} = this.props
        return(
            <div className={classnames('form-group')}>
                {image==='' ?
                <div>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" alt="none" style={{width:320,height:180}} />

                </div> :
                <div>
                    <img src={image} style={{width:320,height:180}} alt="site" className={classnames(className)} />
                </div>}
                <br/>
                {this.state.errors.map(error=>{
                    return(
                        <div key={error.name}>
                            {error.state && <span>{error.warn}</span>}
                        </div>
                    )
                })}
                {this.props.showProgress && <div>Uploading in progress...</div>}
                {touched && error && <span className="error_text">{error}</span>}
                <div>
                    <button type="button" className="next" onClick={()=>this.inputRef.current.click()}>Pick image</button>
                    <button type="button" className="next" onClick={this.onFormSubmit}>Upload</button>
                    <input type="file" ref={this.inputRef} onChange={e =>this.fileChange(e)} hidden />
                    
                </div>
                
                
                
            </div>
            



        )
    }



}


const mapStateToProps= state =>{
    return{
        error: state.image_error.image_error,
        percent: state.image_percent.image_percent,
        showProgress: state.image_showProgress.image_showProgress,
        image:state.image.image
}
  };

const mapDispatchToProps = dispatch => {
    return{
        uploadImage: (file) => dispatch(uploadImage(file))
    }
}

ImageUpload.defaultProps = {
    className: 'form-control',
    // required: true
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageUpload)