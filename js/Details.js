import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './redux'
import Header from './Header'

class Details extends Component {
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.getOMDBData(this.props.show.imdbID)
    }
  }
  render () {
    const { title, poster, year, description, trailer } = this.props.show
    const imdbRating = this.props.omdbData.imdbRating
    let rating
    if (imdbRating) {
      rating = <h3>{imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }
    return (
      <div className='details'>
        <Header
          showSearch={false}
        />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube.com/embed/${trailer}?rel=0&amp;controls=0amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  show: PropTypes.shape({
    poster: PropTypes.string,
    year: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    trailer: PropTypes.string,
    imdbID: PropTypes.string
  }),
  omdbData: PropTypes.shape({
    imdbRating: PropTypes.string
  }),
  getOMDBData: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  const omdbData = state.omdbData[ownProps.show.imdbID] ? state.omdbData[ownProps.show.imdbID] : {}
  return { omdbData }
}

export default connect(mapStateToProps, actions)(Details)
