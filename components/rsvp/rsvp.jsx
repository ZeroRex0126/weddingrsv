import { useState } from "react";
import styled from "styled-components";
import Input from "../input/input";
import { Fade } from "react-awesome-reveal";
import CusButton from "../cusButton/cusButton";
import { findReservationDataByEmail } from "../../libs/web-util";
import Modal from "../modal/modal";
import { createRoot } from "react-dom/client";

const RsvpComp = styled.div`
  overflow: hidden;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    height 10vh;
  }

  .hide {
    height: 0px;
    visibility: hidden;
    opacity: 0;
  }

  .show {
    height:auto;
    min-height: 70vh;
    visibility: visible;
    opacity: 1;
  }

  .rsvp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease;
  }

  .container {
    max-width: 720px;
  }

  .button-container {
    display: flex;
  }

  .spinner-grow {
    --bs-spinner-width: 1em;
    --bs-spinner-height: 1em;
  }
`;

const RSVP = ({ webSiteSetting }) => {
  const [pin, setPin] = useState("");
  const [dataID, setDataID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amount, setAmount] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [hasPin, setHasPin] = useState(false);

  async function findReservationData(email) {
    let resData = await findReservationDataByEmail(email);
    return resData;
  }

  async function validatePin(pin, email) {
    const btn = document.getElementById("pinOkBtn");
    var temp = document.createElement("div");
    createRoot(temp).render("ok");

    var spinner = document.createElement("div");
    createRoot(spinner).render(
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );

    btn.replaceChild(spinner, btn.childNodes[0]);
    if (pin === webSiteSetting.pin && email) {
      let data = await findReservationData(email);
      if (data._id) {
        setDataID(data._id);
        setName(data.name);
        setSurname(data.surname);
        setAmount(data.amount);
        setContactNo(data.phoneNr);
        setEmail(data.email);
        setAttendance(data.attending);
        setMessage(data.comment);
        const { Modal } = require("bootstrap");
        const myModal = new Modal("#dataMessage");

        myModal.show();
      }

      setHasPin(true);
    }

    btn.replaceChild(temp, btn.childNodes[0]);
  }

  function setEmpty() {
    setName("");
    setSurname("");
    setAmount("");
    setContactNo("");
    setAttendance("");
    setMessage("");
  }

  function testClick() {
    // console.log(attendance);
    setHasPin(!hasPin);
    setName("");
    setSurname("");
    setAmount("");
    setContactNo("");
    setAttendance("");
    setMessage("");
  }

  function modalBody() {
    return (
      <>
        <p>This is a modal message</p>
      </>
    );
  }

  function modalDataMessageBody() {
    return (
      <>
        <p>Reservation Data Found, you can edit your datas here.</p>
      </>
    );
  }

  return (
    <RsvpComp id="rsvp">
      {/* modal */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Launch demo modal
      </button>
      <Modal
        modalID={"myModal"}
        labelID={"test"}
        label={"Test Modal"}
        hasFooter={true}
        modalBody={modalBody}
      />

      <Modal
        modalID={"dataMessage"}
        labelID={"dataMessageLabel"}
        label={"Reservation"}
        hasFooter={true}
        modalBody={modalDataMessageBody}
      />
      <button onClick={() => testClick()}>click me </button>
      <h1>RSVP</h1>
      <div className={`rsvp ${hasPin ? "hide" : "show"}`}>
        <Fade direction="up" duration={2000} triggerOnce={true}>
          <Input
            title="Email"
            value={email}
            type="text"
            onKeyPress={(e) => {
              if (e.key.toUpperCase() === "ENTER") {
                validatePin(pin, email);
              }
            }}
            onValueChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            title="Pin"
            type="password"
            value={pin}
            onKeyPress={(e) => {
              if (e.key.toUpperCase() === "ENTER") {
                validatePin(pin, email);
              }
            }}
            onValueChange={(e) => {
              setPin(e.target.value);
            }}
          />
          <CusButton
            id="pinOkBtn"
            title={"ok"}
            clicked={() => {
              validatePin(pin, email);
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
                  disabled={true}
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
                  options={["Yes", "No"]}
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
          {/* <CusButton
            title={"Clear"}
            clicked={() => {
              setEmpty();
            }}
          /> */}
          <CusButton title={"Submit"} clicked={() => {}} />
        </div>
      </div>
    </RsvpComp>
  );
};

export default RSVP;
