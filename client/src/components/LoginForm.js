import React from 'react';
import InputField from './InputField';
import { SignInButton, SignUpButton } from './SubmitButton';
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaUserAlt} from "react-icons/fa";
import './Login.css';

const LoginForm = () => {
	const iconStyles = {
		fontSize: '20px',
		padding: '15px',
	};
	return (
		<div className='mainContainer col-12'>
			<div className='bannerContainer col-4'>
				<div className='leftBanner'>
					<h1>Welcome Back</h1>
					<div>
						<p className='para_content'>
							To keep connected with us, please login with your personal information
						</p>

						<SignInButton signInText={'SIGN IN'} />
					</div>
				</div>
			</div>

			<div className='contentContainer col-8'>
				<div className='rightBanner'> 
					<h1>Create Account</h1> <br/>
					<div className='iconsDiv'>
						<span style={iconStyles} >
							<FaFacebookSquare />
						</span>
						<span style={iconStyles}>
							<FaLinkedin />
						</span>
						<span style={iconStyles}>		
							<FaTwitter />
						</span>
					
					</div> <br/>
					<p>Or use your email for registration</p> <br />
         
					<InputField type='text' placeholder='Name' /> 
					<InputField type='email' placeholder='Email' />
					<InputField type='password' placeholder='Password' /> <br />
					<SignUpButton signUpText={'SIGN UP'} />
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
