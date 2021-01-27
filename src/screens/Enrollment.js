import React from 'react';
import { View,Text, StyleSheet} from 'react-native';
import Background from '../components/Background';

export default function Enrollment() {
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