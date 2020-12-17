import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile'
import ProfileTop from '../profile/ProfileTop';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({ match, getProfileById, profile: { profile, loading }, auth }) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])
    return (
        <Fragment>
            {profile === null || loading ? <Spinner /> :
                <Fragment>
                    <Link to='/profiles' className='btn btn-primary'>Back to Profiles</Link>
                    {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile' className='btn btn-blue'>Edit Profile</Link>)}
                    <div className='profile-grid my-1'>
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <div class="profile-exp bg-none p-2">
                            <h2 className="text-purple">Experience</h2>
                            {profile.experience.length > 0 ? (<Fragment>
                                {profile.experience.map(experience => (
                                    <ProfileExperience key={experience._id} experience={experience} />
                                ))}
                            </Fragment>) : (<h4>No experience credentials...</h4>)}
                        </div>
                        <div class="profile-edu bg-none p-2">
                            <h2 className="text-purple">Education & Certifications</h2>
                            {profile.education.length > 0 ? (<Fragment>
                                {profile.education.map(education => (
                                    <ProfileEducation key={education._id} education={education} />
                                ))}
                            </Fragment>) : (<h4>No education is listed...</h4>)}
                        </div>
                        {profile.githubusername && (
                            <ProfileGithub username={profile.githubusername} />
                        )}
                    </div>
                </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile);
