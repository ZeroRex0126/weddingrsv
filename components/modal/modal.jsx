import { useEffect } from "react";

const Modal = ({ modalID, labelID, label, hasFooter, modalBody }) => {
  //to show bootstrap modal
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <div
      class="modal fade"
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
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" class="btn btn-primary">
              Save changes
            </button> */}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
