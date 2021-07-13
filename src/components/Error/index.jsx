import React from "react";
import { connect } from "react-redux";
import "./index.css";
import * as UserActions from "../../actions/usersActions";

const Error = ({ error }) => {
  return (
    <div className="Error__container">
      <h2 className="Error__message">{error}</h2>
    </div>
  );
};

export default connect((reducers) => reducers.users, UserActions)(Error);
