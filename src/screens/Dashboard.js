import React from 'react';
import { View,Text, StyleSheet} from 'react-native';
import Background from '../components/Background';
import Title from '../components/Title';

export default function Dashboard() {
	return (
		<Background>
			<View style={styles.dashboard}>
				<View style={styles.header} >
					<Title style={styles.title} />
				</View>
				<View style={styles.main}>
					<Text>Dashboard</Text>
				</View>
				
			</View>
		</Background>
		)
}

const styles = {
	dashboard: {
		height: '100%',
	},
	title: {
		marginBottom: 14,
		marginTop: 10

	},
	header: {
		width: '100%',
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		
	}
};
