import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import InfoCard from "./portalComp/infoCard/infoCard";

const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-rows: 100px 1fr 1fr;
  min-height: 100vh;
  width: 100%;
  padding: 30px 30px;
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

const PortalHome = ({ reservation }) => {
  const [columns, setColumns] = useState([]);
  const [tableData, setTableData] = useState(reservation);

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
    var keys = Object.keys(tableData[0]);
    setColumns(generateColumns(keys));
  }, []);

  function onClick() {
    console.log(tableData);
  }

  //Filtering
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      // <FilterComponent
      //   onFilter={(e) => setFilterText(e.target.value)}
      //   onClear={handleClear}
      //   filterText={filterText}
      // />
      <div>
        <input
          type="text"
          value={filterText}
          onChange={(v) => {
            setFilterText(v.target.value);
          }}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle]);

  //Filtering end

  //selecting table item
  const [selectedRow, setSelectedRow] = useState({});
  const handleRowClick = (row) => {
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
    return reservation.filter((res) => res.attending === "yes").length;
  }
  function getTotalAttendingHeadCounts() {
    let count = 0;
    let comingHeads = reservation.filter((res) => res.attending === "yes");
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
