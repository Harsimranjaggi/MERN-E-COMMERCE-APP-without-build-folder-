import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/ProductDetailsStyles.css";


const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Contact Us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Have any questions or need information about our products? Feel free
            to reach out to us anytime. We're available 24/7 to assist you.
          </p>
          <div className="contact-info mt-4">
            <p>
              <BiMailSend /> :{" "}
              <a href="mailto:help@TheTimepieceGallery.com">help@TheTimepieceGallery.com</a>
            </p>
            <p>
              <BiPhoneCall /> :{" "}
              <a href="tel:012-3456789">012-3456789</a>
            </p>
            <p>
              <BiSupport /> :{" "}
              <a href="tel:1800-0000-0000">1800-0000-0000 (Toll Free)</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
