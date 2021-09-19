import React,{useState} from "react";
import { Button, Form, Col, Row, Container,Alert } from "react-bootstrap";
import axios from 'axios';

function Contact() {

  const [messagesuccess, setmessagesuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message:''
  });

  const {name,email,subject,message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = e => {
    e.preventDefault();
    const config = {
      headers: {
          'content-type': 'application/json',
      },
    };
    // const {name,email,subject,message } = formData;
   axios.post(`${process.env.REACT_APP_API_URL}/contacts/send/`,formData,config)
   .then((res) => {
     console.log('post seccessfully');
    setmessagesuccess(true);
    setFormData({
      name: '',
      email: '',
      subject:'',
      message:''
    })
   })
   .catch((err) =>console.log(err));
};



  return (
    <div>
      <Container>
        <Row>
          <Col  xs={12} lg={6}>
            <div className="text-center">
              <img src='https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_960_720.jpg'
               style={{width:'100%',marginTop:120}}
              ></img>
            </div>
          </Col>
          <Col  xs={12} lg={6} style={{height:'91.5vh'}}>
            <h2 style={{margin:'3vh 0vh 3vh 0vh'}}>Send message to Us</h2>
              {
                messagesuccess==true?
                <Alert  variant='success'>Your message send successfully</Alert>     
                :null
              }
            <Form onSubmit={e => onSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" 
                name='name'
                value={name}
                onChange={e => onChange(e)}
                required
                />
              </Form.Group>

              <Form.Group controlId="email" className='mt-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="subject" className='mt-3'>
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject"
                  name='subject'
                  value={subject}
                  onChange={e => onChange(e)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message"  className='mt-3'>
                <Form.Label>Write your messages</Form.Label>
                <Form.Control as="textarea" rows={5} 
                placeholder="Write something ....." 
                name='message'
                value={message}
                onChange={e => onChange(e)}
                required
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
export default Contact;
