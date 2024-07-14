import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-light mt-5 mb-5 pt-5 pb-3 pl-3 pr-3 rounded">
        <div className="container d-flex flex-column">
          <div className="d-flex  flex-column flex-md-row justify-content-around align-items-center">
            <div className="d-flex flex-column align-items-center mb-3 mb-md-0 ">
              <SiTrustpilot />
              <h1 className="mb-0">Truspilot</h1>
            </div>

            <div className="d-flex flex-column align-items-center  mb-3 mb-md-0 ">
              <a href="#">Política de privacidad</a>

              <Link className="" to="/about">
                Sobre nosotros
              </Link>

              <Link className="" to="/contact">
                Contacto
              </Link>
            </div>

            <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
              <a
                className="mb-2"
                href="https://www.linkedin.com/in/javier-paredes-v%C3%A9lez-610825155/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} color="#0077b5" />
              </a>
              <a
                href="https://github.com/javierjpv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} color="#000000" />
              </a>
            </div>
          </div>
          <div className="mt-5 pt-5 d-flex justify-content-center justify-content-md-start">
            <p>&copy; 2024 Your Note. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
