import React from 'react';
import './SigninSignup.styles.scss';
import Signin from '../../components/signin/Signin.component';
import Signup from '../../components/signup/Signup.component';

const SigninSignupPage = () => (
	<div className='signin-signup'>
		<Signin />
		<Signup />
	</div>
);

export default SigninSignupPage;
