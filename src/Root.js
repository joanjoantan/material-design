import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PhotoList from './PhotoList'
import TextField from './Textfield'

const Root = () => (
  <Router >
    <Switch>
      <Route exact path="/:id" component={TextField} />
      <Route exact path="textfield" component={TextField} />
      <Route path="/" component={PhotoList}/>
    </Switch>
  </Router>
)

export default Root
