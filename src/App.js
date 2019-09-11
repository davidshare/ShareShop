import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.scss";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/Header.component";
import SigninSignupPage from "./pages/signin-signup/SigninSignup.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component{

	state = {
		currentUser: null
	}
	onsubscribeFromAuth = null;

	componentDidMount(){
		this.onsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				});
			}else{
				this.setState({
					currentUser: null
				})
			}

		})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render (){
		return (
			<div className="App">
			<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/shop" component={ShopPage} />
					<Route path='/signin' component={SigninSignupPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
