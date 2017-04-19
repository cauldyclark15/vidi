import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ poster, title, year, description, imdbID }) => {
  return (
    <Link to={`/details/${imdbID}`}>
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

ShowCard.propTypes = {
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired
}

export default ShowCard
