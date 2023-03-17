import { useState } from "react";
import styled from "styled-components";
import Input from "../input/input";
import { Fade } from "react-awesome-reveal";
import CusButton from "../cusButton/cusButton";

const RsvpComp = styled.div`
  overflow: hidden;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
  }

  .hide {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }

  .show {
    height: auto;
    visibility: visible;
    opacity: 1;
  }

  .rsvp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1.5s ease;
  }

  .container {
    max-width: 720px;
  }

  .button-container {
    display: flex;
  }
`;

const RSVP = ({ hasPin, setHasPin }) => {
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amount, setAmount] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");

  function setEmpty() {
    setName("");
    setSurname("");
    setAmount("");
    setContactNo("");
    setEmail("");
    setAttendance("");
    setMessage("");
  }

  return (
    <RsvpComp id="rsvp">
      <h1>RSVP</h1>
      <div className={`rsvp ${hasPin ? "hide" : "show"}`}>
        <Fade direction="up" duration={2000} triggerOnce={true}>
          <Input
            title="Pin"
            type="text"
            value={pin}
            onKeyPress={(e) => {
              if (e.key.toUpperCase() === "ENTER") {
                setHasPin(pin);
              }
            }}
            onValueChange={(e) => {
              setPin(e.target.value);
            }}
          />
          <CusButton
            title={"ok"}
            clicked={() => {
              setHasPin(pin);
            }}
          />
        </Fade>
      </div>
      <div className={`rsvp ${hasPin ? "show" : "hide"}`}>
        <div className="container">
          <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Name"
                  type="text"
                  value={name}
                  onValueChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Surname"
                  value={surname}
                  type="text"
                  onValueChange={(e) => {
                    setSurname(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Amount"
                  value={amount}
                  type="number"
                  onValueChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Contact Number"
                  value={contactNo}
                  type="text"
                  onValueChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Email"
                  value={email}
                  type="text"
                  onValueChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Attendance"
                  value={attendance}
                  type="select"
                  options={["Yes!!!", "No :("]}
                  onValueChange={(e) => {
                    setAttendance(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-12 p-0">
              <div className="h-100 d-flex flex-column align-items-center ">
                <Input
                  title="Message"
                  value={message}
                  type="textarea"
                  width={"86%"}
                  onValueChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <CusButton
            title={"Clear"}
            clicked={() => {
              setEmpty();
            }}
          />
          <CusButton title={"Submit"} clicked={() => {}} />
        </div>
      </div>
    </RsvpComp>
  );
};

export default RSVP;
