import React,{useState} from "react";
import { Button, Form, Col, Row, Container ,Alert} from "react-bootstrap";
import { Redirect, Link } from 'react-router-dom';

// import {addPost} from '../actions/post';
import axios from 'axios'
import { connect } from 'react-redux';

function CreatePost({auth}) {

  const [formData, setFormData] = useState({
    title:'' ,
    content:'',
  });

  const { title, content } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [image ,setimage]=useState(null);
  const [postcreated ,setpostcreated]=useState(false);

  const handleImageChange = (e) => {
    setimage(e.target.files[0])
  };


  const { isAuthenticated, user,token } =auth;


  const onSubmit = e => {
    e.preventDefault();
    let post_data = new FormData();
    post_data.append('image', image, image.name);
    post_data.append('title', title);
    post_data.append('content', content);
    const config = {
      headers: {
          'content-type': 'multipart/form-data',
          'Authorization':`Token ${token}`
      },
    };
    axios.post(`${process.env.REACT_APP_API_URL}/posts/create/`,post_data ,config)
    .then((res) => {
      console.log('post seccessfully');
      setpostcreated(true);
      setFormData({
        title:'' ,
        content:'',
      })
    })
    .catch((err) =>console.log(err));
  };


  return (
    <div>
      <Container>
        <Row>
          <Col  xs={12} lg={6}>
            <img src="https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png" 
            style={{width:'100%',marginTop:80,height:'70vh'}}></img>
          </Col>
          <Col  xs={12} lg={6}>
            <h1 style={{margin:'5vh 0vh 5vh 0vh'}}>Create Your Post</h1>
            { postcreated==true?
              <Alert  variant='success'>Your post created successfully</Alert>:null
            }
            <Form onSubmit={e => onSubmit(e)}>
              <Form.Group controlId="title">
                <Form.Label>Heading</Form.Label>
                <Form.Control type="text" placeholder="Enter heading" 
                   name='title'
                   onChange={e => onChange(e)}
                   value={title}
                   required
                />
              </Form.Group>

              <Form.Group controlId="content"  className='mt-4'>
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" rows={6} 
                  placeholder="Write something ....." 
                  name='content'
                  onChange={e => onChange(e)}
                  value={content}
                  required
                />
              </Form.Group>
              <Form.Group className='mt-4'>
             
              <Form.File 
                  id="custom-file"
                  custom
                  accept="image/png, image/jpeg"  onChange={handleImageChange} 
                />
              </Form.Group>

              <Button variant="primary" type="submit" className='mt-4'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});


// export default CreatePost;
export default connect(mapStateToProps, null)(CreatePost);








    // console.log(post_data);
    // for (let [key, value] of post_data.entries()) {
      // console.log(key, value);
    // }
