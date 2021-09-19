import React from 'react';
import { Container,Col ,Row,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function Home({auth}) {

    const { isAuthenticated, user,token } =auth;
    // console.log(user);

    return (
        <div>
            <Container style={{display:'flex',justifyContent:'center',alignItem:'center',height:'88vh'}}>
                <Row>
                    <Col>
                        <div style={{marginTop:50}}>
                            <img src='https://cdn.pixabay.com/photo/2015/10/29/23/19/wordpress-1013189_960_720.png' style={{height:'70vh'}}></img>
                        </div>     
                    </Col>
                    <Col>
                    <div style={{marginTop:'30vh'}}>
                        <div style={{paddingBottom:60}}>
                            <h1 className='text-center'>Welcome to our world</h1>
                            <p className='text-center'>We help people by providing guidance.Share your experiences to help others.</p>
                        </div>
                        {
                            isAuthenticated==false?
                            <div className='text-center'>
                                <Link to='/signup'>
                                   <Button className="btn btn-primary" 
                                   style={{margin:10,padding:10,borderRadius:50,width:130,fontWeight:'bolder',color:'white'}}
                                   >Signp</Button>
                                </Link>
                                <Link to='/login'>
                                   <Button className="btn btn-warning" style={{margin:10,padding:10,borderRadius:50,width:130,fontWeight:'bolder',color:'white'}}
                                   >Login</Button>
                                </Link>
                             </div>
     
                            :
                            <div>
                              <h2 className="text-center my-4 text-capitalize"> 
                              {user ?
                                   <div>Hi!<span className="text-capitalize text-primary"> {user.username} </span>Share your ideas to us.</div>
                                :null
                              }
                              </h2>
                            </div>
                        }
                      
                    </div>
                    </Col>
                </Row>               
            </Container>
        </div>
    )
}
// export default  Home;

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  
  // export default CreatePost;
export default connect(mapStateToProps, null)(Home);
  
  
  
  