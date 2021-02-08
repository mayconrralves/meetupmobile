import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Background from '../components/Background';
import FormBegin from '../components/FormBegin';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { createUser, endRequest } from '../store/modules/user/actions';

export  function SignUp(props){
		const { register, navigation, failure, success, clearRequest } = props;
		const [modalVisible, setModalVisible] = useState(false);
		const [email, setEmail] = useState('');
		const [password, setPassword ] = useState('');
		const [name, setName] = useState('');
		const [confirmPassword, setConfirmPassword] = useState('');
		const login = () => {
			setModalVisible(false);
			clearRequest();
			navigation.navigate('SignIn');
		}
		const save = () => {
			register(name, email, password, confirmPassword);
		}
		useEffect(()=> {
			if(success){
				setModalVisible(true);
			}
		},[success]);
	return (
		<Background>
			{
				<Modal
							        animationType="slide"
							        transparent={true}
							        visible={modalVisible}
							        style={styles.modal}
							      >
							      <View style={styles.modalCenter}>
							      		 <View style={styles.modalView}>
								      			<Text style={styles.textModal}>Usuário criado com Sucesso!</Text>
					    					<TouchableOpacity style={styles.buttonModal}
					    							onPress={login}
					    					>
					    						<Text style={styles.textButtonModal}> Entre </Text>
					    					</TouchableOpacity>
								      </View>
							      </View>
							     
						</Modal>
				}
			<FormBegin
				 {...props} 
				 signup
				 setName={setName}
				 setEmail={setEmail}
				 setPassword={setPassword}
				 setConfirmPassword={setConfirmPassword}
				 save={save}
				 error={failure}
			/>
		</Background>
		
		)
}
const styles = {
	modalCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalView: {
	   marginHorizontal: 30,
	    backgroundColor: "white",
	    borderRadius: 20,
	    padding: 35,
	    alignItems: "center",
	    backgroundColor: 'rgba(0,0,0,0.7)',
  	},
  	textModal: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 12
	},
	buttonModal: {
		width: 120,
		height: 60,
		backgroundColor: '#f94d6a',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
	},
	
	textButtonModal: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	
}
const mapStateToProps = state => {
	const { user } = state;
	return {
		failure : user.msgFailure,
		success: user.success,
	}
}
const mapsDispatchToProps = dispatch => {
	return {
		register: (name, email, password, confirmPassword) => 
					dispatch(createUser( name, email, password, confirmPassword)),
		clearRequest: () => dispatch(endRequest()),
	}
}

export default connect(mapStateToProps, mapsDispatchToProps)(SignUp);

