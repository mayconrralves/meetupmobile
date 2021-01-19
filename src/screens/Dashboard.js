import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import { useIsFocused } from '@react-navigation/native';
import { format, add, sub, isPast, isToday, parseISO, isSameDay } from 'date-fns';
import { zonedTimeToUtc  } from 'date-fns-tz';
import  pt  from 'date-fns/locale/pt-BR';
import { requestMeetups} from '../store/modules/meet/actions';


import { 
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	Modal,
	Image,
	StyleSheet
} from 'react-native';

import Background from '../components/Background';
import Header from '../components/Header';


export function Dashboard( { meets, getMeets } ) {
	
	const [modalVisible, setModalVisible] = useState(false);
	const [dateActual, setDateActual] = useState(new Date());
	const isFocused = useIsFocused();
	const addDate = () => {
		setDateActual(add(dateActual, { days: 1 }));
	}
	const subDate = () => {
		setDateActual(sub(dateActual, { days: 1 }))
	}
	const formatedDate = () => {
		return format(dateActual, "dd/MM/yyyy")
	}
	const formatedDateText = (date) => {
		return format(
			zonedTimeToUtc(parseISO(date), 'America/Sao Paulo'),
			 "dd, 'de' MMMM, '`as', HH'h'", 
			 { locale: pt}
		)
	}
	const dateChoose = (date) => {
		if(!isPast(date) || isToday(date)) {
			setDateActual(date);
		}
	}
	useEffect(()=> {
		if(isFocused) {
			getMeets();
		}
		
	},[isFocused]);
	return (
		<Background>
			<View style={styles.dashboard}>
				<Header />
				<View style={styles.menu}>
					<Modal
				        animationType="slide"
				        transparent={true}
				        visible={modalVisible}
				        style={styles.modal}
				      >
				      <View style={styles.modalCenter}>
				      		 <View style={styles.modalView}>
					      	<DatePicker
						      			style={styles.datePicker}
		      							date={dateActual}
		      							onDateChange={dateChoose}
		      							mode='date'
		      							textColor='#fff'
		    					/>
		    					<TouchableOpacity style={styles.buttonModal}
		    							onPress={() => setModalVisible(!modalVisible)}
		    					>
		    						<Text style={styles.textButtonModal}> Ok </Text>
		    					</TouchableOpacity>
					      </View>
				      </View>
				     
				     </Modal>
					<TouchableOpacity
						onPress={ () => subDate() }
					>
						<Icon name='left' size={35} color='#fff'/>
					</TouchableOpacity>
					<TouchableHighlight
						onPress={()=>setModalVisible(!modalVisible)}
					>
						<Text style={styles.textMenu}>
						{
							formatedDate()
						}
					</Text>
					</TouchableHighlight>
					
					
					<TouchableOpacity
						onPress={() => addDate()}
					>
						<Icon name='right' size={30} color='#fff'/>
					</TouchableOpacity>					
				</View>
				<ScrollView style={styles.scroll}>
					{

						meets.map((meet, index)=>{
							return isSameDay(parseISO(meet.date),  dateActual) && (
								<View key={index} style={styles.meetup}>
									<Image
										style={styles.banner}
										source={{uri: meet.banner.url}}
									/>
									<View style={styles.data}>	
										<Text style={styles.text}>
											{ formatedDateText(meet.date)}
										</Text>
										<Text style={styles.text}>{meet.title}</Text>
										<Text style={styles.text}>{meet.description}</Text>
										<Text style={styles.text}>{meet.localization}</Text>
										<TouchableOpacity style={styles.button}>
											<Text 
												style={styles.textButton}
											>
												Realizar Inscrição
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							) 

						})
					}
				</ScrollView>
				
			</View>
		</Background>
		) 
}

const styles = {
	dashboard: {
		height: '100%',
	},
	menu: {
		flexDirection: 'row',
		height: 70,
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonModal: {
		width: 100,
		height: 50,
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
	datePicker: {
		height: 120,
		width: 200,
	},
	modalView: {
	   marginHorizontal: 30,
	    backgroundColor: "white",
	    borderRadius: 20,
	    padding: 35,
	    alignItems: "center",
	    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  
	textMenu: {
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
		marginHorizontal: 25
	},
	scroll : {
		flex: 1,
		marginHorizontal: 20,
	},
	meetup: {
		flex: 1,
		marginVertical: 15,
		backgroundColor: '#fff',
		borderRadius: 6
	},
	data: {
		marginHorizontal: 20,
		marginVertical: 15,
	},
	button: {
		height: 55,
		backgroundColor: '#f94d6a',
		borderRadius: 6,
		marginTop: 6,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6
	},
	textButton: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20,
	},
	banner: {
    	height: 200,
    	borderTopLeftRadius: 6,
    	borderTopRightRadius: 6,
    	resizeMode: 'stretch'
  	},
  	text: {
  		flex: 1,
  		color: 'rgba(0,0,0,0.4)',
  		fontSize: 16,
  		marginBottom: 4
  	}
};

const mapsStateToProps = state => {
	const { meet } = state;
	return {
		meets: meet.meets, 
	}
}

const mapsDispatchToProps = dispatch => {
	return {
		getMeets: () => dispatch(requestMeetups()),
	}
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Dashboard);