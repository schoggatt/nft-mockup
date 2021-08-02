/* eslint-env jquery */
import React, { Component } from "react";
import "./Tile.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      token: [],
    };
  }

  componentDidMount() {
    this.getNFT();
  }

  getNFT() {
    fetch("http://localhost:3000/" + this.props.tokenId)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            token: data.result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, token } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="nft-card-container">
          <div class="nft-image-container">
            <img class="nft-image" src={token.image}></img>
          </div>
          <div class="nft-text-container">
            <div class="top-right">{token.rarity}</div>
            <div class="centered">
              <div class="nft-name">{token.name}</div>
              <div class="nft-collection">{token.collection}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Tile;
