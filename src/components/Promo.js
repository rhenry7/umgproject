import React from 'react';
import { Jumbotron, Container,   Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col,  } from 'reactstrap';

const Promo = (props) => {
  return (
    <div>
    <div>
      <Jumbotron className="fluid-promo p-3">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      </Jumbotron>
    </div>
  </div>
  );
};

export default Promo;