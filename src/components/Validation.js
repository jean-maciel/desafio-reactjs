const validation = (values) => {
    let errors = {}

    if (!values.firstName){
        errors.firstName="First name is required."
    }

    if (!values.lastName){
        errors.lastName="Last name is required."
    }

    if (!values.email){
        errors.email="Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }

    if (values.password.length < 5){
        errors.password="Password must have more than 5 characters."
    }

    return errors;
}
 
export default validation;