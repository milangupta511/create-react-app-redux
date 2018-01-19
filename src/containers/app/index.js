import React from 'react';
import { Route, Link,Switch } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Github from '../github'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/github">Github</Link>
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path='/github' component={Github} />
    </Switch>
  </div>
)

export default App
