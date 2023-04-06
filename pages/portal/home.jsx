import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import InfoCard from "./portalComp/infoCard/infoCard";
import {
  addReservationData,
  deleteReservationData,
  updateReservationData,
} from "../../libs/web-util";

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
          className="btn btn-primary"
          onClick={() => {
            addData("");
          }}
        >
          Add
        </button>
        <button
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
