import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item mt-2">name: {user.name}</li>
        <li className="list-group-item mt-2">user name: {user.username}</li>
        <li className="list-group-item mt-2">email: {user.email}</li>
        <li className="list-group-item mt-2">phone: {user.phone}</li>
        <li className="list-group-item mt-2">website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
