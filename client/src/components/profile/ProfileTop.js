import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
    profile: {
        status,
        company,
        location,
        website,
        social,
        user: { name, avatar },
    },
}) => {
    return (
        <div class="profile-top p-2">
            <img src={avatar} class="round-img my-1" alt="Profile" />
            <h1 class="large text-purple">{name}</h1>
            <p class="lead text-primary">
                {status} {company && <span> at {company}</span>}
            </p>
            <p class="text-primary">{location && <span>{location}</span>}</p>
            <div class="icons my-1">
                {website && (
                    <a href={website} class="text-primary" target='_blank' rel='noopener noreferrer'>
                        <i class="fas fa-globe fa-2x"></i>
                    </a>
                )}

                {social && social.twitter && (
                    <a href={social.twitter} class="text-primary" target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>

                )}
                {social && social.facebook && (
                    <a href={social.facebook} class="text-primary" target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                )}

                {social && social.linkedin && (
                    <a href={social.linkedin} class="text-primary" target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                )}

                {social && social.youtube && (
                    <a href={social.youtube} class="text-primary" target='_blank' rel='noopener noreferrer'>
                        <i class='fab fa-youtube fa-2x'></i>
                    </a>
                )}

                {social && social.instagram && (
                    <a href={social.instagram} class="text-primary" target='_blank' rel='noopener noreferrer'>
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                )}
            </div>
        </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileTop;
