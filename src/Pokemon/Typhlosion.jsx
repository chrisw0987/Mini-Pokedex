import pfp from '../assets/typhlosion.jpg'
import element from '../assets/fire symbol.jpg'
import typhlosionSound from '../assets/typhlosion entry.mp3'
import React, { useState } from 'react';
import gifImage from '../assets/typhlosion dancing.gif'

function Typhlosion() {
    const [isHovered, setIsHovered] = useState(false);

    function play(){
        new Audio(typhlosionSound).play()
    }

    return(
        <span className="pokemon">
            <div className="typhlosion">
                <h2 className="header">
                    <h2 className="name">Typhlosion</h2>
                    <img className="element-symbol" src={element} alt="element symbol"></img>
                </h2>

                <img className="typhlosion-image" src={isHovered ? gifImage : pfp}  alt="Charmander" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                />

                <h3 className="element">Type: Fire</h3>
                <button onClick = {play} className="description">
                Weird furry that likes being near young ones. There is no difference 
                between this abomination and Sean John Combs. Don't let this abomination near 
                young ones or they may end up on the news. **(CLICK ME)**</button>
            </div>
        </span>
    );
}

export default Typhlosion