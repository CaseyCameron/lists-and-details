import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('Character Detail Component', () => {
  it('Renders a character in detail', () => {
    const { asFragment } = render(
      <CharacterDetail
        name='Analy'
        affiliation='Unnamed team'
        photoUrl='https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201'
        Allies='Riley'
        Enemies=''
      />
    )
    expect(asFragment()).toMatchSnapshot();
  });
});