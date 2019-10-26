import React from 'react';
import Header from './Header';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './Home';

function App() {
  return (
      <div>
          <BrowserRouter>
              <Header />
              <Switch>
                  <Route path="/" exact component={Home} />
              </Switch>
          </BrowserRouter>
      </div>




  );
}

export default App;
