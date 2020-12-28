import React from 'react';

import { 
	 View,
	 TextInput,
	 TouchableOpacity,
	 Text, 
	 StyleSheet,
	 Button
 } from 'react-native';

import Background from '../components/Background';
import Title from './Title';

export default function FormBegin({ navigation, signup }){
	const placeholderColor = 'rgba(255,255,255, 0.4)';
	return (
		<Background >
			<View style={styles.main}>
				<Title style={styles.title}/>
				{	signup && <TextInput 
						style={styles.input} 
						placeholderTextColor={placeholderColor}
						placeholder='Nome'
						autoCapitalize='none' 
					/>
				}
					<TextInput 
						style={styles.input} 
						placeholderTextColor={placeholderColor}
						textContentType='email'  
						placeholder='Seu e-mail...'
						autoCapitalize='none' 
					/>
					<TextInput 
						style={styles.input} 
						placeholderTextColor={placeholderColor}
						textContentType='password' 
						secureTextEntry={true} 
						placeholder='Sua senha ...'
						autoCapitalize='none' 
					/>
					{	signup && <TextInput 
							style={styles.input} 
							placeholderTextColor={placeholderColor} 
							textContentType='newPassword' 
							secureTextEntry={true} 
							placeholder='Repita a Senha'
							autoCapitalize='none' 
						/>
					}
					<TouchableOpacity style={styles.button} >
						<Text style={styles.text}>
							{ signup ? 'Cadastrar' : 'Entrar'}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						onPress={()=>signup ? 
							navigation.navigate('SignIn') : 
							navigation.navigate('SignUp')
						}
					>
						<Text style={styles.textChangeScreen} >Não tenho Conta</Text>
					</TouchableOpacity>
			</View>
		</Background>
		)
}

const styles = StyleSheet.create({

	main : {
		width:'100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',

	},
	title: {
		marginBottom: 40,
		fontSize: 54,
	},
	input: {
		height: 63,
		width: '90%',
		backgroundColor: 'rgba(0,0,0,0.2)',
		marginBottom: 16,
		borderRadius: 6,
		fontSize: 20,
		paddingLeft: 14,
		color: '#FFF',

		fontWeight: 'bold' 
	},
	button: {
		width:'90%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f94d6a',
		borderRadius: 6,
		marginBottom: 30,
		marginTop: 3

	},
	text: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	},
	textChangeScreen: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	}
});