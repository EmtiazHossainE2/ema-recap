import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google.svg";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmail = event => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        console.log(event.target.value);
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        console.log(event.target.value);
        setConfirmPassword(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
    }


    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper' onBlur={handleEmail}>
                            <input type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper' onBlur={handlePassword}>
                            <input type='password' name='password' id='password' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper' onBlur={handleConfirmPassword}>
                            <input
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth'>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;