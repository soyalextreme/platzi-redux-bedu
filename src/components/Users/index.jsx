import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDataLoadDataAsync = async () => {
      const responseJson = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responseJson.data);
    };

    fetchDataLoadDataAsync();
  }, []);

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
  );
}

export default Users;
