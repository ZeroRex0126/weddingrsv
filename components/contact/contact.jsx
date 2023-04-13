import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { fontColor, lineColor, primaryColor } from "../../libs/color";

const ContactComp = styled.div`
  overflow: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  color: ${fontColor};
  .section-title::after {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    right: calc(50% - 80px);
    background: ${lineColor};
  }

  .section-title::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    left: calc(50% - 80px);
    background: ${lineColor};
  }
`;

const Contact = () => {
  return (
    <ContactComp id="contact">
      <div className="container-fluid  py-5" id="contact">
        <div className="container text-center py-5">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <div className="section-title position-relative text-center">
              <h1 className="font-secondary display-3 ">Thank You</h1>
              <i>♥</i>
            </div>
            <div className="d-flex justify-content-center mb-4">
              {/* <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <FaFacebookF />
              </a>
              {/* <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a> */}
              <a
                className="btn btn-lg btn-outline-light btn-lg-square"
                href="#"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="d-flex justify-content-center py-2">
              <p className="" href="#">
                info@example.com
              </p>
              <span className="px-3">|</span>
              <p className="" href="#">
                +012 345 6789
              </p>
            </div>
            <p className="m-0">
              &copy; <a className="text-primary">Domain Name</a>. Designed by{" "}
              <a className="text-primary">KSites</a>
            </p>
          </Fade>
        </div>
      </div>
    </ContactComp>
  );
};

export default Contact;
