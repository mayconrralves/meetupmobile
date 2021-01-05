import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background';
import FormBegin from '../components/FormBegin';
import CookieManager from '@react-native-community/cookies';
import { signInRequest } from '../store/modules/auth/actions';


export  function SignIn(props){

	const [email, setEmail] = useState('');
	const [password, setPassword ] = useState('');
	const { login } = props;
	
	const save =  () => {
		console.warn(email, password)
		login(email, password);
		CookieManager.get('http://157.230.62.196')
  		.then((cookies) => {
    		console.warn('CookieManager.get =>', cookies);
  });


	}
	return (
		<Background >
			<FormBegin 
				{...props} 
				setPassword={setPassword} 
				setEmail={setEmail}
				save={save}
				email={email}
				password={password}
			/>
		</Background>
		)
}

const mapDispatchToProps = dispatch=> {
	return {
		login: (email, password) => dispatch(signInRequest(email, password)),
	}
}


export default connect(null, mapDispatchToProps)(SignIn);