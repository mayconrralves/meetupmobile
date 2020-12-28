import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Enrollment from '../screens/Enrollment';
export default function Navigation(){
	const signin = true;
	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();
	return signin ? (
		<Stack.Navigator initialRouteName='Dashboard'  headerMode='none'>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Enrollment" component={Enrollment} />
		</Stack.Navigator>
		):(
		<Stack.Navigator initialRouteName='SignIn' headerMode='none'>
			<Stack.Screen name='SignIn' component={SignIn}/>
			<Stack.Screen name='SignUp' component={SignUp} />
		</Stack.Navigator>
		)
}