import React ,{useState}from "react";
import { Button, Form, Col, Row, Container,Alert } from "react-bootstrap";
import { connect } from 'react-redux';
// import { register } from '../actions/auth';
import { Redirect, Link } from 'react-router-dom';

import {register} from '../actions/auth';

function Signup({ register, isAuthenticated }) {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      password2: '',
    });

    const [accountCreated, setAccountCreated] = useState(false);
    const [passwordcheck, setpasswordcheck] = useState(false);

    // const { username, email,password } = formData;
    const { username, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password === password2) {
            console.log(username,email ,password);
            const newUser = {
              username,
              password,
              email,
            };
            register(newUser);
            // register(username,email,password);
            setAccountCreated(true);
        }else{
            setpasswordcheck(true);
            // setTimeout(() => {setpasswordcheck(true)},3000); 
        }
    };

    if (isAuthenticated)
        return <Redirect to='/dashboard' />;
    // else if (accountCreated)
        // return <Redirect to='/login' />;




    return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6}></Col>
          <Col xs={12} lg={6} style={{height:'91.5vh'}}>
            <h1 style={{margin:'5vh 0vh 3vh 0vh'}}>Signup</h1>
            <div>
                {
                    accountCreated==true?
                    <Alert  variant='success'>Account created successfully.Login to continue.</Alert>     
                    :null
                }
               {
                    passwordcheck==true?
                     <Alert  variant='danger' >Password didn't match .Try again.</Alert>     
                    :null
                } 
            </div>
            <Form onSubmit={e => onSubmit(e)}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" 
                    placeholder='Username*'
                    name='username'
                    onChange={e => onChange(e)}
                    value={username}
                    required
                />
              </Form.Group>

              <Form.Group controlId="email"  className='mt-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                  placeholder='Email*'
                  name='email'
                  onChange={e => onChange(e)}
                  value={email}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="password"  className='mt-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                 type='password'
                 placeholder='Password*'
                 name='password'
                 onChange={e => onChange(e)}
                 value={password}
                 minLength='6'
                 required
                />
              </Form.Group>

              <Form.Group controlId="re_password"  className='mt-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                 type='password'
                 placeholder='Password*'
                 name='password2'
                 onChange={e => onChange(e)}
                 value={password2}
                 minLength='6'
                 required
                />
              </Form.Group> 

              <Button variant="primary" type="submit" className='mt-3'>
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account? <Link to="/login" style={{textDecoration:'none',fontWeight:'bolder'}}>Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// export default Signup;

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register})(Signup);
