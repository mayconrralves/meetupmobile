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
import { placeholderColor } from '../components/configuration';
import Title from './Title';

export default function FormBegin({ 
										navigation, 
										signup,  
										setEmail,
										setName,
										setPassword, 
										setConfirmPassword,
										save,
										error
								 }){

	const ifHasAError = () => {
	  return error ? <Text style={styles.error}>{error}</Text> : null
	}
	
	return (
		<Background >
			<View style={styles.main}>
				<Title style={styles.title}/>
				{	signup && <TextInput 
						style={styles.input} 
						placeholderTextColor={placeholderColor}
						placeholder='Nome'
						onChangeText={ name => setName(name)}
					/>
				}
					<TextInput 
						style={styles.input} 
						placeholderTextColor={placeholderColor}
						textContentType='emailAddress'  
						placeholder='Seu e-mail...'
						autoCapitalize='none'
						onChangeText={email => setEmail(email)}
					/>
					<TextInput 
						style={styles.input} 
						placeholderTextColor={placeholderColor}
						textContentType='password' 
						secureTextEntry={true} 
						placeholder='Sua senha ...'
						autoCapitalize='none' 
						onChangeText={password => setPassword(password)}
					/>
					{	signup && <TextInput 
							style={styles.input} 
							placeholderTextColor={placeholderColor} 
							textContentType='newPassword' 
							secureTextEntry={true} 
							placeholder='Repita a Senha...'
							autoCapitalize='none'
							onChangeText={ confirmPassword  => setConfirmPassword(confirmPassword)}
						/>
					}
					{/*If has a error*/}
					{ ifHasAError() }
					<TouchableOpacity 
						style={styles.button}
						onPress={ () => save() }
					>
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
						<Text style={styles.textChangeScreen} >
							{signup ? 'Já tenho conta' : 'Não tenho Conta'}
						</Text>
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
	},
	error: {
		color: '#ffe200',
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 12,
		marginHorizontal: 25,
		textAlign: 'center'
	}
});