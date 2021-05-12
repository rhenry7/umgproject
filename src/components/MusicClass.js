import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, 
  } from 'reactstrap';
import axios from 'axios';

class MusicClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
             artists: [],
        }
    }
    
   
    componentDidMount(){
        const apiURL = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3877d3306c429e1047651c55df5d58b4&format=json';

        axios.get(apiURL)
        .then(response => {
            console.log(response.data.artists.artist); // response is logged as an array
           this.setState({ artists: response.data.artists.artist });
        }).catch(error => {
          console.log(error)
          this.setState({errorMsg: "Error retrieving data"})
        }) // since axios is promise based, will use catch error to identify if there is a problem
     
    }

    render() {
        const  { artists, errorMsg } = this.state

        
        
        return (

            
            <div>
         
            <div>
            <h1>Top 10 Artists</h1>

            </div>
            

            <Card className="mb-5">
            {/* <img src="https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid" alt="Responsive image"></img> */}
        
        <CardBody className="mt-0">
        {
                /* 
                the filter method is used to find artist with listeners over a certain amount, 

                the slice method is used to limit to the top artist that have been filtered, 

                the map method takes each individual artist to be rendered in the JSX individually 
                */
            }
          <CardText className="text-dark">{artists.filter(function (e) {
              return e.listeners > 2000000
          }).slice(0,10).map((artist) => (<div>
          <h4>
          {artist.name}
          </h4>
          
          </div>))}
              {console.log(artists)}
              { errorMsg ? <div>{errorMsg}</div> : null}</CardText>
          <Button color="danger">View More</Button>
        </CardBody>
      </Card>
            
          </div>
          
        );
    }
}

export default MusicClass;
