import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    fact: string.isRequired,
    description: string.isRequired,
    imdbID: string
  },
  render () {
    const { poster, title, year, description, fact, imdbID } = this.props
    return (
      <Link to={`/details/${imdbID}`}>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
            <p>Did you know: {fact}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
