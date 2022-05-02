
// our props have two properties - a number, and a function that takes a number and returns void

import { useFavourites, useFavouritesUpdate } from "../FavouritesContext";

// we can define this as an interface, or anonymously like this:
const Navigation : React.FC<{ currentPage: number, setCurrentPage: (page: number) => void }> 
	= ({ currentPage, setCurrentPage }) => 
	{


    const characterFavourites = useFavourites();
    const updateFavourites = useFavouritesUpdate();

    const nextPage = () => {
        const newPageNumber = currentPage + 1;
        setCurrentPage(newPageNumber);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            const newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }
    }

    const favPage = () => {
        console.log(characterFavourites);
        if (currentPage > 1) {
            const newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }
    }

    return (
        <div className="navigation">
            <div className="navigation__item">
                <button className="navigation__button" onClick={prevPage}>Prev Page</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={favPage}>Show Favourites</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={nextPage}>Next Page</button>
            </div>
        </div>

    )
}

export default Navigation;