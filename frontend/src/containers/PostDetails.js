import React ,{useEffect,useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container,Card,Button,Row,Col} from "react-bootstrap";

export default function PostDetails({props}) {

    const { id } = useParams();
    console.log(id);


    const [posts, setposts] = useState([]);
    const [user, setuser] = useState([]);

    // console.log(user)



    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/posts/details/${id}/`)
        .then((res) => {
          console.log(res.data);
          setposts(res.data);
            axios .get(`${process.env.REACT_APP_API_URL}/user/profile/${res.data.user}/`)
            .then((res) => {
              // console.log(res.data);
              setuser(res.data);
            }).catch((err)=>console.log('profile doesnot exit'));
        }).catch((err)=>console.log(err));
    }, []);



    return (
        <div>
          <Container>
            <Row style={{overflow:'hidden',marginTop:50,marginBottom:50}}>
                <Col  xs={12} lg={6} style={{borderRadius:'10px',overflow:'hidden',boxShadow:'5px 0 15px rgb(0 0 0 / 2)'}}>
                  <img variant="top" src={`${process.env.REACT_APP_API_URL}`+posts.image} style={{marginTop:40, height:400,width:'100%' }} />
                  <div style={{color:'#c7c9d3',paddingBottom:30}}>
                    <h3 className="text-center" style={{marginTop:30,marginBottom:30,textAlign:'center' }}>{posts.title}</h3>
                    <div>
                      <p>
                        fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {posts.content}
                        fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {posts.content}
                        fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {posts.content}
                        </p>
                    </div>
                  </div>                
                </Col>
                <Col  xs={12} lg={6} >
                  {
                    user.image==undefined?
                       null
                    :
                    // <h1>Wow profile is here</h1>
                
                  <div style={{borderRadius:'10px',overflow:'hidden',boxShadow:'5px 0 15px rgb(0 0 0 / 2)',}}>
                      {/* <div style={{height:200,background:'green'}}> */}
{/*  */}
                      {/* </div> */}
                      
                      <div className='text-center' style={{background:'blue',paddingTop:80}}>
                        <img variant="top" src={`${process.env.REACT_APP_API_URL}`+user.image} 
                           style={{marginBottom:-140, height:280,width:'50%',borderRadius:'100%' }} />
                      </div>
                      <div style={{color:'#c7c9d3',paddingBottom:30,padding:20,marginTop:150}}>
                        <div>
                          <h3 style={{marginTop:50,marginBottom:15}}>{user.name}</h3>
                          <p style={{marginTop:10}}>{user.college}</p>
                          <p style={{marginBottom:30,marginTop:-15}}>{user.city}</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',width:'40%'}}>
                            <div>
                                <a href={user.facebook}><i class='fab fa-facebook-square' style={{fontSize:35}}></i></a>
                            </div>
                            <div>
                                <a><i class='fab fa-linkedin' style={{fontSize:35}}></i></a>
                            </div>
                            <div>
                                <a><i class='fab fa-instagram' style={{fontSize:35}}></i></a>
                            </div>
                            <div>
                                <a><i class='fab fa-twitter-square' style={{fontSize:35}}></i></a>
                            </div>
                        </div>
                        <div>
                          <h3 style={{marginTop:30,marginBottom:30}}>About</h3>
                          <p>
                            fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {user.bio}
                            fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {user.bio}
                            fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {user.bio}
                            fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {user.bio}
                            fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {user.bio}
                            </p>
                        </div>
                      </div>
                  </div>
                    }
                </Col>
            </Row>
          </Container>
        </div>
    )
}
