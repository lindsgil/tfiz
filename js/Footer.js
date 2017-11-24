import React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <ul>
          <li><div className='footer-logo' /></li>
        </ul>
        <h1 className='phone-number'>
          1-844-666-TFIZ
        </h1>
        <ul className='menu'>
          <li><img src='././public/img/u45.png' className='footer-social-media' /></li>
        </ul>
      </footer>
    )
  }
}

const {func} = React.PropTypes
Footer.propTypes = {
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Footer)
