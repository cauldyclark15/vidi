import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './redux'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }
  handleSearchTermChange (e) {
    this.props.setSearchTerm(e.target.value)
  }
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.history.push('/search')
  }
  render () {
    return (
      <div className='landing'>
        <h1>Vidi</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            value={this.props.searchTerm}
            type='text'
            placeholder='Search'
            onChange={this.handleSearchTermChange}
          />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func
}

Landing.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
})

export default connect(mapStateToProps, actions)(Landing)
