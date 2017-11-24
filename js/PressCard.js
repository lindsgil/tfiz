import React from 'react'
const { string } = React.PropTypes

const PressCard = React.createClass({
  propTypes: {
    date: string.isRequired,
    headline: string.isRequired,
    publication: string.isRequired,
    description: string.isRequired,
    linkToStory: string.isRequired
  },

  render () {
    const {date, headline, publication, description, linkToStory} = this.props

    return (
      <div className='press-card'>
        // <img src={`/public/img/posters/`} />
        <div>
          <h3>{date}</h3>
          <h4>{publication}</h4>
          <h4>({headline})</h4>
          <p>{description}</p>
          <p>{linkToStory}</p>
        </div>
      </div>
    )
  }
})

export default PressCard
