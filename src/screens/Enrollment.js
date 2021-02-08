import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { 
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { format, add, sub, isPast, isToday, parseISO, isSameDay } from 'date-fns';
import { zonedTimeToUtc  } from 'date-fns-tz';
import  pt  from 'date-fns/locale/pt-BR';
import { useIsFocused } from '@react-navigation/native';

import Background from '../components/Background';
import Header from '../components/Header';

import { 
	requestAllEnrollments, 
	requestDeleteMeetups ,
	endRequest,
} from '../store/modules/enrollment/actions';

import { requestDeleteEnrollment } from '../store/modules/enrollment/actions';

export  function Enrollment({ enrolls,removeEnrollment, enrollCancelled, newEnroll, getEnrollments}) {
	const [date, setDate] = useState(new Date());
	const [page, setPage] = useState(1);
	const isFocused = useIsFocused();
	
	const cancelledEnrollment = (id) => {
		removeEnrollment(id);
	}
	const formatedDateText = date => {
		return format(
			zonedTimeToUtc(parseISO(date), 'America/Sao Paulo'),
			 "dd, 'de' MMMM, '`as', HH'h'", 
			 { locale: pt }
		)
	}
	useEffect(()=> {
		if(isFocused) {
			getEnrollments(date, page);
		}
		
	},[isFocused,enrollCancelled,newEnroll]);
	return (
		<Background >
			<View style={styles.enroll}>
				<Header />
				<ScrollView style={styles.scroll}>
					{

						enrolls.map((meet, index)=>{
							return (
								<View key={index} style={styles.meetup}>
									<Image
										style={styles.banner}
										source={{uri: meet.fk_meets.banner.url}}
									/>
									<View style={styles.data}>	
										<Text style={styles.text}>
											{ formatedDateText(meet.fk_meets.date)}
										</Text>
										<Text style={styles.text}>{meet.fk_meets.title}</Text>
										<Text style={styles.text}>{meet.fk_meets.description}</Text>
										<Text style={styles.text}>{meet.fk_meets.localization}</Text>
										<TouchableOpacity 
											style={styles.button}
											onPress={() => cancelledEnrollment(meet.fk_meets.id)}
										>
											<Text 
												style={styles.textButton}
											>
												Cancelar Inscrição
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
	enroll: {
		height: '100%',
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


const mapStateToProps = state => {
	const { enrollment } = state;
	return {
		enrolls: enrollment.enrollments,
		enrollCancelled: enrollment.deleteEnrollment,
		newEnroll: enrollment.deleteEnrollment,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		getEnrollments: (date, page) => dispatch(requestAllEnrollments(date, page)),
		removeEnrollment: id => dispatch(requestDeleteEnrollment(id)),
		finalRequest: () => dispatch(endRequest()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Enrollment);