import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Button ,Title} from 'react-native-paper';

export default function AboutUs({navigation}) {

    return (
        <View style={{paddingTop:50}}>
            <Title style={{textAlign:'center'}}>About Us</Title>
            <View style={{marginHorizontal:10}}>
               <Text>This is about us page of this app</Text>               
            </View>
      </View>  
    )
}
