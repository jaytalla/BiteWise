import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import gb, { Colors } from '../global/Style';
import { vh, vw } from '../index';

const FoodCard = ({ name, image }) => {
	return (
		<View>
			<View
				style={{
					backgroundColor: Colors.orange,
					width: 25 * vw,
					height: 15 * vh,
					marginRight: 2 * vw,
					borderRadius: 50,
					marginBottom: 1 * vh,
				}}
			>
				<Image source={image} style={[gb.background, { borderRadius: 20 }]} />
			</View>
			<Text style={[gb.smallFont, { fontWeight: 'bold', marginBottom: 0.5 * vh }]}>{name}</Text>
			<Text style={[, {}]}>FoodCard</Text>
		</View>
	);
};

export default FoodCard;
