import React from "react";
import {Helmet} from "react-helmet";
 
class MusicScript extends React.Component {
  render () {
    return (
        <div className="musicScript">
            <Helmet>
            <script type="text/javascript" src="lastfm.api.md5.js"></script>
<script type="text/javascript" src="lastfm.api.js"></script>
            </Helmet>
            ...
        </div>
    );
  }
};

export default MusicScript;