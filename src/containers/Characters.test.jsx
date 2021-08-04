import React from 'react';
import { render, screen } from '@testing-library/react';
import Characters from './Characters';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Avatar Characters Container', () => {
  it('Displays a list of Avatar characters', async () => {
    render(<Router><Characters /></Router>);

    screen.getByText('Loading...');

    const photoUrls = await screen.findAllByRole('img');
    expect(photoUrls).toHaveLength(20);
    expect(photoUrls).toMatchSnapshot();
  });
});