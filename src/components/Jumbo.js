import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="mb-5 text-center" >
        <h1 className="display-1 font-weight-bold joe-artist" >JOE THE ARTIST</h1>
        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mauris nibh. Aliquam erat volutpat. </p>
        <hr className="ml-4" />
        <h4 className="mb-4">Get the new single, out now</h4>
        <p className="lead">
          <Button className="mb-4 btn-sm" color="danger">Download</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
