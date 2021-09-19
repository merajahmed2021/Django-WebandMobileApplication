import React ,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { TextInput,Button ,Title} from 'react-native-paper';
import axios from 'axios';

export default function ContactUs({navigation}) {
    const [text, setText] = React.useState('');

    const [messagesuccess, setmessagesuccess] = useState(false)
  
  
    const [name, setName] = useState('')
    const [email ,setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = () => {
        console.log(name,email,subject,message);
        const formData={name,email,subject,message};

        const config = {
          headers: {
              'content-type': 'application/json',
          },
        };
       axios.post(`http://192.168.43.136:8000/contacts/send/`,formData,config)
       .then((res) => {
         alert('Message send successfully.Thanks for contact us.');
        // setmessagesuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
       
       })
       .catch((err) =>alert(err));
    };
    

    return (
        <ScrollView style={{paddingTop:30}}>
            <Title style={{textAlign:'center'}}>Contact us</Title>
            <View style={{marginHorizontal:10,marginBottom:60}}>
                <TextInput  label="Full Name*"  mode='outlined'
                  value={name} style={{marginVertical:20}}
                  onChangeText={text => setName(text)}
                />
                <TextInput  label="Email*"  mode='outlined'
                  value={email} style={{marginVertical:20}}
                  onChangeText={text => setEmail(text)}
                />
                <TextInput  label="Subject*"  mode='outlined'
                  value={subject} style={{marginVertical:20}}
                  onChangeText={text => setSubject(text)}
                />
                <TextInput multiline={true}
                  label="Write your message here..." mode='outlined' numberOfLines={8}
                  value={message} style={{marginVertical:20}}
                  onChangeText={text => setMessage(text)}
                />
                <Button  mode="contained" style={{marginVertical:20}}
                   onPress={() => onSubmit()}>Send now</Button>
            </View>
      </ScrollView>  
    )
}
