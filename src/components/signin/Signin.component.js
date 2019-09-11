import React, { Component } from 'react';
import './Signin.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({email: '', password: ''})
	}

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({[name]: value }); // the square braces will evaluate name and supply the value
	}

	render(){
		return (
      <div className="signin">
        <h2 className="title">I aready have an account</h2>
        <span>Signin with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            label="password"
            required
					/>
					<div className='buttons'>
						<CustomButton type="submit">Signin</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignin>
						Google Signin
						</CustomButton>
					</div>
        </form>
      </div>
    );
	}
}


export default Signin;
