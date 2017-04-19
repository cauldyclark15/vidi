/* eslint-env node, jest */
import reducers from './redux'

test('set_search_term', () => {
  let state
  state = reducers({searchTerm: '', omdbData: {}}, {type: 'set_search_term', searchTerm: 'house'})
  expect(state).toEqual({searchTerm: 'house', omdbData: {}})
})

test('@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({searchTerm: '', omdbData: {}})
})

test('add_omdb_data', () => {
  let state
  state = reducers({searchTerm:'',omdbData:{}}, {type:'add_omdb_data',imdbID:'tt3322312',omdbData:{Title:'Daredevil',Year:'2015–',Rated:'TV-MA',Released:'10 Apr 2015',Runtime:'54 min',Genre:'Action, Crime, Drama',Director:'N/A',Writer:'Drew Goddard',Actors:'Charlie Cox, Deborah Ann Woll, Elden Henson, Vincent D\'Onofrio',Plot:'Matt Murdock, with his other senses superhumanly enhanced, fights crime as a blind lawyer by day, and vigilante by night.',Language:'English',Country:'USA',Awards:'Nominated for 5 Primetime Emmys. Another 3 wins & 14 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'8.7',imdbVotes:'250,449',imdbID:'tt3322312',Type:'series',totalSeasons:'3',Response:'True'}})
  expect(state).toEqual({searchTerm:'',omdbData:{tt3322312:{Title:'Daredevil',Year:'2015–',Rated:'TV-MA',Released:'10 Apr 2015',Runtime:'54 min',Genre:'Action, Crime, Drama',Director:'N/A',Writer:'Drew Goddard',Actors:'Charlie Cox, Deborah Ann Woll, Elden Henson, Vincent D\'Onofrio',Plot:'Matt Murdock, with his other senses superhumanly enhanced, fights crime as a blind lawyer by day, and vigilante by night.',Language:'English',Country:'USA',Awards:'Nominated for 5 Primetime Emmys. Another 3 wins & 14 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BNzUwMDEyMTIxM15BMl5BanBnXkFtZTgwNDU3OTYyODE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'8.7',imdbVotes:'250,449',imdbID:'tt3322312',Type:'series',totalSeasons:'3',Response:'True'}}})
})
