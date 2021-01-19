import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background';
import FormBegin from '../components/FormBegin';
import { signInRequest } from '../store/modules/auth/actions';


export  function SignIn(props){

	const [email, setEmail] = useState('');
	const [password, setPassword ] = useState('');
	const { login, failure } = props;
	const save =  () => {
		login(email, password);
	}
	useEffect(() => {
	}, [failure]);
	return (
		<Background >
			<FormBegin 
				{...props} 
				setPassword={setPassword} 
				setEmail={setEmail}
				save={save}
				error={ failure }
			/>

		</Background>
		)
}
const mapStateToProps = state => {
	const { auth } = state;
	return {
		failure : auth.msgFailure,
	}
}
const mapDispatchToProps = dispatch=> {
	return {
		login: (email, password) => dispatch(signInRequest(email, password)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);