import pfp from '../assets/bulbasaur.webp'
import element from '../assets/leaf symbol.jpg'
import bulbasaurSound from '../assets/bulbasaur entry.mp3'
import React, { useState } from 'react';
import gifImage from '../assets/bulbasaur dancing.gif'

function Bulbasaur() {

    const [isHovered, setIsHovered] = useState(false);

    function play(){
        new Audio(bulbasaurSound).play()
    }

    return(
        <span className="pokemon">
            <div className="bulbasaur">
                <h2 className="header">
                    <h2 className="name">BULBASAUR</h2>
                    <img className="element-symbol" src={element} alt="element symbol"></img>
                </h2>

                <img className="bulbasaur-image" src={isHovered ? gifImage : pfp}  alt="Bulbasaur" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                />

                <h3 className="element">Type: Leaf</h3>
                <button onClick = {play} className="description">
                A small, mainly turquoise amphibian Pokémon with red eyes and a green bulb 
                on its back. It is based on a frog/toad, with the bulb resembling 
                a plant bulb that grows into a flower as it evolves. **(CLICK ME)**</button>
            </div>
        </span>
        
    );
}

export default Bulbasaur