import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'

const AddExp = ({ addExperience, history }) => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <Fragment>
            <h1 className="large text-white">Add An Experience</h1>
            <p className="lead text-white">
                <i className="fas fa-code-branch text-secnd"></i> Add any
        developer/programming positions that you have had in the past
      </p>
            <small className="text-white">* = required field</small>
            <form className="form" onSubmit={e => { e.preventDefault(); addExperience(formData, history) }}>
                <div className="form-group">
                    <input type="text" placeholder="* Job Title" name="title" required value={title} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Company" name="company" required value={company} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4 className="text-white">From Date</h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4 className="text-white">To Date</h4>
                    <input type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div className="form-group">
                    <p className="text-white">
                        <input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                            setFormData({ ...formData, current: !current }); toggleDisabled(!toDateDisabled);

                        }} />{"  "}Current Job
          </p>
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary my-1" />
                <Link className="btn my-1" to="/dashboard">Go Back</Link>
            </form>

        </Fragment>
    )
}

AddExp.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(withRouter(AddExp));
