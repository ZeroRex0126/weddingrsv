import styled from "styled-components";

const FamilyComp = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .pic {
    height: 300px;
    background-size: cover;
  }
`;

const Family = ({ webSiteSetting }) => {
  return (
    <FamilyComp id="family">
      <div class="container-fluid py-5" id="family">
        <div class="container pt-5 pb-3">
          <div class="section-title position-relative text-center">
            <h1 class="font-secondary display-4">Groomsmen & Bridesmaid</h1>
            <i class="far fa-heart text-dark"></i>
          </div>
          <div class="row">
            <div class="col-12 text-center mb-2">
              <ul class="list-inline mb-4" id="portfolio-flters">
                <li
                  class="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                  data-filter=".first"
                >
                  Groomsmen
                </li>
                <li
                  class="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                  data-filter=".second"
                >
                  Bridesmaid
                </li>
              </ul>
            </div>
          </div>
          <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div class="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div class="bg-secondary text-center p-4">
                  <h4 class="mb-3">Full Name</h4>
                  <p class="text-uppercase">Best Friend</p>
                  <div class="d-inline-block">
                    <a class="mx-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div class="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div class="bg-secondary text-center p-4">
                  <h4 class="mb-3">Full Name</h4>
                  <p class="text-uppercase">Best Friend</p>
                  <div class="d-inline-block">
                    <a class="mx-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div class="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div class="bg-secondary text-center p-4">
                  <h4 class="mb-3">Full Name</h4>
                  <p class="text-uppercase">Best Friend</p>
                  <div class="d-inline-block">
                    <a class="mx-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div class="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div class="bg-secondary text-center p-4">
                  <h4 class="mb-3">Full Name</h4>
                  <p class="text-uppercase">Best Friend</p>
                  <div class="d-inline-block">
                    <a class="mx-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div class="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div class="bg-secondary text-center p-4">
                  <h4 class="mb-3">Full Name</h4>
                  <p class="text-uppercase">Best Friend</p>
                  <div class="d-inline-block">
                    <a class="mx-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div class="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div class="bg-secondary text-center p-4">
                  <h4 class="mb-3">Full Name</h4>
                  <p class="text-uppercase">Best Friend</p>
                  <div class="d-inline-block">
                    <a class="mx-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="mx-2" href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FamilyComp>
  );
};

export default Family;
