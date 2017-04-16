import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = () => (
  <div className='search'>
    {preload.shows.map((show, i) => {
      return (
        <ShowCard key={i} show={show} />
      )
    })}
  </div>
)

export default Search
