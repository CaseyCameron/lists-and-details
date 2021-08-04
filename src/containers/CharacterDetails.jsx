import React, { useEffect, useState } from 'react';
import CharacterDetail from '../components/characters/CharacterDetail';
import { fetchCharacterById } from '../services/CharacterFetch';
import { useParams } from 'react-router-dom';

const ListAvatarCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characterDetail, setCharacterDetail] = useState([]);
  const { _id } = useParams();

  useEffect(async () => {
    const characterDetail = await fetchCharacterById(_id);
    setCharacterDetail(characterDetail);
    setLoading(false);
  }, [_id]);

  if (loading) return <h1>Loading...</h1>;
  return <CharacterDetail {...characterDetail} />
}

export default ListAvatarCharacters;