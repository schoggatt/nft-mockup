import React, { Component } from "react";

class ScrollingList extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }

    // requestData(tokenId)
    // {
    // var xmlhttp = new XMLHttpRequest();
    // var url = 'http://localhost:3000/' + tokenId
    // console.log("URL: " + url)

    // xmlhttp.open("GET", url, false);
    // xmlhttp.send();
    // return xmlhttp.responseText
    // }
  
  
    render() {
      return (
        <div>
            <p>
                Yah Dig
            </p>
        </div>
      );
    }
  }

  export default ScrollingList;