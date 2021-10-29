import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
	const [pokemons, setPokemons] = useState([]);

	useEffect( () => {

		const getPokemons =  async (url) => {
			let response = await axios.get(url);
			console.log(response.data);
		};

		getPokemons("http://localhost:3001/api/pokemons");

	}, []);


	return (
		<div className="App">
		<h1>Pokedex API</h1>
		</div>
  );
}

export default App;
