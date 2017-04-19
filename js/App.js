import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import AsyncRoute from './AsyncRoute'
import store from './store'
import preload from '../public/data.json'
if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Route
          exact
          path='/'
          component={props => <AsyncRoute
            props={props}
            loadingPromise={System.import('./Landing')} />} />
        <Route
          path='/search'
          component={props => <AsyncRoute
            props={Object.assign({ shows: preload.shows }, props)}
            loadingPromise={System.import('./Search')} />}
        />
        <Route
          path='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter(show => props.match.params.id === show.imdbID)
            return <AsyncRoute
              props={Object.assign({ show: shows[0] }, props)}
              loadingPromise={System.import('./Details')} />
          }}
        />
      </div>
    </Provider>
  )
}

export default App
