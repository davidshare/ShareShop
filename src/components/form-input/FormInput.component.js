import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({handleChange, label, ...formInputProps}) => (
	<div className='group'>
		<input className='form-input' onChange={handleChange} {...formInputProps}/>
		{ label ? (
			<label className={`${formInputProps.value.length ? 'shrink' : ''} form-input-label`}>
				{label}
			</label>
		) : null }
	</div>
);

export default FormInput;
