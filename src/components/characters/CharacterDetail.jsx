import React from 'react';

const CharacterDetail = ({ name, affiliation, allies, enemies, photoUrl }) => {
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>Name: {name}</p>
        <p>Affiliation: {affiliation}</p>
        <p>Allies: {allies}</p>
        <p>Enemies: {enemies}</p>
      </figcaption>
    </figure>
  )
};

export default CharacterDetail;