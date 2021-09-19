import React ,{useState} from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


function Login({ login, isAuthenticated }) {


  const [formData, setFormData] = useState({
    username: '',
    password: ''
});

const { username, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();
    login(username, password);
};

if (isAuthenticated)
    return <Redirect to='/dashboard' />;



  return (
    <div>
      <Container>
        <Row>
          <Col  xs={12} lg={6}></Col>
          <Col  xs={12} lg={6}  style={{height:'91.5vh'}}>
            <h1 style={{margin:'5vh 0vh 5vh 0vh'}}>Login</h1>
            <Form onSubmit={e => onSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                 type='text'
                 placeholder='Username*'
                 name='username'
                 onChange={e => onChange(e)}
                 value={username}
                 required
                //  type="email" placeholder="Enter email" 
                 />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword"  className='mt-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                // type="password" placeholder="Password" 
                type='password'
                placeholder='Password*'
                name='password'
                onChange={e => onChange(e)}
                value={password}
                minLength='6'
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
// export default Login;

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
