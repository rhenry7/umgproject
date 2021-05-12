import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, 
} from 'reactstrap';

const Merch = (props) => {
  return (
    <Container className="mb-5">
        <h1>Check out new Merch</h1>

    <Row>
    
    <Col xs="12" sm="4" className="mb-5">
    <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-dark">Cassette Tapes</CardSubtitle>
          
        </CardBody>
      </Card>
      </Col>
        <Col xs="12" sm="4" className="mb-5">
        <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-dark">Apparel</CardSubtitle>
          
        </CardBody>
      </Card>        </Col>
        <Col sm="4" xs="12" className="mb-5"> <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-dark">Vinyl</CardSubtitle>
          
        </CardBody>
      </Card></Col>
      
    
    </Row>
    </Container>
    
  );
};

export default Merch;
