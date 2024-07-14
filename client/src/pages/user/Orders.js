import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row flex-nowrap">
          {/* Responsive Navigation */}
          <div className="col-md-3 col-sm-12 d-flex flex-column align-items-stretch overflow-auto">
            <UserMenu />
          </div>

          {/* Order Details */}
          <div className="col-md-9 col-sm-12">
            <h1 className="text-center">All Orders</h1>
            {orders.map((o, i) => (
              <div className="order-item border shadow rounded mb-3" key={o._id}>
                <table className="table table-striped table-responsive">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        #
                      </th>
                      <th scope="col" className="text-center">
                        Status
                      </th>
                      <th scope="col" className="text-center">
                        Buyer
                      </th>
                      <th scope="col" className="text-center">
                        Date
                      </th>
                      <th scope="col" className="text-center">
                        Payment
                      </th>
                      {/* <th scope="col" className="text-center">
                        Quantity
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {o.products.map((p, i) => (
                      <tr key={p._id}>
                        <td className="text-center">{i + 1}</td>
                        <td className="text-center">{o.status}</td>
                        <td className="text-center">{o.buyer?.name}</td>
                        <td className="text-center">
                          {moment(o.createAt).fromNow()}
                        </td>
                        <td className="text-center">
                          {o.payment.success ? "Success" : "Failed"}
                        </td>
                        {/* <td className="text-center">{o.products?.length}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="order-products">
                  {o.products.map((p, i) => (
                    <div
                      className="product-card row mb-2 p-3 card flex-row rounded"
                      key={p._id}
                    >
                      <div className="col-md-4 col-sm-12">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top img-fluid"
                          alt={p.name}
                        />
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <p className="text-center">{p.name}</p>
                        <p className="text-center">
                          {p.description.substring(0, 30)}...
                        </p>
                        <p className="text-center">Price: {p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
