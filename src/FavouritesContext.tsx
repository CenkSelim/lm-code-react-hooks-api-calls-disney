import React, { useContext, useState } from "react";

interface IFavouritesUpdateContext {
    setCharacterFavourites: React.Dispatch<React.SetStateAction<Array<number>>>
}

const FavouritesContext = React.createContext<number[]>( []);
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

    const [characterFavourites, setCharacterFavourites] = useState<Array<number>>([]); 


return (
    <FavouritesContext.Provider value={characterFavourites}>
        <FavouritesUpdateContext.Provider value={{setCharacterFavourites:setCharacterFavourites}}>
            {children} 
        </FavouritesUpdateContext.Provider>
    </FavouritesContext.Provider>
)}


export default FavouritesProvider