import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { csrfUpdate } from '../store/modules/auth/actions';
import { requestMeetups } from '../store/modules/meet/actions';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Enrollment from '../screens/Enrollment';
export function Navigation({ getCsrf, csrf }){
	const signin = false;
	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();
	useEffect(()=> {
		getCsrf();
	},[]);
	return csrf ? (
		<Tab.Navigator 
			initialRouteName='Dashboard' 
			headerMode='none'
			screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				let iconName;

				switch (route.name) {
					case 'Dashboard':
						iconName = 'list';
						break;
					case 'Profile':
						iconName = 'edit';
						break;
					case 'Settings':
						iconName = 'settings';
						break;
					default:
						iconName = 'circle';
						break;
				}
			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
			tabBarOptions={{
					tabStyle: style.tab,
					showLabel: false,
				}}
		>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Enrollment" component={Enrollment} />
		</Tab.Navigator>
		):(
		<Stack.Navigator initialRouteName='SignIn' headerMode='none'>
			<Stack.Screen name='SignIn' component={SignIn}/>
			<Stack.Screen name='SignUp' component={SignUp} />
		</Stack.Navigator>
		)
}

const mapsStateToProps= state=>{
	const { auth } = state;
	return {
		csrf: auth.csrf,
	}
}
const mapsDispatchToProps = dispatch => {
	return {
		getCsrf: () => dispatch(csrfUpdate()),
	}
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Navigation);

const style = {
	tab: {
		backgroundColor: '#402845',
	}
};