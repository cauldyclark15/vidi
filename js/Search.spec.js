/* eslint-env node, jest */
import React from 'react'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Provider } from 'react-redux'
import store from './store'
import * as actions from './redux'
import Search, { Unwrapped as UnwrappedSearch } from './Search'
import { MemoryRouter } from 'react-router-dom'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
// import renderer from 'react-test-renderer'

// test('Search snapshot test', () => {
//   const component = renderer.create(<Search />)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('Search snapshot test shallow', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<UnwrappedSearch searchTerm='' shows={preload.shows} />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  store.dispatch(actions.setSearchTerm(searchWord))
  const component = render(<Provider store={store}><MemoryRouter><Search shows={preload.shows} /></MemoryRouter></Provider>)
  const showCount = preload.shows.filter(show => {
    return `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  }).length
  expect(component.find('.show-card').length).toEqual(showCount)
  // const component = shallow(<UnwrappedSearch />)
  // component.find('input').simulate('change', {target: { value: searchWord }}) // simulate a search operation, this fake typing 'house' on search text field
})
