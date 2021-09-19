import React from 'react'
import { Card ,Dropdown,Button} from "react-bootstrap";


import axios from 'axios';
import { connect } from 'react-redux';


function PostCard({auth,props}) {
     

  const { isAuthenticated, user,token } =auth;

  const deletePost=()=>{
    const config = {
      headers: {
          'content-type': 'application/json',
          'Authorization':`Token ${token}`
      },
    };
    axios.get(`${process.env.REACT_APP_API_URL}/posts/delete/props.id/`,config)
    .then((res) => {
        console.log(res.data);
    })

  }


  const editPost=()=>{
    console.log(props.id);
  }
  
  return (
        <div>
            <Card className="bg-dark text-white">
              <Card.Img src={props.img} alt="Card image" style={{height:200}}/>
              <Card.ImgOverlay>                
                <div style={{display:'flex'}}>
                  <div style={{overflow:'hidden',width:'85%'}}>
                    <Card.Title style={{width:'max-content'}}>{props.title}</Card.Title>
                  </div>
                  <Dropdown style={{marginLeft:'auto',width:'10%'}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={deletePost}>Delete</Dropdown.Item>
                      <Dropdown.Item onClick={editPost}>Edit</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                  <div style={{height:100,overflow:'hidden'}}>
                  <Card.Text >
                   {props.content}
                  </Card.Text>
                  </div>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>       
        </div>
    )
}
// export default  PostCard;
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(PostCard);

