import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import Watchlist from './Watchlist';
import { Watched } from './Watched';
import { Add } from './Add';
import './index.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      movie: this.props.movie
    }
  }
  componentDidMount() {

  }
  render () {
  return (

      <Router>
        <Header />
        <Switch>

          <Route exact path='/watchlist'>
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
    );
  }
}
export default App;
