import React, { useEffect, useState } from "react";
// import DashboardCard from '../components/DashboardCard';
import { Container, Col, Row ,Modal} from "react-bootstrap";
import { Card, Dropdown, Button } from "react-bootstrap";

import axios from "axios";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import moment from 'moment';
import Loader from "react-loader-spinner";

function Dashboard({ auth }) {
  const { isAuthenticated, user, token } = auth;

  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);

  const [userprofile, setuserprofile] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/dashboard/`, config)
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
        setloading(false);
        axios.get(`${process.env.REACT_APP_API_URL}/user/profile/${user.id}/`)
        .then((res) => {
          setuserprofile(res.data);
        }).catch((err)=>console.log('profile doesnot exit'));

      });
  }, []);



  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);


  const deletePost = (id) => {
    const config = {
      headers: {
        "content-type": "application/json",
        'Authorization': `Token ${token}`,
      },
    };
    axios
      .delete(`${process.env.REACT_APP_API_URL}/posts/delete/${id}/`, config)
      .then((res) => {
        console.log("Deleted Successfully");
        setShow(true);
        // model();
      });
  };

  const editPost = (id) => {
    console.log(id);
  };



  return (
    <div style={{marginBottom:100}}>
      <h2 className="text-center my-4 text-capitalize"> 
      {user ?
           <div>Welcome back! <span className="text-capitalize text-primary"> {user.username} </span></div>
        :null
      }
      </h2>
      <div style={{textAlign:'center',marginTop:30}}>
        {loading==true?
          <Loader  type="BallTriangle"  color="#00BFFF"  height={100}  width={100} />:null}
      </div>

      <Container>

        {
          userprofile.image==undefined?null:
          <Row style={{borderRadius:'10px',overflow:'hidden',boxShadow:'5px 0 15px rgb(0 0 0 / 2)'}}>
            <Col lg={6} xs={12} className='text-center'>
              <img variant="top" src={`${process.env.REACT_APP_API_URL}`+userprofile.image} 
                 style={{marginTop:'10vh', height:280,width:'50%',borderRadius:'100%' }} />
                <div style={{marginTop:100}}>
                  <Button className='btn btn-primary'>Edit Profile</Button>  
                </div> 
            </Col>
            <Col lg={6} xs={12} style={{color:'#c7c9d3',paddingBottom:30,padding:20}}>
              <div>
                <h3 style={{marginTop:50,marginBottom:15}}>{userprofile.name}</h3>
                <p style={{marginTop:10}}>{userprofile.college}</p>
                <p style={{marginBottom:30,marginTop:-15}}>{userprofile.city}</p>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',width:'40%'}}>
                  <div>
                      <a href={userprofile.facebook}><i class='fab fa-facebook-square' style={{fontSize:35}}></i></a>
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
                <p style={{marginBottom:30,marginTop:-15}}>Skills: {userprofile.skills}</p>
                <p>
                  fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {userprofile.bio}
                  fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {userprofile.bio}
                  fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {userprofile.bio}
                  fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {userprofile.bio}
                  fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {userprofile.bio}
                  </p>
              </div>
            </Col>
        </Row>
      }

      

        <Modal show={show} onHide={handleClose}   centered>
          <Modal.Header>
            <Modal.Title>Deletion Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your post deleted Successfully.Please refresh your page.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>




        <Row>
          <div style={{padding:30}}>
             <h2 className='text-center'>Post created by you</h2>
          </div>
          {posts.map((row) => (
            <Col lg={4} xs={12} className="my-3">
              <Card
                style={{  padding: 0,  margin: 0,  borderRadius: "10px",  overflow: "hidden",
                  boxShadow: "5px 0 15px rgb(0 0 0 / 2",outline: "none",border: "none"}}>
                <Card.Img  variant="top"  src={`${process.env.REACT_APP_API_URL}` + row.image}
                    style={{ height: 200 }}
                  />
                <Card.Body style={{ background: "#2c303a", color: "#c7c9d3" }}>
                  <Card.Title style={{ width: "max-content" }}>{row.title}</Card.Title>
                  <div style={{ height: 50, overflow: "hidden" }}>
                    <Card.Text>
                      fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb
                      xclvkjbsv zxclvkjv zlxckvjbz v {row.content}
                    </Card.Text>
                  </div>
                </Card.Body>
                <Card.Footer  style={{ background: "#2c303a", color: "#c7c9d3",display:'flex',justifyContent:'space-between' }}>
                <small className="text-muted">Last updated {moment(row.created_at).fromNow()}</small>
                </Card.Footer>
                <Card.Footer  style={{ background: "#2c303a", color: "#c7c9d3",display:'flex',justifyContent:'space-between' }}>
                  <Link to={`/details/${row.id}`}>
                    <Button  className="btn" variant="outline-success"
                      style={{  float: "left", borderRadius: 20,  paddingTop: 5,  paddingBottom: 5,}}
                    >View Post </Button>
                  </Link>
                  {/* <Link to={`/edit/${row.id}`}>
                  <Button  className="btn" variant="outline-warning" onClick={()=>editPost(row.id)}
                    style={{  float: "left", borderRadius: 20,  paddingTop: 5,  paddingBottom: 5,}}
                  > Edit Post </Button>
                  </Link> */}
                  <Button  className="btn" variant="outline-danger"     onClick={()=>deletePost(row.id)}
                    style={{  float: "right", borderRadius: 20,  paddingTop: 5,  paddingBottom: 5,}}
                  > Delete Post </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
// export default  Dashboard;
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Dashboard);
