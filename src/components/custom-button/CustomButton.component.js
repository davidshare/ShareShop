import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({ children, isGoogleSignin, ...otherButtonProps }) => (
  <button
    className={`${isGoogleSignin ? "google-signin" : ""} custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
