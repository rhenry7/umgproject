/* eslint-disable no-lone-blocks */

// using Axios for handling API
// import axios from 'axios';

// for Fetch, saving API to variable 
// let apiURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=3877d3306c429e1047651c55df5d58b4&format=json' 

// function to access api of LastFM 
// call MusicScript which has the script to make the key work

import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, 
} from 'reactstrap'; //using reactstrap for handling basic UI styling
import MusicScript from '../services/GetTheScript';

import axios from 'axios';
import { useEffect, useState } from 'react'; 


// function getMusic(props){
//   const lastfm = new LastFM({
//     apiKey    : 'f21088bf9097b49ad4e7f487abab981e',
//     apiSecret : '7ccaec2093e33cded282ec7bc81c6fca',
//     cache: cache
//   });
  
//   // lastFM artist saved to variable 
//   let artist = lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
//     /* Use data. */ 
//   }, error: function(code, message){
//     /* Show error message. */
//   }});
  
// }
// getMusic(MusicScript());
// Main music component, takes property of artist variable, saved to card for display to browser 

function YouTube(props) {
  {
    return (
      
      <Container className="mt-5">
          <h1>Youtube Charts</h1>
      <Row>
      <Col xs="12" sm="4" className="mb-3">
        <Card>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">[Youtube[0]]</CardSubtitle> 
            <CardText></CardText>
          </CardBody>
        </Card>
        </Col>
        <Col xs="12" sm="4" className="mb-3">
        <Card>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">[Youtube[1]]</CardSubtitle>
            <CardText>{}</CardText>
          </CardBody>
        </Card>
        </Col><Col xs="12" sm="4" className="mb-3">
        <Card>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">[Youtube[2]]</CardSubtitle>
            <CardText>{}</CardText>
          </CardBody>
        </Card>
        </Col>
      </Row>
      </Container>
    );
  }
};


// export music component, but maybe should export entire thing (including API, Script) ? 
export default YouTube;

