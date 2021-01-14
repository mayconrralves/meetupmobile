import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestMeetups} from '../store/modules/meet/actions';
import { useIsFocused } from '@react-navigation/native';
import { 
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native';

import Background from '../components/Background';
import Header from '../components/Header';


export function Dashboard( { meets, getMeets } ) {
	const isFocused = useIsFocused();
	useEffect(()=> {
		if(isFocused) {
			getMeets();
		}
		
	},[isFocused]);
	return (
		<Background>
			<View style={styles.dashboard}>
				<Header />
				<View style={styles.menu}><Text>31 de janeiro</Text></View>
				<ScrollView style={styles.scroll}>
					{
						meets.map((meet)=>{
							return (
								<View style={styles.meetup}>
									<Image
										style={styles.banner}
										source={{uri: meet.banner.url}}
									/>
									<View style={styles.data}>	
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
		height: 70
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