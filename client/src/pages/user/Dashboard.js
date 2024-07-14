import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
console.log(auth?.user)
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          {/* Responsive User Menu Column */}
          <div className="col-md-3 col-12 justify-content-center">
            <UserMenu />
          </div>

          {/* Responsive User Details Card */}
          <div className="col-md-9 col-12">
            <div className="card w-100 p-3 border shadow">
              <div className="card-header text-center" style={{ fontWeight: "bold", fontSize: "1.9rem" }}>
                USER DETAILS
              </div>
              <ul className="list-group list-group-flush" style={{ fontSize: "1.2rem" }}>
                <li className="list-group-item text-center">
                  User Name :- {auth?.user?.name}
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
    </Layout>
  );
};

export default Dashboard;
