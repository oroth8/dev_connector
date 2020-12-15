import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteEducation, deleteExperience } from '../../actions/profile'


const Edu = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (

        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
                {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
            </td>
            <td>
                <button
                    className="btn btn-primary"
                    onClick={() => deleteEducation(edu._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2 text-white">Education Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-purple'>School</th>
                        <th className='hide-sm text-purple'>Degree</th>
                        <th className='hide-sm text-purple'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody className='text-white'>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Edu.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(Edu);
