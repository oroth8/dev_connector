import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';

const NavBar = ({
  auth: {
    isAuthenticated,
    loading
  },
  logout
}) => {
  const authLinks = (<ul>
    <li>
      <Link to="/profiles">
        Developers
            </Link>
    </li>
    <li>
      <Link to="/posts">
        Posts
            </Link>
    </li>
    <li>
      <Link to="/dashboard">
        <i className='fas fa-user'></i>
        {" "}
        <span className="hide-sm">Dashboard</span>
      </Link>
    </li>
    <li>
      <a onClick={logout}
        to="!#">
        <i className='fas fa-sign-out-alt'></i>
        {" "}
        <span className="hide-sm">Logout</span>
      </a>
    </li>
  </ul>);
  const guestLinks = (<ul>
    <li>
      <Link to="/profiles">
        Developers
            </Link>
    </li>
    <li>
      <Link to="/register">Regsiter</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>);

  return (<nav className="navbar">
    <h1>
      <Link to="/">
        <i className="text-secnd fas fa-code"></i>
      </Link>
            Dev Connector
        </h1>
    {
      !loading && (<Fragment> {
        isAuthenticated ? authLinks : guestLinks
      }</Fragment>)
    } </nav>);
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, { logout })(NavBar);
