import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Search from './Search'
import Landing from './Landing'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
