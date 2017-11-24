import React from 'react'
import {connect} from 'react-redux'
import { setSearchTerm } from './actionCreators'
import Header from './Header.js'
import Footer from './Footer.js'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <Header className='main-header' />
        <iframe className='video-player' src='https://player.vimeo.com/video/191094791' width='640' height='360' frameBorder='0' webkitallowfullscreen mozallowfullscreen allowFullscreen />
        <div className='about'>
          <img src='./public/img/greenborders.png' className='top-border' />
          <p className='about-text'>The Future is 0 is a satirical, live game show held at Northwest Film Forum featuring artists from different disciplines competing against each other in a battle of mental, physical, & psychological challenges.</p>
          <img src='./public/img/pinkborders.png' className='lower-border' />
        </div>
        <div className='team-logo'>
          <h1 className='team-text'>The <br /> Team</h1>
        </div>
        <div className='team'>
          <img src='./public/img/whiteborder.png' className='team-top-border' />
          <div className='team-border'>
            <ul>
              <li><h1>Claire Buss</h1></li>
              <li><h2>Creator, Host, Writer</h2></li>
              <li><h1>Kat O&#39;Hara</h1></li>
              <li><h2>Creator, Producer</h2></li>
              <li><h1>Amanda K. Pitsch</h1></li>
              <li><h2>Production Designer, Art Director</h2></li>
              <li><h1>Travis Baer</h1></li>
              <li><h2>Chief Technology Officer, Scientist</h2></li>
              <li><h1>Nick Shively</h1></li>
              <li><h2>Graphic, Animation Designer</h2></li>
            </ul>
          </div>
          <img src='./public/img/whiteborder.png' className='team-bottom-border' />
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

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
