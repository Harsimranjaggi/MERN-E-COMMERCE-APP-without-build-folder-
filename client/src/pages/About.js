import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/ProductDetailsStyles.css"; // Assuming this isn't needed here

const About = () => {
  return (
    <Layout title={"About Us - The Timepiece Gallery"}>
      <div className="container mt-5 about">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="About Us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-md-0">
            <h2 className="mb-4">About The Timepiece Gallery</h2>
            <p className="text-justify">
              Welcome to The Timepiece Gallery, your trusted destination for
              exceptional timepieces! We are a passionate team of watch
              enthusiasts dedicated to bringing you a curated selection of
              high-quality watches and clocks to suit every style and budget.
            </p>
            <p>
              Founded in 2012 , The Timepiece Gallery was
              born from our love for timekeeping instruments and our desire to
              make them accessible to everyone. We believe that a timepiece is
              more than just a functional item; it's a statement piece that
              reflects your personality and style.
            </p>
            <p>
              That's why we offer a diverse range of watches and clocks, from
              classic and timeless designs to modern and trendy styles. We also
              take pride in providing exceptional customer service, ensuring you
              find the perfect timepiece for your needs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
