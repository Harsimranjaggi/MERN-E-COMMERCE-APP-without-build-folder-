import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useAuth();

  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/users"); // Assuming /api/v1/auth/users is the endpoint
      setUsers(data.users); // Use response.data
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    if (auth?.token) getUsers();
  }, [auth?.token]);

  return (
    <Layout>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          <div className="col-md-3 p-4">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column align-items-center justify-content-center">
              {users?.length > 0 && ( // Check if users has data
                <div className="card w-75 p-3 border shadow" style={{ maxWidth: "400px" }}>
                  <div className="card-header text-center" style={{ fontWeight: "bold", fontSize: "1.9rem" }}>
                    All Users
                  </div>
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    {users.map((user) => (
                      <div className="accordion-item" key={user._id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapse-${user._id}`}
                            aria-expanded="false"
                            aria-controls={`flush-collapse-${user._id}`}
                          >
                            {user.name}
                          </button>
                        </h2>
                        <div
                          id={`flush-collapse-${user._id}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {/* Add user details here (e.g., name, email, role, etc.) */}
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Address: {user.address}</p>
                            {/* Add any other user details you want to display */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
