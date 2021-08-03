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
      open: false
    };
  }

  container = React.createRef();
  
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.getNFT();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
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
            <div class="top-right">{token.rarity}</div>
            <div class="bottom-right">{token.price} eth</div>
            <div class="centered">
              <div class="nft-name">{token.name}</div>
              <div class="nft-collection">{token.collection}</div>
            </div>
          <div className="container">
            <button type="button" class="button" onClick={this.handleButtonClick}>
              <img class="nft-card-dropdown" src="https://dsm01pap001files.storage.live.com/y4m2aH5vvtlh3aQJPeag6ziXcXebpt87n9dPZhhTCmNii-nmqNaHt4WwBqstCVWYU-DUUQ0w2AjU_IZjgv-_xC8CqU6-6y-BoHYF1PiGOY8bAyJK-YMTS4_Ky4Bc77UstlCUSH2yEO02cTrPcKfCYgvT9Ld_JhkhfFbR1yKC7KT2oye0ab2EQyY2RHO7YmdncBS?width=64&height=64&cropmode=none"/>
            </button>
            {this.state.open && (
            <div class="dropdown">
              <p>{token.description}</p>
            </div>
          )}
          </div>
        </div>
      );
    }
  }
}

export default Tile;
