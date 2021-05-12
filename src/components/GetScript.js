import React from 'react'
import { useEffect } from 'react';

function GetScript() {
    useEffect(() => {
      const script = document.createElement('script');
    
      script.src = ("lastfm.api.md5.js","lastfm.api.js");
      script.async = true;
    
      document.body.appendChild(script);
    
      return () => {
        document.body.removeChild(script);
      }
    }, []);
    return (
      <div>
      </div>
    )
  }
  

export default GetScript;
