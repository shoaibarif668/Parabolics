import React from 'react';
import AuthForms from '../Components/Presentational/AuthForms';

const Login = () => {
    return(
        <>
        <AuthForms
            title="Sign Up"
            text="Let's get started"
            isLogin={false}
        />
        </>
    )
}
export default Login;