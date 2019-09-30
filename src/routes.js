import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sign from './pages/Sign';
import Congratulations from './pages/Congratulations';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/congratulations" component={Congratulations} />
      </Switch>
    </BrowserRouter>
  );
}
