import React from 'react'
import {connect} from 'react-redux'
import PressCard from './PressCard'
import Header from './Header.js'
import Footer from './Footer.js'
const {object, arrayOf, shape, string} = React.PropTypes

const PressPage = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    pressCards: arrayOf(shape({
      date: string,
      headline: string,
      publication: string,
      description: string,
      linkToStory: string
    }))
  },

  render () {
    console.log('this.props', this.props)
    return (
      <div className='press-page'>
        <Header className='main-header' />
        <div>
          {this.props.pressCards
            .map((pressCards) => {
              return (
                <PressCard key={this.props.headline} {...pressCards} />
              )
            })}
        </div>
        <Footer className='main-footer' />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(PressPage)
