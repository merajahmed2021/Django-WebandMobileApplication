import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import axios from 'axios';

export default function LoginScreen({navigation}) {
    const [Username, setUsername] = React.useState('');
    const [Password, setPassword] = React.useState('');


    const [Image, setImage] = React.useState('');
    // Now use Image in src of image tag
    useEffect(() => {
      axios.get(`https://avatars.dicebear.com/v2/avataars/${{username}}.svg?options[mood][]=happy`)
      .then((res) => {
          console.log(res.data);
          setImage(res.data);
      })
      .catch((err)=>alert(err))
    }, [])
    
    return (
        <View style={{paddingTop:50}}>
            <Text style={{marginTop:80,textAlign:'center'}}>Login Screen</Text>
            <View style={{marginHorizontal:10}}>
                <TextInput  label="Username*"
                  value={Username} style={{marginVertical:20}}
                  onChangeText={text => setUsername(text)}
                />
                <TextInput
                  label="Password*"
                  value={Password} style={{marginVertical:20}}
                  onChangeText={text => setPassword(text)}
                />
                <Button  mode="contained" style={{marginVertical:20}}
                   onPress={() => navigation.navigate('HomeStack')}>Login</Button>

                    <Text style={{marginTop:5,textAlign:'center'}}>
                        Don't have account? </Text>
                    <Button   onPress={() => navigation.navigate('Signup')}>
                      Sign up
                    </Button>
            </View>
      </View>  
    )
}

