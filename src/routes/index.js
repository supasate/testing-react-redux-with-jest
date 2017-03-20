import React from 'react'
import { Route } from 'react-router-dom'
import App from '../components/App'
import Login from '../components/Login'

const Routes = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
  </div>
)

export default Routes
