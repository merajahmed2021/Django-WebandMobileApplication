import React from 'react';
import { Container,Col ,Row} from "react-bootstrap";

function About() {
    return (
        <div style={{marginBottom:50}}>
            <Container>
                <Row>
                    <div style={{marginTop:20,marginBottom:30}}>
                             <h1 className="text-center">About Us</h1>
                    </div>
                    <Col lg={6} xs={12}>
                        <div className='text-center'>
                            <img src="https://cdn.pixabay.com/photo/2017/09/09/01/01/tree-2730787_960_720.png"
                             style={{height:'60vh',width:'90%'}}
                            ></img>
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        
                        <div style={{marginTop:50}}>
                            <q>Lorem iqsum dolor sit amet consectetur, adipisicing elit. 
                                Possimus magni illo, asperiores reprehenderit unde, incidunt placeat sequi quae, saepe sint iusto assumenda.
                                Facilis eaque debitis, sapiente officia incidunt similique error.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eligendi quo sit nihil vel consequatur
                                officiis quam! Ipsa hic enim veritatis suscipit ullam cupiditate odio unde dolorem tempora blanditiis! 
                                Voluptatibus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde, ea 
                                quisquam reprehenderit dolor est deleniti doloribus
                                eaque veritatis omnis assumenda fuga adipisci in vel? Officia laudantium voluptatem vero ea!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit iste neque dicta quae velit 
                                nobis laborum reprehenderit illum et numquam, unde quo. Officiis quas officia neque excepturi, laboriosam similique.
                            </q>
                        </div>
            {/* <div style="margin-right:auto;margin-left: auto ;display: flex;margin-top: 10vh;">
                <div style="margin: 3%;">
                    <h3 style="font-weight: bolder;">Meraj Ahmed</h3>
                    <p style="font-weight: bold;">Founder & Developer(Internship talk)</p>
                </div>
            </div> */}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default  About;