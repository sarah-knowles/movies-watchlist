import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Watchlist } from './Components/Watchlist';
import { Watched } from './Components/Watched';
import { Add } from './Components/Add';
import GlobalProvider from './context/GlobalState';
import './index.css';



function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Switch>

        <Route exact path='/'>
          <Watchlist />
        </Route>

        <Route path='/watched'>
          <Watched />
        </Route>

        <Route path='/add'>
          <Add />
        </Route>

      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
