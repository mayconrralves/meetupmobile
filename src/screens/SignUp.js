import React from 'react';
import Background from '../components/Background';
import FormBegin from '../components/FormBegin';
import { View } from 'react-native';


export default function SignUp(props){
	return (
		<Background>
			<FormBegin {...props} signup />
		</Background>
		
		)
}

