import axios from 'axios'

// action constant
const SET_SEARCH_TERM = 'set_search_term'
const ADD_OMDB_DATA = 'add_omdb_data'

// action creators
export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOmdbData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

// async
export function getOMDBData (imdbID) {
  return dispatch => {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then(response => {
        dispatch(addOmdbData(imdbID, response.data))
      })
      .catch(err => {
        console.error('axios error', err)
      })
  }
}

// reducer
const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const assignSearchTerm = (state, action) => {
  return Object.assign({}, state, {
    searchTerm: action.searchTerm
  })
}

const addOmdbDataReducer = (state, action) => {
  const newOMDBData = Object.assign({}, state.omdbData, {[action.imdbID]: action.omdbData})
  return Object.assign({}, state, { omdbData: newOMDBData })
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return assignSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addOmdbDataReducer(state, action)
    default:
      return state
  }
}

export default rootReducer
