import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { TextInput,Button,Title ,Card, Paragraph ,Avatar} from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({navigation}) {
    
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
        <ScrollView>
            <View  style={styles.header} >
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{ marginLeft: 20, marginTop: 40 }}>
                      <Title style={{ color: "white", fontSize: 30 }}>Share your </Title>
                      <Title style={{ color: "white", fontSize: 25 }}>experiences with Us</Title>
                    </View>
                    <View>
                        <Button color='white'
                          onPress={() => navigation.navigate("ViewMore")}
                        >More</Button>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: -30}}>
              <Card  
              onPress={() => navigation.navigate("CreatePost")}
               style={{margin:10,elevation:18,paddingHorizontal:5,paddingVertical:3,borderRadius:10}}>
                 <View style={{flexDirection:'row'}}>
                  <TextInput style={{backgroundColor:'white',flex: 1,height:50,color:'black',fontSize:20}}
                   label="Create your post here"
                   underlineColorAndroid="white"
                   disabled={true}    
                   textStyle={{color:'red'}}
                   onPress={() => navigation.navigate("Explore")}      
                   />
                 </View>             
              </Card>
            </View>
            <ScrollView >
                {
                  posts.map((row)=>(
                    <Card style={{marginHorizontal:10,marginVertical:10,elevation:15}}>
                    <Card.Cover source={{ uri: 'http://192.168.43.136:8000'+row.image }} />
                    <Card.Content>
                      <Title>{row.title}</Title>
                      <Paragraph>{row.content}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                      <Button>Cancel</Button>
                      <Button>Ok</Button>
                    </Card.Actions>
                  </Card>
                  ))
                }
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#694fad",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      paddingBottom: 60,
    }
})