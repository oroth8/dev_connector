import React, { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? (
        <Spinner />
    ) : (
            <Fragment> <h1 className="large text-white">Dashboard</h1>
                <p className='lead text-white'>
                    <i className='text-secnd fas fa-user'></i> Welcome {user && user.name}
                </p>
                {profile !== null ? <Fragment>Has</Fragment> : <Fragment><p className='text-white'>You have not set up your profile. Please create a profile to access dashboard features.</p>
                    <Link to='/create-profile' className="btn btn-primary my-1">Create Profile</Link>
                </Fragment>}
            </Fragment>
        );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
