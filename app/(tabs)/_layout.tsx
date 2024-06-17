import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../constants/icons';
import { Colors } from '../global/Style';
import { StatusBar } from 'expo-status-bar';

const TabIcon = ({ icon, color, name, focused }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Image
				style={{ width: 20, height: 20, marginBottom: 5 }}
				source={icon}
				resizeMode="contain"
				tintColor={color}
			/>
			<Text style={{ color: focused ? Colors.green : Colors.dark, fontWeight: focused ? 'bold' : 'normal' }}>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<>
			<StatusBar backgroundColor="dark"></StatusBar>
			<Tabs
				initialRouteName="dashboard"
				screenOptions={{ tabBarActiveTintColor: Colors.green, tabBarShowLabel: false, headerShown: false }}
			>
				<Tabs.Screen
					name="savedRecipe"
					options={{
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.home} color={color} name="Bookmark" focused={focused}></TabIcon>
						),
					}}
				/>
				<Tabs.Screen
					name="dashboard"
					options={{
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.home} color={color} name="Dashboard" focused={focused}></TabIcon>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						tabBarIcon: ({ color, focused }) => (
							<TabIcon icon={icons.home} color={color} name="Profile" focused={focused}></TabIcon>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
