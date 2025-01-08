import Squirtle from './Pokemon/Squirtle.jsx'
import Charmander from './Pokemon/Charmander.jsx'
import Bulbasaur from './Pokemon/Bulbasaur.jsx'
import Typhlosion from './Pokemon/Typhlosion.jsx'
import Pikachu from './Pokemon/Pikachu.jsx'
import Header from './Header.jsx'
import './index.css'
import Pokeball from './PokeballRoll.jsx'

function App() {

  return(
  <div className = "background">
      <Header/>
    <hr/>
      <Pokeball/>
    <div className = "cardContainer">
      <Squirtle/>
      <Charmander/>
      <Bulbasaur/>
      <Typhlosion/>
      <Pikachu/>
    </div>
    <h2 className="botText1">HOVER OVER THE IMAGES TO SEE THE POKEMON DANCE!</h2>
    <h2 className="botText2">CLICK ON THE POKEMON'S DESCRIPTION TO HEAR THE POKEDEX!</h2>
  </div>
  );
}


export default App