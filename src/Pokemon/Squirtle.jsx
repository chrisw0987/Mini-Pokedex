import pfp from '../assets/squirtle.jpg'
import element from '../assets/water symbol.png'
import squirtleSound from '../assets/squirtle entry.mp3'
import React, { useState } from 'react';
import gifImage from '../assets/squirtle dancing.gif'

function Squirtle() {
    const [isHovered, setIsHovered] = useState(false);

    function play(){
        new Audio(squirtleSound).play()
    }

    return(
        <span className="pokemon">
            <div className="squirtle">
                <h2 className="header">
                    <h2 className="name">SQUIRTLE</h2>
                    <img className="element-symbol" src={element} alt="element symbol"></img>
                </h2>
                <img className="squirtle-image" src={isHovered ? gifImage : pfp}  alt="Squirtle" 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                    />
                    
                <h3 className="element">Type: Water</h3>
                <button onClick = {play} className="description"> 
                    Its rounded shape and the grooves on its surface minimize resistance 
                    in water, enabling it to swim at high speeds. It shelters itself in its shell, 
                    then strikes back with spouts of water at every opportunity. **(CLICK ME)**</button>
            </div>
        </span>
    );
}

export default Squirtle