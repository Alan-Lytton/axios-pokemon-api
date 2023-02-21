import React, {useEffect, useState} from "react";
import axios from "axios";

const Pokemon = (props) => {
    const [pokemon,setPokemon] = useState({});

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setPokemon(response.data.results)
            })
    },[]);

    return (
        <div className="APP">
            <ol>

                {pokemon.length > 0 && pokemon.map((aPokemon, index)=> {

                    return (<li key={index}>{aPokemon.name}</li>)
                })}
            </ol>

        </div>
    )
}

export default Pokemon