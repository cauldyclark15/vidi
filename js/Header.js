import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './redux'

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (e) {
    this.props.setSearchTerm(e.target.value)
  }
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        value={this.props.searchTerm}
        type='text'
        placeholder='Search'
        onChange={this.handleSearchTermChange}
      />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            Vidi
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  showSearch: PropTypes.bool,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
})

export default connect(mapStateToProps, actions)(Header)
