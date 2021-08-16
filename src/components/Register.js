import React, { useState } from 'react';
import validation from './Validation'

const Register = ({submitForm}) => {
    const [values, setValues] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }
    )

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValues(
            {
                ...values,
                [event.target.name]: event.target.value, 
            }
        )
    }

    const handleFormSubmit = (event) => {
        setErrors(validation(values));
    }
    return (
        <div className="register-box">
            <div className="trial">
                <p><b>Try it free days</b> then $20/mo. thereafter</p>
            </div>
            <div className="register-form">
                <form action="" className="form-wrapper">
                    <div className="name-box">
                        <input 
                            type="text"
                            placeholder="Name"
                            id="name"
                            className="inputs-box"
                            name="firstName"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                        <span class="focus-border">
                            <i></i>
                        </span>
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>
                    <div className="last-name-box">
                        <input 
                            type="text"
                            placeholder="Last Name"
                            id="last-name"
                            className="inputs-box"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                    />
                    <span class="focus-border">
                        <i></i>
                    </span>
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                    <div className="email-box">
                        <input 
                            type="email"
                            placeholder="Email Address"
                            id="email"
                            className="inputs-box"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                    />
                    <span class="focus-border">
                        <i></i>
                    </span>
                    {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password-box">
                        <input 
                            type="password"
                            placeholder="Password"
                            id="password"
                            className="inputs-box"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                    />
                    <span class="focus-border">
                        <i></i>
                    </span>
                    {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                </form>
                <button className="claim-button" onClick={handleFormSubmit} >CLAIM YOUR FREE TRIAL</button>
                <p className="terms-of-use">By clicking the button you are agreeing to our <span className="terms-color">Terms and Services</span></p>
            </div>
        </div>
    );
}
 
export default Register;