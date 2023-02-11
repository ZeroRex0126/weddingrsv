import styled from "styled-components";
import Input from "../input/input";

const RsvpComp = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 720px;
  }
`;

const RSVP = () => {
  return (
    <RsvpComp id="rsvp">
      <h1>RSVP</h1>
      <div className="container">
        <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
          <div className="col-md-6 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input title="Name" value="" type="text" />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input title="Surname" value="" type="text" />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input title="Amount" value="" type="number" />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input title="Contact Number" value="" type="text" />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input title="Email" value="" type="text" />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input
                title="Attendance"
                value=""
                type="select"
                options={["Yes!!!", "No :("]}
              />
            </div>
          </div>
          <div className="col-md-12 p-0">
            <div className="h-100 d-flex flex-column align-items-center ">
              <Input title="Comment" value="" type="textarea" width={"86%"} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>Clear</button>
        <button>RSVP</button>
      </div>
    </RsvpComp>
  );
};

export default RSVP;
