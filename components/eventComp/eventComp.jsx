import styled from "styled-components";

const EventsComp = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pic {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    height: 250px;
    width: 300px;
    background-size: cover;
  }

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

  @media (min-width: 768px) {
    .border-right {
      border-right: 2px solid red !important;
    }
  }
`;

const Events = ({ webSiteSetting }) => {
  return (
    <EventsComp id="events">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h1 className="text-uppercase mb-3">Event</h1>
          <h1 className="font-secondary display-4">Our Wedding Event</h1>
          <i>♥</i>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h5 className="font-weight-normal text-muted mb-3 pb-3">
              Clita ipsum aliquyam dolor diam dolores elitr nonumy. Rebum sea
              vero ipsum eirmod tempor kasd. Diam amet lorem erat eos sit lorem
              elitr justo
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
              <div
                className="col-md-6 p-0 pic"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                }}
              />
              <h2 className="mb-3">The Reception</h2>
              <p className="mb-2">123 Street, New York, USA</p>
              <p className="mb-0">12:00AM - 13:00PM</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3">
              <div
                className="col-md-6 p-0 pic"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                }}
              />
              <h2 className="mb-3">Wedding Party</h2>
              <p className="mb-2">123 Street, New York, USA</p>
              <p className="mb-0">12:00AM - 13:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </EventsComp>
  );
};

export default Events;
