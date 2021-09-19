import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';
import CreatePostScreen from './screen/CreatePostScreen';

import HomeStack from './screen/HomeStack';
// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm i react-native-paper react-native-vector-icons native-base

function AppScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>App Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Signup')}
      />
       <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName="Apphome" headerMode="none">
        <Stack.Screen name="Apphome" component={AppScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="CreatePost" component={CreatePostScreen} /> */}
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;