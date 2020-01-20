import React, { Component } from 'react';
import imagePlaceholder from '../Home/makeup-small.png';



class Home extends Component {



    render( ) {




        return (
            <div className="BoxContainers">
            <div>
                <p>Micro Blading Services</p>
                <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk"/>
            </div>
            <div>
                <p>Micro Blading + Shading Services</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
            <div>
                <p>Powder Ombre Brows</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
            <div>
                <p>Lip Enhancement / Blusher</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
            <div>
                <p>Eyeliner</p>
                    <img className="imgPlaceholder" src={imagePlaceholder} alt="black and white vector of woman sitting in front of a vanity desk" />
            </div>
            </div>
        )
    }
}

export default Home;