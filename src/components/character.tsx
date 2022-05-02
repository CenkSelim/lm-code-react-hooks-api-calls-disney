import { DisneyCharacter } from "../disney_character"
import {useFavourites, useFavouritesUpdate} from "../FavouritesContext";

interface CharacterProps{
	character: DisneyCharacter;
}

// for our props we can reuse the DisneyCharacter interface
// - defining an anonymous type that just has one property - a DisneyCharacter
const Character : React.FC<CharacterProps> = ( { character }) => {

  const characterFavourites = useFavourites();
  const updateFavourites = useFavouritesUpdate();
  // Define a default in case the character doesn't have an image
  let imageSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    // API seems to include extra path for images so here we strip it off to fetch raw image	
    imageSrc=character.imageUrl;
    if (character.imageUrl.indexOf('/revision') > -1)
      imageSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
  }

  function toggleFavouriteForCharacter(character : DisneyCharacter) {
    if(!characterFavourites.some(item => item._id === character._id)) {
        // add to favourites
        updateFavourites.setCharacterFavourites([...characterFavourites, character]);
    }
    else {
      // remove from favourites
      const updatedFavourites = characterFavourites.filter((item) => item._id !== character._id);
      updateFavourites.setCharacterFavourites(updatedFavourites);
    }
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={() => toggleFavouriteForCharacter(character)}>
        {!characterFavourites.some(item => item._id === character._id) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="character-item__img" src={imageSrc} alt={character.name} />

    </article>
  )}


export default Character