import React from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import { Main } from './pages'

function Router() {
  return (
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  )
}

export default Router
