import React, { PropTypes } from 'react'

const ShowCard = ({ show }) => {
  const { poster, title, year, description } = show
  return (
    <div className='show-card'>
      <img src={`/public/img/posters/${poster}`} />
      <div>
        <h3>{title}</h3>
        <h4>({year})</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

ShowCard.propTypes = {
  show: PropTypes.object.isRequired
}

export default ShowCard
