import React from 'react';
import { 
	 View,
	 TextInput,
	 TouchableOpacity,
	 Text, 
	 StyleSheet
 } from 'react-native';


export default function SignIn(){

	return (
			<View style={styles.main}>
					<TextInput style={styles.input} />
					<TextInput style={styles.input} />
					<TouchableOpacity style={styles.buttonLogin}>
						<Text style={styles.textLogin}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.textSignUp}>Não tenho Conta</Text>
					</TouchableOpacity>
			</View>
		)
}

const styles = StyleSheet.create({
	main : {
		width:'100%',
		backgroundColor: '#666',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',

	},
	input : {
		height: 60,
		width: '95%',
		backgroundColor: '#FFF',
		borderColor: '#666',
		borderWidth: 1,
		marginBottom: 16
	},
	buttonLogin: {
		width:'95%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
		borderRadius: 6,
		marginBottom: 24
	},
	textLogin: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold'
	},
	textSignUp: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	}
});