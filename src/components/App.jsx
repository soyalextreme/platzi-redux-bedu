import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Alejandro",
      email: "alex@mail.com",
      website: "alex.com",
    },
    {
      name: "Juan",
      email: "juan@mail.com",
      website: "juan.com.mx",
    },
  ]);

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr className="padding-2">
            <th>Name:</th>
            <th>Email:</th>
            <th>Enlace:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)  => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
