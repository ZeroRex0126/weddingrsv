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
    .row {
      div {
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 0;
        padding-left: 0;

        .aboutPic {
          background-size: cover;
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
      <div className="container">
        <div className="row">
          {/* py-3 pr-3 pl-3 */}
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <div
              className="aboutPic"
              style={{
                backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
              }}
            ></div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <div>
                <h2>Groom</h2>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <div>
                <h2>Bride</h2>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 ">
            <div
              className="aboutPic"
              style={{
                backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </About>
  );
};

export default AboutComponent;
