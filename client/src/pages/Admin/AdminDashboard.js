import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          <div className="col-md-3 p-4">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-column align-items-center justify-content-center">
              {" "}
              {/* Responsive container */}
              <div
                className="card w-75 p-3 border shadow"
                style={{ maxWidth: "400px" }}
              >
                <div
                  className="card-header text-center"
                  style={{ fontWeight: "bold", fontSize: "1.9rem" }}
                >
                  ADMIN DETAILS
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ fontSize: "1.2rem" }}
                >
                  <li className="list-group-item text-center">
                    Admin Name :- {auth?.user?.name}
                  </li>
                  <li className="list-group-item text-center">
                    Email :- {auth?.user?.email}
                  </li>
                  <li className="list-group-item text-center">
                    Address :- {auth?.user?.address}
                  </li>
                  <li className="list-group-item text-center">
                    Phone no. :- {auth?.user?.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
