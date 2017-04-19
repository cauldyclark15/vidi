import React, { Component, PropTypes } from 'react'

class AsyncRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  componentDidMount () {
    this.props.loadingPromise.then(module => {
      this.component = module.default
      this.setState({ loaded: true })
    })
  }
  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      return <h1>Loading...</h1>
    }
  }
}

AsyncRoute.propTypes = {
  props: PropTypes.object,
  loadingPromise: PropTypes.object
}

export default AsyncRoute
