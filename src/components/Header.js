import React from 'react';
import { View, StyleSheet} from 'react-native';
import Title from '../components/Title';

export default function Header(){

	return (
				<View style={styles.header} >
					<Title style={styles.title} />
				</View>
		)
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 6,
	},
	header: {
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.4)',
		alignItems: 'center',
		justifyContent: 'center',
		
	}
});