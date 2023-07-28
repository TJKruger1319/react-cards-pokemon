import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from "uuid";
import pokemon from './pokemonList';

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async (restOfUrl = "") => {
        for (let p of pokemon) {
            if (restOfUrl === p) {
                url = `${url}${restOfUrl}`;
            }
        }
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
      };
    return [cards, addCard]; 
}


export default useAxios;