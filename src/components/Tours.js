import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, 
  } from 'reactstrap';

class Tours extends Component {
    render() {
        return (
            <Container className="mt-5 mb-5">
            <h1>Tour Dates</h1>
    
        <Row>
        
        <Col xs="4 " sm="4">
        <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5" className="text-dark">Australia</CardTitle>
              <CardText className="text-dark">March 2021</CardText>
              
            </CardBody>
          </Card>
          </Col>
            <Col xs="4" sm="4">
            <Card>
            <CardImg top width="100%" src="https://images.pexels.com/photos/2067048/pexels-photo-2067048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5" className="text-dark">Japan</CardTitle>
              <CardText className="text-dark">November 2021</CardText>   
            </CardBody>
          </Card>        </Col>
            <Col sm="4" xs="4"> <Card>
            <CardImg top width="100%" src="https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5" className="text-dark">Brazil</CardTitle>
              <CardText className="text-dark">July 2022</CardText>
            </CardBody>
          </Card></Col>
          
        
        </Row>
        </Container>
        );
    }
}

export default Tours
