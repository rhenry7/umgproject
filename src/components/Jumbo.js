import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="mb-5 text-center" >
        <h1 className="display-1 font-weight-bold joe-artist" >JOE THE ARTIST</h1>
        <p className="lead"> Donec molestie hendrerit mi ut viverra. Morbi a hendrerit leo. </p>
        <hr className="ml-4" />
        <p>Get the new single, January 15th, 2055</p>
        <p className="lead">
          <Button className="mb-4" color="danger">Subscribe</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
