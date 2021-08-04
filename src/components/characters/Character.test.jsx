import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders a character on the home page', () => {
    const { asFragment } = render(
      <Character
        name='Analay'
        affiliation='Unnamed team'
        photoUrl='https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201'
      />
    )
    expect(asFragment()).toMatchSnapshot();
  });
});