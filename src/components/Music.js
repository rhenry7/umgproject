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

function Music(props) {
  //  chart.getTopArtists 
  let apiURL = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3877d3306c429e1047651c55df5d58b4&format=json';

  const [artists, setArtist] = useState([]);

  // lifecycle method that replaces componentDidMount() in class.. in hooks it is useEffect()
  useEffect(() => {
    let mounted = true;
    // assigning error message to display problem with data
    let error = 'there is a problem displaying data';
    // is promised based, handles async request
    axios.get(apiURL)
      .then(response => {
         // console.log(response) // response is logged as an array
        console.log(artists)
        if(mounted) {
          // take the artists array, and get the first artist
          setArtist({ artists: response.data.artists.artist })
          // log first artist to console to test if visible 
          //console.log(artists[0])
        }
      }).catch(error => {
        console.log(error)
      }) // since axios is promise based, will use catch error to identify if there is a problem
    return () => mounted = false;
  }, [])
  console.log(artists[0])
  
  {
    return (
      
      <Container className="mt-5">
          <h1>View Similar Artists</h1>
      <Row>
      <Col xs="6" sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            {artists !== null && <CardSubtitle tag="h6" className="mb-2 text-muted">{artists}</CardSubtitle> }
            <CardText></CardText>
          </CardBody>
        </Card>
        </Col>
        <Col xs="6" sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            {artists !== null && <CardSubtitle tag="h6" className="mb-2 text-muted">[artists[0]]</CardSubtitle> }
            <CardText>{}</CardText>
          </CardBody>
        </Card>
        </Col><Col xs="6" sm="4">
        <Card>
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            {artists !== null && <CardSubtitle tag="h6" className="mb-2 text-muted">[artists[0]]</CardSubtitle> }
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
export default Music;

