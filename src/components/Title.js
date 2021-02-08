import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default function Title({ style }){
	return <Text style={[styles.title, style]}>Meetup</Text>
}

const styles = {
	title: {
		fontSize: 44,
		fontWeight: 'bold',
		color: '#f94d6a',
	}
};