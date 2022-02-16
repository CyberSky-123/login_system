import React from 'react';
import './SubmitButton.css';
import './Login.css';

export const SignInButton = ({ signInText }) => {
	return (
		<div className='submitButton'>
			<button className='signIn'>{signInText}</button>
		</div>
	);
};

export const SignUpButton = ({ signUpText }) => {
	return (
		<div className='submitButton'>
			<button className='signUp'>{signUpText}</button>
		</div>
	);
};
