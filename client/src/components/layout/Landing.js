import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }
    return (<section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">Developer Connector</h1>
                <p className="lead">
                    Connect to the world wide web of devs...
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">
                            Sign Up
                        </Link>
                        <Link to="/login" className="btn ">
                            Login
                        </Link>
                    </div>
                </p>
            </div>
        </div>
    </section>);
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated })

export default connect(mapStateToProps)(Landing);
