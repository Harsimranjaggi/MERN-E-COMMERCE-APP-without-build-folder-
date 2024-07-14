import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {categories.map((c) => (
            <div className="col" key={c._id}>
              <div className="card h-100">
                <Link to={`/category/${c.slug}`} className="btn cat-btn d-flex align-items-center justify-content-center h-100">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
