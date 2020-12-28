import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


export default function Background({ children }){
	return (
		<LinearGradient colors={['#22202c' , '#402845']} >
			{ children }
		</LinearGradient>
		)
}