import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background';
import FormBegin from '../components/FormBegin';
import { signInRequest } from '../store/modules/auth/actions';


export  function SignIn(props){

	const [email, setEmail] = useState('');
	const [password, setPassword ] = useState('');
	const { login } = props;
	
	const save =  () => {
		login(email, password);
	}
	return (
		<Background >
			<FormBegin 
				{...props} 
				setPassword={setPassword} 
				setEmail={setEmail}
				save={save}
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