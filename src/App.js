import 'bootstrap/dist/css/bootstrap.css';
import Jumbo from './components/Jumbo'
import Navbar from './components/Navbar';
import Merch from './components/Merch';
import Pagination from './components/Pagination';
import Promo from './components/Promo';
import Tours from './components/Tours';
import React, { useEffect, useState } from 'react';
import Music from './components/Music';
import MusicClass from './components/MusicClass';
import Youtube from './components/Youtube';

/* 

GetScript used ReactHelmet to load
the script tag of a lastFM api tool 
that would allow for easier implementation of JSON.
I saved it to ./services folder.

*/

// import GetScript from './services/GetScript';
import './App.css';
import YouTube from './components/Youtube';

function App() {
  return (
   <div className="App-header">
   <header>
   <Navbar className="Spacing"/>
   <Jumbo className="Spacing Title"/>
   {/* <Promo /> */}
   <Merch />
   <Pagination />
   <Tours />
   {/* <Music /> */}
   <MusicClass />
   <YouTube />
   </header>
   </div>
  );
}

export default App;
