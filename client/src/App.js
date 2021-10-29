import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import './App.css';


function App() {
	const [pokemons, setPokemons] = useState([]);

	useEffect( () => {

		const getPokemons =  async (url) => {
			let response = await axios.get(url);
			//console.log(response.data);

			response.data.forEach( async (element) => {
				let pokemon = {
					id: element.id,
					name: element.name,
					avatar: element.dexNumber,
				};
				setPokemons( (pokemons) => [...pokemons, pokemon]);
			})
			
		};

		getPokemons("http://localhost:3001/api/pokemons");

	}, []);


	return (
		<div className="App">
			<h1>Pokedex API</h1>
			<ul className="cards">
				{ 
					pokemons.length === 0 ? 
						( <h3> Cargando...</h3>)
					: 
						(
							pokemons.map( (element, index) => (
								<Pokemon key={index} avatar={element.avatar} name={element.name}/>
							))
						)
				}
			</ul>
			
		</div>
  );
}

export default App;
