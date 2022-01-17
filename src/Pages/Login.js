import React from 'react';
import AuthForms from '../Components/Presentational/AuthForms';

const Login = () => {
    return(
        <>
        <AuthForms
            title="Sign In"
            text="Enter your account details below"
            isLogin={true}
        />
        </>
    )
}
export default Login;