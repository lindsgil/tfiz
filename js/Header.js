import React from 'react'
import { connect } from 'react-redux'
// import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {

  handlePressClick (event) {
    event.preventDefault()
    this.context.router.transitionTo('/pressPage')
  }

  render () {
    return (
      <header>
        <ul>
          <li><img src='././public/img/future_sticky_u1.png' className='header-logo' /></li>
        </ul>
        <h1>
          <Link to='/'>
            Hot Content!
          </Link>
        </h1>
        <ul className='menu'>
          <li><a href='https://nwfilmforum.org/events/future-is-zero/' className='header-ticket' target='_blank'>TICKETS</a></li>
          <li><a href='http://thefutureis0.bigcartel.com/' className='header-merch' target='_blank'>MERCH</a></li>
          <li><Link to='/pressPage' onClick={this.handlePressClick} className='header-press'>PRESS</ Link></li>
          <li><a href='https://nwfilmforum.org/events/future-is-zero/' className='header-vids' target='_blank'>VIDS</a></li>
          <li><a href='https://nwfilmforum.org/events/future-is-zero/' className='header-past-shows' target='_blank'>HALL OF FAME</a></li>
        </ul>
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

Header.contextTypes = {
  router: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
