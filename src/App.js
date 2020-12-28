import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { store } from './store';

export default function App(){
	return (
			<Provider store={store}>
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</Provider>
		)
}