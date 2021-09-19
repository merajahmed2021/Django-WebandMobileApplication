import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Button ,Title} from 'react-native-paper';

export default function CreatePostScreen({navigation}) {
    const [text, setText] = React.useState('');

    return (
        <View style={{paddingTop:50}}>
            <Title style={{textAlign:'center'}}>Create your post here</Title>
            <View style={{marginHorizontal:10}}>
                <TextInput  label="Title*"  mode='outlined'
                  value={text} style={{marginVertical:20}}
                  onChangeText={text => setText(text)}
                />
                <TextInput multiline={true}
                  label="Content*" mode='outlined' numberOfLines={8}
                  value={text} style={{marginVertical:20}}
                  onChangeText={text => setText(text)}
                />
                <Button  mode="contained" style={{marginVertical:20}}
                   onPress={() => navigation.navigate('Home')}>
                Post now
                </Button>
            </View>
      </View>  
    )
}
