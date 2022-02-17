import React from 'react';
import InputField from './InputField';
import { SignInButton, SignUpButton } from './SubmitButton';
import {Facebook, LinkedIn, Twitter, Person, Mail, Https} from '@mui/icons-material/'


import './Login.css';

const LoginForm = () => {

	
	const iconStyles = {
		fontSize: '20px',
		padding: '15px',
		cursor: 'pointer'
	};
	return (
		<div className='mainContainer col-12'>
			<div className='bannerContainer col-4'>
				<div className='leftBanner'>
					<h1>Welcome Back!</h1>
					<div>
						<p className='para_content'>
							To keep connected with us, please login with your personal information
						</p> <br />

						<SignInButton signInText={'SIGN IN'} />
					</div>
				</div>
			</div>

			<div className='contentContainer col-8'>
				<div className='rightBanner'> 
					<h1>Create Account</h1> <br/>
					<div className='iconsDiv'>
						<span style={iconStyles} >
							<Facebook/>	
						</span>
						<span style={iconStyles}>
							<LinkedIn/>	
						</span>
						<span style={iconStyles}>		
							<Twitter />
						</span>
					
					</div> <br/>
				
					<p>Or use your email for registration</p> <br />
					{/* <TextField
						id="input-with-icon-adornment"
						startAdornment={
						<InputAdornment position="start">
							< AccountCircle />
						</InputAdornment>
						}
  					/> */}
					<span className='inputIcon'>
						<Person className='icon_name' />
						<InputField type='text' placeholder='Name'  />	
					</span>
					<span className='inputIcon'>
						<Mail className='icon_name' />
						<InputField type='email' placeholder='Email' />	
					</span>
						<span className='inputIcon'>
						<Https className='icon_name' />
						<InputField type='password' placeholder='Password' />	
					</span>
				
					
				 <br />
					<SignUpButton signUpText={'SIGN UP'} />
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
