import React, { useEffect, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as UserActions from "../../actions/usersActions";
import Spinner from "../Spinner";
import Error from "../Error";
import Table from "./Table";
import { mapStateToProps } from "./lib";

function Users({ users, error, loading, setUsers, setError }) {
  const userEffectFetchInitial = useRef(() => {
    const fetchUsersAsync = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        setUsers([]);
        setError(error.message);
      }
    };

    fetchUsersAsync();
  });

  useEffect(() => {
    userEffectFetchInitial.current();
  }, [userEffectFetchInitial]);

  return (
    <>
      {error && <Error />}
      {loading && <Spinner />}
      {!loading && !error ? <Table /> : null}
    </>
  );
}

export default connect(mapStateToProps, UserActions)(Users);
