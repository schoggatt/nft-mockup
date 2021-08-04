import React, {Component} from 'react';
import "./NavBar.css";

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
        return <nav className={this.state.show ? "active" : "hidden"}>Brawler</nav>;
    }

}

export default NavBar