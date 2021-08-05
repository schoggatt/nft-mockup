import React, {Component} from 'react'
import {withRouter} from 'react-router';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TileBoard from '../components/TileBoard';
import { Nav } from 'react-bootstrap';

class MarketplacePage extends React.Component{

    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <NavBar/>
                <TileBoard/>
                <p>Marketplace</p>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(MarketplacePage);