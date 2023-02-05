import Head from "next/head";
import styled from "styled-components";

const About = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    .aboutPic {
      background-size: cover;
    }

    .row {
      .position-relative {
        display: block;
      }
      // .groom {
      //   text-align: right;
      // }
      // .bride {
      //   text-align: left;
      // }
      div {
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 0;
        padding-left: 0;

        .btn-square {
          width: 40px;
          height: 40px;
        }

        .btn-sm-square {
          width: 32px;
          height: 32px;
        }

        .btn-lg-square {
          width: 50px;
          height: 50px;
        }

        .btn-square,
        .btn-sm-square,
        .btn-lg-square {
          margin-left: 5px;
          margin-right: 5px;
          text-align: center;
        }

        div {
          width: 100%;
        }
      }
    }
  }
`;

const AboutComponent = ({ webSiteSetting }) => {
  return (
    <About id="aboutContainer">
      <h1>About Bride & Groom</h1>
      <div class="container-fluid py-5" id="about">
        <div class="container py-5">
          <div class="section-title position-relative text-center">
            <h6 class="text-uppercase text-primary mb-3">About</h6>
            <h1 class="font-secondary display-4">Groom & Bride</h1>
            <i class="far fa-heart text-dark"></i>
          </div>
          <div class="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div class="col-md-6 p-0 text-center text-md-right">
              <div class="h-100 d-flex flex-column justify-content-cente p-5 groom">
                <h3 class="mb-3">The Groom</h3>
                <p>
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
                <h3 class="font-secondary font-weight-normal text-muted mb-3">
                  <i class="fa fa-male text-primary pr-3"></i>Jack
                </h3>
                <div class="position-relative">
                  <a class="btn btn-outline-primary btn-square mr-1" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square mr-1" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square mr-1" href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 p-0 aboutPic"
              style={{
                backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
              }}
            ></div>
          </div>
          <div class="row m-0">
            <div
              class="col-md-6 p-0 aboutPic"
              style={{
                backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
              }}
            ></div>
            <div class="col-md-6 p-0 text-center text-md-left">
              <div class="h-100 d-flex flex-column justify-content-cente p-5 bride">
                <h3 class="mb-3">The Bride</h3>
                <p>
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
                <h3 class="font-secondary font-weight-normal text-muted mb-3">
                  <i class="fa fa-female text-primary pr-3"></i>Rose
                </h3>
                <div class="position-relative">
                  <a class="btn btn-outline-primary btn-square mr-1" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square mr-1" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square mr-1" href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </About>
  );
};

export default AboutComponent;
