import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { Container,Card,Button,Row,Col,Form,Alert} from "react-bootstrap";
import { connect } from 'react-redux';

function Profile({auth}) {


    const { isAuthenticated, user,token } =auth;

    const [posts, setposts] = useState([]);

    const [formData, setFormData] = useState({
        name:'' ,
        college:'',
        city:'',
        skills:'',
        bio:'',
        facebook:'',
        instagram:'',
        linkedin:'',
        twitter:''
      });

    const { name, college,city,skills,bio,facebook,instagram,linkedin,twitter} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const [image ,setimage]=useState(null);
    const handleImageChange = (e) => {
        setimage(e.target.files[0])
      };


    const [postcreated ,setpostcreated]=useState(false);

    const onSubmit = e => {
        e.preventDefault();
        console.log( name, college,city,skills,bio,facebook,instagram,linkedin,twitter);
        let post_data = new FormData();
        post_data.append('image', image, image.name);
        post_data.append('name', name);
        post_data.append('college', college);
        post_data.append('city', city);
        post_data.append('skills', skills);
        post_data.append('bio', bio);
        post_data.append('facebook', facebook);
        post_data.append('instagram', instagram);
        post_data.append('linkedin', linkedin);
        post_data.append('twitter', twitter);
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
              'Authorization':`Token ${token}`
          },
        };
        axios.post(`${process.env.REACT_APP_API_URL}/user/createprofile/`,post_data ,config)
        .then((res) => {
          console.log('post seccessfully');
          setpostcreated(true);
        })
        .catch((err) =>console.log(err));
      };
    

    return (
        <div>
          <Container>
              <div>
                <h3 className="text-center my-4">Create your profile here</h3>
              </div>
              <div>
                { postcreated==true?
                <Alert  variant='success'>Your post created successfully</Alert>:null
                }

                <Form onSubmit={e => onSubmit(e)}>
                    <Row>
                      <Col xs={12} lg={6}>
                           <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>Full Name</Form.Label>
                              <Form.Control type="text" placeholder="Full Name*" 
                                name='name'
                                onChange={e => onChange(e)}
                                value={name}
                                required
                              />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>College Name</Form.Label>
                              <Form.Control type="text" placeholder="College Name*" 
                                 name='college'
                                 onChange={e => onChange(e)}
                                 value={college}
                                 required
                              />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>City</Form.Label>
                              <Form.Control type="text" placeholder="City*" 
                                name='city'
                                onChange={e => onChange(e)}
                                value={city}
                              />
                            </Form.Group>
                            
                            <Form.Group className='mt-4'>
                                <Form.Label>Upload Profile Image</Form.Label>
                                <Form.File 
                                    id="custom-file"
                                    custom
                                    accept="image/png, image/jpeg"  onChange={handleImageChange} 
                                  />
                            </Form.Group>
                            
                            <Form.Group controlId="content"  className='mt-4'>
                                <Form.Label>Skills</Form.Label>
                                <Form.Control as="textarea" rows={6} 
                                  placeholder="Write your skills ....." 
                                  name='skills'
                                  onChange={e => onChange(e)}
                                  value={skills}
                                />
                           </Form.Group>
                           
                      </Col>
                      <Col xs={12} lg={6}>
                            <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>Facebook</Form.Label>
                              <Form.Control type="text" placeholder="Facebook Url*" 
                                 name='facebook'
                                 onChange={e => onChange(e)}
                                 value={facebook}
                              />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>Instagram</Form.Label>
                              <Form.Control type="text" placeholder="Instagram Url*" 
                                 name='instagram'
                                 onChange={e => onChange(e)}
                                 value={instagram}
                              />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>LinkedIn</Form.Label>
                              <Form.Control type="text" placeholder="LinkedIn Url*" 
                                name='linkedin'
                                onChange={e => onChange(e)}
                                value={linkedin}
                              />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail" className="my-3">
                              <Form.Label>Twitter</Form.Label>
                              <Form.Control type="text" placeholder="Twitter Url*" 
                                 name='twitter'
                                 onChange={e => onChange(e)}
                                 value={twitter}
                               />
                            </Form.Group>
                            
                            <Form.Group controlId="content"  className='mt-4'>
                                <Form.Label>Details</Form.Label>
                                <Form.Control as="textarea" rows={6} 
                                  placeholder="Write something about yourself ....." 
                                  name='bio'
                                  onChange={e => onChange(e)}
                                  value={bio}
                                  required
                                />
                            </Form.Group>
                        </Col>
                     </Row>
                     <Button variant="primary" type="submit" className="my-3">
                       Submit
                     </Button>
                </Form>
              </div>
          </Container>
        </div>
    )
}



const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  
  // export default CreatePost;
  export default connect(mapStateToProps,null)(Profile);