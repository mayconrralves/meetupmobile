import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {
	format
} from 'date-fns';
import { View,Text, StyleSheet} from 'react-native';
import Background from '../components/Background';
import { 
	requestAllEnrollments, 
	requestDeleteMeetups ,
	endRequest,
} from '../store/modules/enrollment/actions';

export  function Enrollment({ enrolls,enrollCancelled, newEnroll, getEnrollments}) {
	const [date, setDate] = useState(new Date());
	const [page, setPage] = useState(1);
	console.warn('enrolls',enrolls);
	useEffect(() => {
		console.warn('enrolls',enrolls);

		if(!enrollCancelled || !newEnroll) {
			getEnrollments(date, page);
		}
		
	}, [enrollCancelled,newEnroll]);
	return (
		<Background >
			<View style={styles.enroll}>
				<Text>Enrollment</Text>
			</View>
		</Background>
		)
}


const styles = StyleSheet.create({
 	enroll: {
 		width: '100%',
 		height: '100%'
 	}
});

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
		finalRequest: () => dispatch(endRequest()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Enrollment);