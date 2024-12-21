// App.js
import {registerRootComponent} from "expo";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import Header from "~/components/_Header";
import HomeScr from "~/screens/HomeScr/_HomeScr";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{header: () => <Header />}}
			>
				<Stack.Screen name="Home" component={HomeScr} />
				{/* <Stack.Screen name="ClientList" component={ClientListScreen} /> */}
			</Stack.Navigator>
		</SafeAreaProvider>
	);
}

registerRootComponent(App);
