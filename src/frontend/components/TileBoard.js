/* eslint-env jquery */
import React, { Component } from "react";
import "./TileBoard.css";
import Tile from "./Tile.js"

class TileBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            token: [],
            open: false
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }


    render() {
        const { error, isLoaded, token } = this.state;
        return (
            <div>
                <table>
                    <tr>
                        <td><Tile tokenId={0} /></td>
                        <td><Tile tokenId={3} /></td>
                        <td><Tile tokenId={5} /></td>
                    </tr>
                    <tr>
                        <td><Tile tokenId={1} /></td>
                        <td><Tile tokenId={2} /></td>
                        <td><Tile tokenId={4} /></td>
                    </tr>
                </table>
                
            </div>
        );
    }
}

export default TileBoard;