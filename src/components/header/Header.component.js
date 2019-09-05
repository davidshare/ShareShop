import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/crown.svg';
import './Header.styles.scss';

const Header = () => (
	<div className='header'>
		<Link to='/'>
			<img className='logo-container' src={Logo}/>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>Shop</Link>
			<Link className='option' to='/contact'>Contact</Link>
		</div>
	</div>
);

export default Header;
