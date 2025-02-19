import React, { useContext, useState } from "react";
import { DisneyCharacter } from "./disney_character";

interface IFavouritesUpdateContext {
    setCharacterFavourites: React.Dispatch<React.SetStateAction<Array<DisneyCharacter>>>
}

const FavouritesContext = React.createContext<DisneyCharacter[]>( []);
const FavouritesUpdateContext = React.createContext<IFavouritesUpdateContext >(
    {
        setCharacterFavourites: () => { }
    }
);

export const useFavourites = () => {
    return useContext(FavouritesContext);
}

export const useFavouritesUpdate = () => {
    return useContext(FavouritesUpdateContext);
}

const FavouritesProvider:React.FC = ({children}) => {

    const [characterFavourites, setCharacterFavourites] = useState<Array<DisneyCharacter>>([]); 


return (
    <FavouritesContext.Provider value={characterFavourites}>
        <FavouritesUpdateContext.Provider value={{setCharacterFavourites:setCharacterFavourites}}>
            {children} 
        </FavouritesUpdateContext.Provider>
    </FavouritesContext.Provider>
)}


export default FavouritesProvider