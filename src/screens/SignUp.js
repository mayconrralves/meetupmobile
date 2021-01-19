import React, { useState } from 'react';
import { connect } from 'react-redux';
import Background from '../components/Background';
import FormBegin from '../components/FormBegin';
import { View } from 'react-native';
import { createUser } from '../store/modules/user/actions';

export  function SignUp(props){
		const [email, setEmail] = useState('');
		const [password, setPassword ] = useState('');
		const [name, setName] = useState('');
		const [confirmPassword, setConfirmPassword] = useState('');
		const { register, navigation } = props;
		const save = () => {
			register(name, email, password, confirmPassword);
			navigation.navigate('SignIn');
		}
	return (
		<Background>
			<FormBegin
				 {...props} 
				 signup
				 setName={setName}
				 setEmail={setEmail}
				 setPassword={setPassword}
				 setConfirmPassword={setConfirmPassword}
				 save={save}
			/>
		</Background>
		
		)
}

const mapsDispatchToProps = dispatch => {
	return {
		register: (name, email, password, confirmPassword) => 
					dispatch(createUser( name, email, password, confirmPassword)),
	}
}

export default connect(null, mapsDispatchToProps)(SignUp);

