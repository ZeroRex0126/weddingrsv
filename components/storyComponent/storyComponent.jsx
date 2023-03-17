import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Story = styled.div`
  overflow: hidden;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .yearDis {
    display: none;
  }

  @media (min-width: 768px) {
    .storyDate {
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .yearDis {
      display: flex;
    }
    .timeline::after {
      position: absolute;
      content: "";
      width: 2px;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
      background: rgb(252, 230, 213);
    }

    .timeline .row::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      margin-top: 8%;
      left: calc(50% - 15px);
      background: white;
      border: 2px solid rgb(252, 230, 213);
      transform: rotate(45deg);
      z-index: 1;
    }

    .timeline .row::after {
      content: "♥";
      // font-family: "Font Awesome 5 Free";
      font-weight: 400;
      position: absolute;
      margin-top: 8.2%;
      left: calc(50% - 11px);
      color: rgb(252, 230, 213);
      z-index: 2;
      transform: translate(25%, 0);
    }
  }
`;

const StoryComponent = ({ webSiteSetting }) => {
  return (
    <Story id="story">
      <div className="container-fluid py-5" id="story">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h1 className="font-secondary display-4">Our Love Story</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="container timeline position-relative p-0">
            <div className="row">
              <div className="col-md-6 text-center text-md-right storyDate">
                <Fade direction="left" duration={2000} triggerOnce={true}>
                  <h1 className="yearDis">2019</h1>
                </Fade>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <Fade direction="right" duration={2000} triggerOnce={true}>
                  <div className="h-100 d-flex flex-column justify-content-center p-4 ml-md-3">
                    <h4 className="mb-2">First Meet</h4>
                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                    <p className="m-0">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <Fade direction="left" duration={2000} triggerOnce={true}>
                  <div className="h-100 d-flex flex-column justify-content-center p-4 mr-md-3">
                    <h4 className="mb-2">First Date</h4>
                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                    <p className="m-0">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 text-center text-md-left storyDate">
                <Fade direction="right" duration={2000} triggerOnce={true}>
                  <h1 className="yearDis">2021</h1>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right storyDate">
                <Fade direction="left" duration={2000} triggerOnce={true}>
                  <h1 className="yearDis">2022</h1>
                </Fade>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <Fade direction="right" duration={2000} triggerOnce={true}>
                  <div className="h-100 d-flex flex-column justify-content-center p-4 ml-md-3">
                    <h4 className="mb-2">Proposal</h4>
                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                    <p className="m-0">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <Fade direction="left" duration={2000} triggerOnce={true}>
                  <div className="h-100 d-flex flex-column justify-content-center p-4 mr-md-3">
                    <h4 className="mb-2">Enagagement</h4>
                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                    <p className="m-0">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 text-center text-md-left storyDate">
                <Fade direction="right" duration={2000} triggerOnce={true}>
                  <h1 className="yearDis">2023</h1>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Story>
  );
};

export default StoryComponent;
