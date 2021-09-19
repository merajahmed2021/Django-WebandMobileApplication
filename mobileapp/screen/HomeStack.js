import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CreatePostScreen from './CreatePostScreen';

import ViewMoreScreen from './ViewMoreScreen';

import { View } from 'react-native';
import ContactUsScreen from './ContactUsScreen';
import AboutUsScreen from './AboutUsScreen';

export default function HomeStack({navigation}) {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator  initialRouteName="Home">
            <Stack.Screen name="Home"             
                options={{
                    headerLeft: null,
                    headerRight: () => (
                          <Icon.Button name='notifications-sharp' size={26}  
                            backgroundColor='#694fad'
                            color= 'white'
                            onPress={() => navigation.navigate("ViewMore")}
                          ></Icon.Button>
                      ),
                      title: 'Blog App',
                      headerStyle: {elevation:0,backgroundColor:'#694fad'},
                      headerTitleStyle: {color:'white',fontSize:20,}
                    }}
                component={HomeScreen} 
            />
            <Stack.Screen name="CreatePost" 
                options={{
                      title: 'Create post',
                      headerStyle: {elevation:0,backgroundColor:'#694fad'},
                      headerTitleStyle: {color:'white',fontSize:20,}
                    }}
                component={CreatePostScreen} 
            />
            <Stack.Screen name="ViewMore" 
                options={{
                      title: 'Create post',
                      headerStyle: {elevation:0,backgroundColor:'#694fad'},
                      headerTitleStyle: {color:'white',fontSize:20,}
                    }}
                component={ViewMoreScreen} 
            />
             <Stack.Screen name="AboutUs" 
                options={{
                      title: 'About Us',
                      headerStyle: {elevation:0,backgroundColor:'#694fad'},
                      headerTitleStyle: {color:'white',fontSize:20,}
                    }}
                component={AboutUsScreen} 
            />
             <Stack.Screen name="ContactUs" 
                options={{
                      title: 'Contact Us',
                      headerStyle: {elevation:0,backgroundColor:'#694fad'},
                      headerTitleStyle: {color:'white',fontSize:20,}
                    }}
                component={ContactUsScreen} 
            />

        </Stack.Navigator>
    )
}
