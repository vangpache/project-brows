import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imagePlaceholder from '../Home/makeup-small.png';



class Home extends Component {



    render( ) {




        return (
            <>
            <div className="BoxContainers">
            <div>
                <p>Micro Blading Services</p>
                <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk"/>
            </div>
            <div>
                <p>Micro Blading + Shading Services</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
                    <Link className="BoxContainerLink" to="/powderombre"><div>
                    <p>Powder Ombre Brows</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
                    </div></Link>
            <div>
                <p>Lip Enhancement / Blusher</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
            <div>
                <p>Eyeliner</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
            </div>


            <div className="BlogContainer">
                <div className="BlogContainer-div">
                <div className="featuredBlogImage">
                    <img src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk"/>
                </div>
                <div className="featuredBlogText">
                        <h2 className="featuredBlogHeading">blog title</h2>
                        <p className="featuredBlog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default Home;