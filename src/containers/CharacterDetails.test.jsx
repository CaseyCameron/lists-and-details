import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Character Detail Container', () => {
  it('Character Detail Page rendering test', async () => {
    render(
      <MemoryRouter initialEntries={['/5cf5679a915ecad153ab68d1']}>
        <Route exact path='/:_id'><CharacterDetails /></Route>
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const photoUrl = await screen.findAllByRole('img');
    expect(photoUrl).toHaveLength(1);
    expect(photoUrl).toMatchSnapshot();
  });
});