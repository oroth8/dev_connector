import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteExperience } from '../../actions/profile'


const Exp = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (

        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
            </td>
            <td>
                <button
                    className="btn btn-primary"
                    onClick={() => deleteExperience(exp._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2 text-white">Experience Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-purple'>Company</th>
                        <th className='hide-sm text-purple'>Title</th>
                        <th className='hide-sm text-purple'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody className='text-white'>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Exp.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Exp);
