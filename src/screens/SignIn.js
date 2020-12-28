import React from 'react';
import { View } from 'react-native';

import Background from '../components/Background';
import FormBegin from '../components/FormBegin';


export default function SignIn(props){

	return (
		<Background >
			<FormBegin {...props}/>
		</Background>
		)
}
