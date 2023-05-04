import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-danger bg-opacity-25 text-center text-white mt-4">
        <div className="container p-4 pb-0">
          <div className="mb-4">
            <Link
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#3b5998"}}
              href="#"
              role="button"
            >
              <FaFacebook></FaFacebook>
            </Link>

            <Link
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#55acee"}}
              href="#"
              role="button"
            >
              <FaTwitter></FaTwitter>
            </Link>

            <Link
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#dd4b39"}}
              href="#"
              role="button"
            >
              <FaGoogle></FaGoogle>
            </Link>

            <Link
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              href="#"
              role="button"
            >
              <FaInstagram></FaInstagram>
            </Link>

            <Link
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#0082ca"}}
              href="#"
              role="button"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#333333"}}
              href="#"
              role="button"
            >
              <FaGithub></FaGithub>
            </Link>
          </div>
        </div>

        <div
          className="text-center p-3 text-dark"
          style={{backgroundColor: "rgba(255, 0, 0, 0.2)"}}
        >
          © 2023 Copyright 
           <Link className="text-primary m-1" href="#">
          Tasty Tortellini
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
