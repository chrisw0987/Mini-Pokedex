import pokeball from './assets/pokeball.webp'
import React, { useState } from 'react';


function Pokeball() {    

    return(
        <>
        <div className="centering">
            <img className="ballImage" src={pokeball}/>
        </div>
        </>
    );

}

export default Pokeball