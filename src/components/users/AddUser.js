import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "../KErrorMessage";

const validationSchema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email(),
  phone: yup.number().required(),
  website: yup.string().url(),
});

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    alert("Add User");
    navigate(`/`);
    // if (!formik.handleSubmit()) {
    //   navigate(`/user/add`);
    // } else {
    //   await axios.post("http://localhost:3003/users", user);
    //   alert("Add User");
    //   navigate(`/`);
    // }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
          }}
          onSubmit={(e) => onSubmit(e)}
        >
          {({ e }) => (
            <form>
              <div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
                <KErrorMessage name="name" />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter Your Username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter Your E-mail Address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={phone}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  placeholder="Enter Your Website Name"
                  name="website"
                  value={website}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button className="btn btn-primary btn-block mt-2">
                Add User
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUser;
