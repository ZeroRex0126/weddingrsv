import { useEffect } from "react";
import styled from "styled-components";
const ModalComp = styled.div`
  .show.center {
    display: flex !important;
    align-items: center;
    height: 100%;
    .modal-dialog {
      width: 100%;
    }
  }

  .show {
    z-index: 9999999;
  }
`;

const Modal = ({
  modalID,
  labelID,
  label,
  hasFooter,
  modalBody,
  center,
  hasSubmitBtn,
  submitBtnFunc,
  submitBtnLabel,
  submitBtnID,
}) => {
  //to show bootstrap modal
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <ModalComp>
      <div
        className={`modal fade ${center ? "center" : ""}`}
        id={modalID}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={labelID}
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={labelID}>
                {label}
              </h5>
              <button
                type="button"
                className="btn close"
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{modalBody()}</div>
            {hasFooter ? (
              <div className="modal-footer">
                {hasSubmitBtn ? (
                  <button
                    onClick={submitBtnFunc}
                    id={submitBtnID ? submitBtnID : ""}
                    type="button"
                    className="btn btn-primary"
                  >
                    {submitBtnLabel}
                  </button>
                ) : (
                  <></>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ModalComp>
  );
};

export default Modal;
