import { useState } from "react";
import styled from "styled-components";
import Input from "../input/input";
import { Fade } from "react-awesome-reveal";
import CusButton from "../cusButton/cusButton";
import {
  addReservationData,
  findReservationDataByEmail,
} from "../../libs/web-util";
import Modal from "../modal/modal";
import { createRoot } from "react-dom/client";
import { updateReservationData } from "../../libs/web-util";

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

  .errorValidationMessage{
    color: red;
    text-align: center;
    font-weight: 700;
  }
`;

const RSVP = ({ webSiteSetting }) => {
  const [pin, setPin] = useState("");
  const [dataID, setDataID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amount, setAmount] = useState(0);
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [hasPin, setHasPin] = useState(false);
  const [errorOnField, setErrorOnField] = useState(false);
  const [errorOnPin, setErrorOnPin] = useState(false);
  const [completeMessage, setCompleteMessage] = useState("");

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
      } else {
        setDataID("");
        setName("");
        setSurname("");
        setAmount("");
        setContactNo("");
        setAttendance("");
        setMessage("");
      }

      setHasPin(true);
      setErrorOnPin(false);
    } else {
      setErrorOnPin(true);
    }

    btn.replaceChild(temp, btn.childNodes[0]);
  }

  async function submitClicked() {
    if (
      name !== "" &&
      surname !== "" &&
      amount !== "" &&
      contactNo !== "" &&
      email !== "" &&
      attendance !== "" &&
      message !== ""
    ) {
      const btn = document.getElementById("reSubmitBtn");
      var temp = document.createElement("div");
      createRoot(temp).render("ok");

      var spinner = document.createElement("div");
      createRoot(spinner).render(
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );

      btn.replaceChild(spinner, btn.childNodes[0]);

      if (dataID !== "") {
        console.log("existing");
        let res = await updateReservationData({
          _id: dataID,
          name: name,
          surname: surname,
          phoneNr: contactNo,
          email: email,
          attending: attendance,
          amount: parseInt(amount),
          comment: message,
        });
        console.log(res);
        if (res.acknowledged) {
          setCompleteMessage(
            "Your Details has been updated, you can update it again anytime."
          );
        } else {
          setCompleteMessage("An Error has occured please contact organizer.");
        }
      } else {
        console.log("nonee");
        let res = await addReservationData({
          name: name,
          surname: surname,
          phoneNr: contactNo,
          email: email,
          attending: attendance,
          amount: parseInt(amount),
          comment: message,
        });
        console.log(res);
        if (res.acknowledged) {
          setCompleteMessage(
            "Your Details has been added, you can update it again anytime. \n Thank You for your reservation!!!"
          );
        } else {
          setCompleteMessage("An Error has occured please contact organizer.");
        }
      }
      clearOnSubmit();
      setErrorOnField(false);
      btn.replaceChild(temp, btn.childNodes[0]);
      const { Modal } = require("bootstrap");
      const myModal = new Modal("#completeMessage");

      myModal.show();
    } else {
      console.log("sad no data");
      setErrorOnField(true);
    }
  }

  function backButton() {
    setHasPin(false);
  }

  function clearOnSubmit() {
    // console.log(attendance);
    setHasPin(false);
    setDataID("");
    setName("");
    setSurname("");
    setAmount("");
    setContactNo("");
    setAttendance("");
    setMessage("");
    setEmail("");
    setPin("");
  }

  function clearData() {
    setName("");
    setSurname("");
    setAmount("");
    setContactNo("");
    setAttendance("");
    setMessage("");
  }

  function completeModalBody() {
    return (
      <>
        <p>{completeMessage}</p>
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
        modalBody={modalDataMessageBody}
        center={true}
        hasSubmitBtn={true}
        submitBtnFunc={() => {}}
        submitBtnLabel={"save"}
      />

      <Modal
        modalID={"dataMessage"}
        labelID={"dataMessageLabel"}
        label={"Reservation"}
        hasFooter={true}
        modalBody={modalDataMessageBody}
      />
      <Modal
        modalID={"completeMessage"}
        labelID={"completeMessageLabel"}
        label={"Submitted"}
        hasFooter={true}
        modalBody={completeModalBody}
        center={true}
      />
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
          <p className="errorValidationMessage" hidden={!errorOnPin}>
            *Please ensure that its a valid email and correct pin*
          </p>
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
                  disabled={dataID ? false : true}
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
            <p className="errorValidationMessage" hidden={!errorOnField}>
              *Please ensure that all fields are filled up*
            </p>
          </div>
        </div>
        <div className="button-container">
          <CusButton
            title={"Back"}
            clicked={() => {
              backButton();
            }}
          />
          <CusButton
            title={"Clear"}
            clicked={() => {
              clearData();
            }}
          />
          <CusButton
            id="reSubmitBtn"
            title={"Submit"}
            clicked={() => {
              submitClicked();
            }}
          />
        </div>
      </div>
    </RsvpComp>
  );
};

export default RSVP;
