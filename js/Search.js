import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import ShowCard from './ShowCard'

class Search extends Component {
  render () {
    const { shows } = this.props
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {shows
            .filter(show => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
            })
            .map(show => <ShowCard key={show.imdbID} {...show} />
            )}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })),
  searchTerm: PropTypes.string
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
})

export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
