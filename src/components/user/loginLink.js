import React, {Component} from 'react';
import {NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class LoginLink extends Component {
  render() {
    let {login} = this.props.userState
    return (
      <NavItem>
        {login.isLogin ?
          <Link className="nav-link" to='/user'>{login.data.firstname} {login.data.lastname}</Link>
          :
          <Link className="nav-link" to='/login'>Login</Link>
        }
      </NavItem>
    )
  }
}


function mapStateToProps({userReducer}) {
  return {
    userState: userReducer
  }
}

export default connect(mapStateToProps)(LoginLink);