import React from 'react';

//Icons
import google from '../assents/google.svg'


const Login = () => {
    return (
        <div >
            <div >
                <h3>Welcom to ChatApp !</h3>
            </div>
            <div >
                <img src={google} alt="logo google" /> sign with to google
            </div>
        </div>
    );
};

export default Login;