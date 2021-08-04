import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterDetails from '../../containers/CharacterDetails';
import ListAvatarCharacters from '../../containers/Characters';

export default function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Avatar Characters Home</Link>
        <Switch>
          <Route exact path='/' component={ListAvatarCharacters} />
          <Route exact path='/:_id' component={CharacterDetails} />
        </Switch>
      </div>
    </Router>
  );
}
