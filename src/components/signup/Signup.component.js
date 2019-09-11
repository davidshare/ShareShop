import React, { Component } from 'react';
import './Signup.styles.scss';
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Signup extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword} = this.state;
		if(password !== confirmPassword){
			alert("Passwords don't match");
			return;
		}
		try{
			const user = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		}catch(error){
			console.error(error);
		}
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({[name]: value }); // the square braces will evaluate name and supply the value
	}

	render(){
		const { displayName, email, password, confirmPassword} = this.state;
		return (
			<div>
				<h2 className='signup'> I do not have an account </h2>
				<span>Sign up with your email and password</span>
				<form className='signup-form' onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						value={displayName}
						type="text"
						handleChange={this.handleChange}
						label="Display Name"
						required
					/>

					<FormInput
							name="email"
							value={email}
							type="email"
							handleChange={this.handleChange}
							label="Email"
							required
					/>

					<FormInput
            name="password"
            value={password}
            type="password"
            handleChange={this.handleChange}
            label="password"
            required
					/>

					<FormInput
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={this.handleChange}
            label="Confirm Password"
            required
					/>


					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		)
	}
}


export default Signup;
