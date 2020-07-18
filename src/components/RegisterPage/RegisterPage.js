import React, { useState } from "react";
import Joi from "@hapi/joi";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import * as authActions from "../../store/actions/authActions";
import { connect } from "react-redux";

const RegisterPage = (props) => {
  console.log("RegisterPage");

  const [data, setData] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [serverError, setServerError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateFormData = (data) => {
    const schema = Joi.object({
      fullname: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    return schema.validate(data, { abortEarly: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validateFormData(data);
    console.log("Joi Validation", validateFormData(data));

    if (error) {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setErrors(errors);
      return;
    }

    console.log("user-->", data);
    setSaving(true);
    props
      .registerUser(data)
      .then(() => {
        props.history.push("/dashboard");
        toast.success("Successfully logged in", {
          hideProgressBar: true,
        });
      })
      .catch((errorMessage) => {
        if (errorMessage) {
          setServerError(errorMessage);
          setSaving(false);
          toast.error(errorMessage, {
            hideProgressBar: true,
          });
        }
      });
  };

  return (
    <div className="container px-0 mt-4 ml-0 px-0 pb-5 h-100">
      <form onSubmit={handleSubmit} style={{ width: "50%" }}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={data.email}
          />
          {errors.email && (
            <small id="emailHelp" className="form-text text-danger">
              {errors.email}
            </small>
          )}
        </div>
        <div className="form-group has-error">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            placeholder="Enter your full name"
            value={data.fullname}
            onChange={handleChange}
          />
          {errors.fullname && (
            <small id="emailHelp" className="form-text text-danger">
              {errors.fullname}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {errors.password && (
            <small id="emailHelp" className="form-text text-danger">
              {errors.password}
            </small>
          )}
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {!saving ? "Register" : "Registering..."}
          </button>
        </div>
      </form>
      {serverError && <p>{serverError}</p>}
    </div>
  );
};

RegisterPage.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  registerUser: authActions.registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
