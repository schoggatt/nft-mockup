import React, {Component} from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom'

class NavBar extends React.Component{

    constructor()
    {
        super();
        this.state = {
            show:true,
            scrollPos: 0
        }
    }

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
    };

    render()
    {
        console.log(this.state)
        return <nav className={this.state.show ? "active" : "hidden"}>
            <Link to="/">Brawler</Link>
            <ul id="nav-bar-items">
                <Link to="/marketplace"><li>Marketplace</li></Link>
                <Link to="/collection"><li>Collection</li></Link>
                <Link to="play"><li>Play Now</li></Link>
            </ul>
        </nav>;
    }

}

export default NavBar