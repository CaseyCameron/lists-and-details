import React from 'react';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character
        {...character}
      />
    </li>
  ));
  return <ul>{characterElements}</ul>;
};

export default CharacterList;