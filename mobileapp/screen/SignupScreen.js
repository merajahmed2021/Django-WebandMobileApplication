import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Button } from 'react-native-paper';

export default function LoginScreen({navigation}) {
    const [text, setText] = React.useState('');

    return (
        <View style={{paddingTop:50}}>
        <Text style={{marginTop:60,textAlign:'center'}}>Signup Screen</Text>
        <View style={{marginHorizontal:30}}>
            <TextInput  label="Email*"
              value={text} style={{marginVertical:10}}
              onChangeText={text => setText(text)}
            />
            <TextInput  label="Username*"
              value={text} style={{marginVertical:10}}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Password*"
              value={text} style={{marginVertical:10}}
              onChangeText={text => setText(text)}
            />
             <TextInput
              label="Confirm Password*"
              value={text} style={{marginVertical:10}}
              onChangeText={text => setText(text)}
            />
            <Button  mode="contained" style={{marginVertical:20}}
               onPress={() => navigation.navigate('HomeStack')}>
              Signup
            </Button>
        </View>
      </View>  
    )
}
