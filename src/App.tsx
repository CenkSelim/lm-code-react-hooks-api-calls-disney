
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CharacterContainer from './components/character_container';
import Navigation from './components/navigation';
import { DisneyCharacter } from './disney_character';
import axios from 'axios';
import FavouritesProvider from './FavouritesContext';

const App : React.FC = () => {

	const [currentPage, setCurrentPage] = useState<number>(1);

  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  const getCharacters = async (pageNumber : number) => {
    try {
      // Utilised Axios for API calls
      const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
      setCharacters(apiResponse.data.data);
    } catch (error) {
      // dunmy error character
      const dummyCharaters:DisneyCharacter[] = [
        {
        "_id":0,
        "imageUrl":"",
        "name":"error in calling disney api"
      }];
      setCharacters(dummyCharaters);
    }
  };

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <FavouritesProvider>
      <div className="page">
        <Header currentPage={currentPage} />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <CharacterContainer characters={characters} />
      </div>
    </FavouritesProvider>
  );
}

export default App;
