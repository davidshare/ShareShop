import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({children, ...otherButtonProps}) => (
	<button className='custom-button' {...otherButtonProps}>
	{children}
	</button>
);

export default CustomButton;
