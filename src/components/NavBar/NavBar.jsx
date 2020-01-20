import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class NavBar extends Component {

    render() {




        return (
            <>
            <nav className="NavBar">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>


            </>
        )
    }
}

export default NavBar;