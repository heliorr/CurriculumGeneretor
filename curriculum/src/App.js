import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Profissional from './pages/Profissional';
import Curriculum from './pages/Curriculum';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/personal" component={ Personal } />
          <Route exact path="/profissional" component={ Profissional } />
          <Route exact path="/curriculum" component={ Curriculum } />
          <Route path="/*" component={ NotFound } />
        </Switch>
      </Provider>
    );
}

export default App;
