import React ,{useEffect,useState} from 'react'
import PostCard from '../components/PostCard';
import { Container,Col ,Row,InputGroup,FormControl} from "react-bootstrap";
import axios from 'axios';
import { Card ,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

import moment from 'moment';
import Loader from "react-loader-spinner";

function Post() {

    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/posts/`)
      .then((res) => {
          console.log(res.data);
          setposts(res.data);
          setloading(false);
      })
    }, [])


    const [searchQuery, setSearchQuery] =useState('');
  
    return (
        <div>
            <Container>
            <div style={{marginTop:40}}>
            <InputGroup className="mb-3" style={{height:50}}>
               <FormControl style={{borderBottomLeftRadius:50,borderTopLeftRadius:50}}
                 placeholder="Search..."
                 onChange={(event)=> setSearchQuery(event.target.value)}
                 value={searchQuery} 
               />
               <InputGroup.Append >
                 <InputGroup.Text style={{padding:15,borderBottomRightRadius:50,borderTopRightRadius:50,
                  background:'blue',color:'white',fontWeight:'bolder'}}>Search</InputGroup.Text>
               </InputGroup.Append>
             </InputGroup>
            </div>
            <div style={{textAlign:'center',marginTop:30}}>
              {
                loading==true?
                  <Loader  type="BallTriangle"  color="#00BFFF"  height={100}  width={100}
                    // timeout={3000} //3 secs
                  />                  
                :null
              }
            </div>
            <Row>
                {
                    posts.filter((val)=>{
                        if(searchQuery==" "){
                          return val;
                        }else if(val.title.toLowerCase().includes(searchQuery.toString().toLowerCase())){
                            return val;
                        }
                    })
                    .map((row)=>(
                        <Col lg={4} xs={12} className="my-3">
                            <Card style={{padding:0,margin:0,borderRadius:'10px',overflow:'hidden',
                            boxShadow:'5px 0 15px rgb(0 0 0 / 2',outline:'none',border:'none',
                            background:'#2c303a',color:'#c7c9d3'
                            }}>
                              {/* <Card.Title style={{display:'flex'}}>
                                  <div style={{padding:10,paddingBottom:0}}>
                                    <img src={`${process.env.REACT_APP_API_URL}`+row.image} 
                                      style={{height:50,width:50,borderRadius:'100%'}}></img>
                                  </div>
                                  <div style={{padding:10,paddingBottom:0}}>
                                    <h4>Meraj Ahmed</h4>
                                    <p style={{marginTop:-7,fontSize:12}}>Meraj Ahmed</p>
                                  </div>
                              </Card.Title>                               */}
                              <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}`+row.image} style={{ height: 200 }} />
                              <Card.Body>
                                <div style={{marginRight:10,overflow:'hidden'}}>
                                <Card.Title style={{ width: "max-content"}}>
                                  {row.title}
                                </Card.Title>
                                </div>
                                <div style={{ height:50, overflow: "hidden" }}>
                                  <Card.Text>fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {row.content}</Card.Text>
                                </div>
                              </Card.Body>
                              <Card.Footer style={{background:'#2c303a',color:'#c7c9d3'}}>
                                <small className="text-muted">Last updated {moment(row.created_at).fromNow()}</small>
                                <Link to={`/details/${row.id}`}>
                                    <Button className="btn " 
                                    style={{float:'right',background:'#444857',color:'#c7c9d3',outline:'none',borderRadius:20,paddingTop:5,paddingBottom:5}}
                                    >View more</Button>
                                </Link>
                              </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            </Container>
        </div>
    )
}


export default  Post;