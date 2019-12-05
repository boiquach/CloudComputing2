const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.image) {
      errors.image = 'Required'
    }
    else if(values.image===''){
      errors.image = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if(!values.datetime){
      errors.datetime='Required'
    }
    if(!values.location){
      errors.location = 'Required'
    }
    if (!values.kit) {
      errors.kit = 'Required'
    }
    if (!values.container) {
      errors.container = 'Required'
    }
    if (!values.favoriteColor) {
      errors.favoriteColor = 'Required'
    }
    return errors
  }
  
  export default validate