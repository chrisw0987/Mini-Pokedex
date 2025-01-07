import pfp from '../assets/charmander.png'
import element from '../assets/fire symbol.jpg'
import charmanderSound from '../assets/charmander entry.mp3'
import React, { useState } from 'react';
import gifImage from '../assets/charmander dancing.gif'

function Charmander() {
    const [isHovered, setIsHovered] = useState(false);

    function play(){
        new Audio(charmanderSound).play()
    }

    return(
        <span className="pokemon">
            <div className="charmander">
                <h2 className="header">
                    <h2 className="name">CHARMANDER</h2>
                    <img className="element-symbol" src={element} alt="element symbol"></img>
                </h2>
                
                <img className="charmander-image" src={isHovered ? gifImage : pfp}  alt="Charmander" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                />
                <h3 className="element">Type: Fire</h3>
                <button onClick = {play} className="description">
                If Charmander's healthy, the flame on the tip of 
                its tail will burn strong and won't go out if
                it gets a bit wet. The flame on its tail 
                shows the strength of its life-force. **(CLICK ME)**</button>
            </div>
        </span>
        
    );
}

export default Charmander