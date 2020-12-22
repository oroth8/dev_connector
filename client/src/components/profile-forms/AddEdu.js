import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'

const AddEdu = ({ addEducation, history }) => {

    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <Fragment>
            <h1 className="large text-white">Add You Education</h1>
            <p className="lead text-white">
                <i className="fas fa-code-branch text-secnd"></i> Add any
        school or bootcamp that you have attended.
      </p>
            <small className="text-white">* = required field</small>
            <form className="form" onSubmit={e => { e.preventDefault(); addEducation(formData, history) }}>
                <div className="form-group">
                    <input type="text" placeholder="* School or Bootcamp" name="school" required value={school} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Degree or Certificate" name="degree" required value={degree} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Field of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)} />
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

                        }} />{"  "}Currently Attending
          </p>
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary my-1" />
                <Link className="btn my-1" to="/dashboard">Go Back</Link>
            </form>

        </Fragment>
    )
}

AddEdu.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEdu));
