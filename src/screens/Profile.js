import React, { useState, useEffect } from 'react';
import { 
	View,
	TextInput,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background';
import Header from '../components/Header';
import { placeholderColor } from '../components/configuration';
import { signOut } from '../store/modules/auth/actions';
import { updateUser as updateAction} from '../store/modules/user/actions';
export  function  Profile({ logout, user, updateUser }) {
	const [name, setName] = useState(user ? user.name : '');
	const [email, setEmail] = useState(user ? user.email : '');
	const [password, setPassword] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const save = ()=>{
		const newUser = {};
		newUser.name = name;
		newUser.email = email;
		if(oldPassword){
			newUser.oldPassword = oldPassword;
			newUser.password = password;
			newUser.confirmPassword = confirmPassword;
		}
		updateUser(newUser);
	}
	return (
		<Background >
					<View style={styles.profile} >
						<Header />
						<View style={styles.id}>
							<TextInput 
								style={styles.inputId}
								placeholderTextColor={placeholderColor}
								placeholder='Nome'
								defaultValue={user.name}
								onChangeText={ name=> setName(name)}
							 />
							<TextInput 
								style={styles.inputId}
								placeholderTextColor={placeholderColor}
								placeholder='email'
								textContentType='emailAddress'  
								autoCapitalize='none'
								defaultValue={user.email}
								onChangeText={ email=> setEmail(email)}
							/>
						</View>
						<View style={styles.secure}>
							<TextInput 
								style={styles.inputSecure}
								textContentType='password'
								autoCapitalize='none'
								secureTextEntry={true} 
								placeholder='Sua Senha...'
								placeholderTextColor={placeholderColor}
								onChangeText={ oldPassword => setOldPassword(oldPassword)}
							/>
							<TextInput 
								style={styles.inputSecure}
								textContentType='password'
								autoCapitalize='none'
								secureTextEntry={true} 
								placeholder='Nova Senha...'
								placeholderTextColor={placeholderColor}
								onChangeText={ password => setPassword(password)}
							/>
							<TextInput
								style={styles.inputSecure}
								textContentType='password'
								autoCapitalize='none'
								placeholder='Digite novamente a nova senha'
								placeholderTextColor={placeholderColor}
								onChangeText={ confirmPassword => setConfirmPassword(confirmPassword)}
							/>
							<TouchableOpacity 
								style={styles.button}
								onPress={save}
							 >
								<Text style={styles.text} >Salvar Perfil</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={styles.button}
								onPress={logout}
							 >
								<Text style={styles.text} >Sair do Meetup</Text>
							</TouchableOpacity>
						</View>
					</View>
					
				</Background>
			)
}

const styles = StyleSheet.create({
	profile: {
		height: '100%',
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center'
		
	},
	id: {
		width: '90%',
		height: '25%',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(255,255,255, 0.3)',
		paddingTop: 12,
	
	},
	secure: {
		marginTop: 22,
		width: '90%',
		height: '55%',
	},
	inputId: {
		height: "43%",
		backgroundColor: 'rgba(0,0,0,0.2)',
		paddingLeft: 18,
		fontSize: 20,
		marginBottom: 8,
		borderRadius: 6,
		color: '#fff'


	},
	inputSecure: {
		height: "18%",
		backgroundColor: 'rgba(0,0,0,0.2)',
		paddingLeft: 18,
		fontSize: 20,
		marginBottom: 10,
		borderRadius: 6,
		color: '#fff',
	},
	button: {
		height: "18%",
		backgroundColor: '#f94d6a',
		borderRadius: 6,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20
	}
});
const mapsStateToProps = state => {
	const { user } = state;
	return {
		user: user.user,
	}
}
const mapsDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(signOut()),
		updateUser: (user) => dispatch(updateAction(user)),
	}
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Profile);