import React from 'react'
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" className="btn">
                <i className="fas fa-user-circle text-secnd"></i> Edit Profile
        </Link>
            <Link to="/add-experience" className="btn">
                <i className="fab fa-black-tie text-secnd"></i> Add Experience
        </Link>
            <Link to="/add-education" className="btn">
                <i className="fas fa-graduation-cap text-secnd"></i> Add Education
        </Link>
        </div>
    )
}

export default DashboardActions;