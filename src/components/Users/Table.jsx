import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./lib";

const Table = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <div>
        <table className="table">
          <thead>
            <tr className="padding-2">
              <th>Name:</th>
              <th>Email:</th>
              <th>Enlace:</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Table);
