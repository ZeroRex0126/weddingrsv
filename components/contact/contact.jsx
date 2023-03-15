import styled from "styled-components";

const ContactComp = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .section-title::after {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    right: calc(50% - 80px);
    background: #e47a2e;
  }

  .section-title::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 2px;
    bottom: 11px;
    left: calc(50% - 80px);
    background: #e47a2e;
  }
`;

const Contact = () => {
  return (
    <ContactComp id="contact">
      <div className="container-fluid  py-5" id="contact">
        <div className="container text-center py-5">
          <div className="section-title position-relative text-center">
            <h1 className="font-secondary display-3 ">Thank You</h1>
            <i>♥</i>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#">
              <i className="fab fa-instagram"></i>
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
            &copy;{" "}
            <a className="text-primary" href="#">
              Domain Name
            </a>
            . Designed by <a className="text-primary">HTML Codex</a>
          </p>
        </div>
      </div>
    </ContactComp>
  );
};

export default Contact;
