import React, {Component} from 'react'
import {withRouter} from 'react-router';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Nav } from 'react-bootstrap';

class PlayNowPage extends React.Component{

    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <NavBar/>
                <p>Play Now</p>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(PlayNowPage);