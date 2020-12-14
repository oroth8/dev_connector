import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import {register} from '../../actions/auth'
import PropTypes from 'prop-types';


const Register = ({setAlert, register}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match!", "blue");
    } else {
      register({name, email, password})
    }
  };

  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     if (password !== password2) {
  //       console.log("Passwords do not match!");
  //     } else {
  //       const newUser = {
  //         name,
  //         email,
  //         password,
  //       };

  //       try {
  //         const config = {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         };
  //         const body = JSON.stringify(newUser);
  //         const res = await axios.post("/api/users", body, config);
  //         console.log(res.data);
  //       } catch (error) {
  //         console.log(error.response.data);
  //       }
  //     }
  //   };

  return (
    <Fragment>
      <h1 className="large text-white">Sign Up</h1>
      <p className="lead text-white">
        <i className="fas fa-user text-secnd"></i>Create Your Account
      </p>
      <form
        action="dashboard.html"
        className="form"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            // required
          />
          <small className="form-text">
            This site uses Gravatar. Please use an gravatar associated email.
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1 text-white">
        Already have an account?
        <Link className="text-purple" to="/login">
          {"  "}
          Sign In
        </Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, register })(Register);
