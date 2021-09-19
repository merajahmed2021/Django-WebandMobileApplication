import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

export default function App() {

  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get('http://192.168.43.136:8000/posts/')
    .then((res) => {
        console.log(res.data);
        setposts(res.data);
        setloading(false);
    })
    .catch((err)=>alert(err))
  }, [])


  return (
    <ScrollView style={{marginVertical:20}}>
      {
        posts.map((row)=>(
          <Card style={{marginHorizontal:10,marginVertical:10,elevation:15}}>
          <Card.Content>
            <Title>{row.title}</Title>
            <Paragraph>{row.content}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'http://192.168.43.136:8000'+row.image }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      
        ))
      }
      <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
