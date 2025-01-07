import pfp from '../assets/pikachu.avif'
import element from '../assets/electric symbol.png'
import pikachuSound from '../assets/pikachu entry.mp3'
import React, { useState } from 'react';
import gifImage from '../assets/pikachu dancing.gif'

function Pikachu() {
    const [isHovered, setIsHovered] = useState(false);

    function play(){
        new Audio(pikachuSound).play()
    }

    return(
        <span className="pokemon">
            <div className="pikachu">
                <h2 className="header">
                    <h2 className="name">PIKACHU</h2>
                    <img className="element-symbol" src={element} alt="element symbol"></img>
                </h2>

                <img className="pikachu-image" src={isHovered ? gifImage : pfp}  alt="Pikachu" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                />

                <h3 className="element">Type: Electricity</h3>
                <button onClick = {play} className="description">
                This Pokémon has electricity-storing pouches on 
                its cheeks. They are electrically charged
                at night as Pikachu sleeps. 
                It can discharges electricity. **(CLICK ME)**
                </button>
            </div>
        </span>
    );
}

export default Pikachu