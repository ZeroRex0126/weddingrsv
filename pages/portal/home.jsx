import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import InfoCard from "./portalComp/infoCard/infoCard";
import {
  addReservationData,
  deleteReservationData,
  updateReservationData,
} from "../../libs/web-util";
import Modal from "../../components/modal/modal";
import Input from "../../components/input/input";

const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-rows: 100px 1fr 1fr;
  min-height: 100vh;
  width: 100%;
  padding: 30px 30px;

  .dbFunc {
    gap: 2px;
    display: inline-flex;
    .filterBox {
      input {
        width: 8.3em;
      }
      .input-group-append button {
        position: absolute;
      }
    }
  }
  .dataTableContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1 / 4;
    grid-row: 2 / 5;
    width: 100%;
    .dt {
      height: 100%;
      max-width: 100%;
      width: 100%;
    }
  }
`;

const PortalHome = ({ GetData, reservation }) => {
  const [columns, setColumns] = useState([]);
  const [tableData, setTableData] = useState(reservation);
  const [selectedRow, setSelectedRow] = useState({});
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = useState("");

  // modal values
  const [dataID, setDataID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [amount, setAmount] = useState(0);
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [errorOnField, setErrorOnField] = useState(false);
  // end of modal value

  async function deleteSelectedData(data) {
    await deleteReservationData(data);
    await GetData();
  }

  async function updateSelectedData(data) {
    await updateReservationData(data);
    await GetData();
  }

  async function addData(data) {
    await addReservationData("");
    await GetData();
  }

  function generateColumns(keys) {
    var columns = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "_id" && key !== "comment") {
        columns.push({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          selector: (row) => row[key],
          sortable: true,
        });
      }
    }
    return columns;
  }

  useEffect(() => {
    if (tableData.length > 0) {
      var keys = Object.keys(tableData[0]);
      setColumns(generateColumns(keys));
    }
  }, [tableData]);

  useEffect(() => {
    setTableData(reservation);
    setSelectedRow({});
  }, [reservation]);

  function onClick() {
    console.log(tableData);
  }

  //Filtering

  // modal

  function inputModalBody() {
    return (
      <>
        <p>
          <div className="container">
            <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
              <div className="col-md-6 p-0">
                <div className="h-100 d-flex flex-column align-items-center ">
                  <Input
                    width="auto"
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
                    width="auto"
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
                    width="auto"
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
                    width="auto"
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
                    width="auto"
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
                    width="auto"
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
        </p>
      </>
    );
  }
  // end of modal

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setTableData(reservation);
        setFilterText("");
      }
    };

    return (
      <div className="dbFunc">
        <button
          data-bs-toggle="modal"
          data-bs-target="#inputModal"
          className="btn btn-primary"
          onClick={() => {
            addData("");
          }}
        >
          Add
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#inputModal"
          className="btn btn-primary"
          disabled={!selectedRow._id}
          onClick={() => {
            updateSelectedData(selectedRow);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          disabled={!selectedRow._id}
          onClick={() => {
            deleteSelectedData(selectedRow);
          }}
        >
          Delete
        </button>
        <div className="filterBox">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Name"
              value={filterText}
              onChange={(v) => {
                setFilterText(v.target.value);
                setTableData(
                  reservation.filter((data) =>
                    data.name
                      .toUpperCase()
                      .includes(v.target.value.toUpperCase())
                  )
                );
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleClear}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }, [selectedRow, filterText, resetPaginationToggle]);

  //Filtering end

  //selecting table item

  const handleRowClick = async (row) => {
    setSelectedRow(row);
  };
  //end of selecting table item

  //custom styles

  const conditionalRowStyles = [
    {
      when: (row) => row._id === selectedRow._id,
      style: {
        backgroundColor: "#EEE",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];
  //end custom styles

  //custom methods
  function getTotalReservaion() {
    return reservation.length;
  }
  function getTotalAttending() {
    return reservation.filter((res) =>
      res.attending.toUpperCase().includes("YES")
    ).length;
  }
  function getTotalAttendingHeadCounts() {
    let count = 0;
    let comingHeads = reservation.filter((res) =>
      res.attending.toUpperCase().includes("YES")
    );
    for (let i = 0; i < comingHeads.length; i++) {
      const comingHead = comingHeads[i];

      count = count + comingHead.amount;
    }
    return count;
  }
  //end of custom methods

  return (
    <Home>
      {/* <div>total {getTotalReservaion()}</div>
      <div>attending {getTotalAttending()}</div>
      <div>total head counts {getTotalAttendingHeadCounts()}</div> */}
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#inputModal"
        data-bs-backdrop="false"
      >
        Launch demo modal
      </button> */}
      <Modal
        modalID={"inputModal"}
        labelID={"input"}
        label={"Input"}
        hasFooter={true}
        modalBody={inputModalBody}
        center={true}
        hasSubmitBtn={true}
        submitBtnFunc={() => {}}
        submitBtnLabel={"save"}
      />
      <div>
        <InfoCard title={"Total"} count={getTotalReservaion()} />
      </div>
      <div>
        <InfoCard title={"Attending"} count={getTotalAttending()} />
      </div>
      <div>
        <InfoCard title={"Head Counts"} count={getTotalAttendingHeadCounts()} />
      </div>
      <div className="dataTableContainer">
        <div className="dt">
          <DataTable
            title="Reservation List"
            columns={columns}
            data={tableData}
            highlightOnHover
            pointerOnHover
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            onRowClicked={handleRowClick}
            conditionalRowStyles={conditionalRowStyles}
          />
        </div>
      </div>
    </Home>
  );
};

export default PortalHome;
