import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ _id, name, affiliation, photoUrl }) => {
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{affiliation}</p>
        <p>{_id && <Link to={`/${_id}`}>Details</Link>}</p>
      </figcaption>
    </figure>
  )
};

export default Character;