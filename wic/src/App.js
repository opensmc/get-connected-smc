import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </main>
  </div>
)

export default App
