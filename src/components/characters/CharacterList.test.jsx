import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('Character Detail List Component', () => {
  const list = [
    {
      name: 'Analy',
      affiliation: 'Unnamed team',
      photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201',
      allies: 'Riley',
      enemies: '',
    }
  ]
  afterEach(() => cleanup());
  it('Character List rendering test', () => {
    const { asFragment } = render(
      <MemoryRouter><CharacterList characters={list} /></MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});