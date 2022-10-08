import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
    // Call Backend
    console.log("Submit");
  };

  validate = () => {
    const errors = {};
    if (this.state.username.trim() === "")
      errors.username = "Username is required.";
    if (this.state.password.trim() === "")
      errors.password = "Password is required.";
    //setState
    this.setState({ errors });

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //setState
    this.setState({ state });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="my-2">
              UserName
            </label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="my-2">
              Password
            </label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
