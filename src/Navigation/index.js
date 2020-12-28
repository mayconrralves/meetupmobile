import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
export default function Navigation(){
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName='SignIn'>
			<Stack.Screen name='SignIn' component={SignIn}/>
			<Stack.Screen name='SignUp' component={SignUp} />
		</Stack.Navigator>
		)
}