import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/CharacterFetch';

const ListAvatarCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default ListAvatarCharacters;