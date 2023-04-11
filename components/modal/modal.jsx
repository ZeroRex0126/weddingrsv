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
        class={`modal fade ${center ? "center" : ""}`}
        id={modalID}
        tabindex="-1"
        role="dialog"
        aria-labelledby={labelID}
        aria-hidden="true"
      >
        <div class="modal-dialog " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id={labelID}>
                {label}
              </h5>
              <button
                type="button"
                class="btn close"
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">{modalBody()}</div>
            {hasFooter ? (
              <div class="modal-footer">
                {hasSubmitBtn ? (
                  <button
                    onClick={submitBtnFunc}
                    id={submitBtnID ? submitBtnID : ""}
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    {submitBtnLabel}
                  </button>
                ) : (
                  <></>
                )}
                <button
                  type="button"
                  class="btn btn-secondary"
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
