import { useEffect, useState } from "react";
import { Input } from "../../components";
import styled from "styled-components";

const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  min-height: 100vh;
  width: 100%;
  .inputContainer {
    grid-column: 1 / 4;
    grid-row: 2 / 5;
  }
`;

const PortalHome = ({ webSiteSetting }) => {
  const [date, setDate] = useState(
    `${webSiteSetting.year}-${webSiteSetting.month}-${webSiteSetting.day}`
  );

  
  return (
    <Home>
      <div className="inputContainer">
        <span>Web Settings</span>
        <Input title="Title" value={webSiteSetting.title} type="text"></Input>
        <Input title="Date" value={date} type="date"></Input>
        <span>image input here</span>
        <Input
          title="Invitation Pin"
          value={webSiteSetting.pin}
          type="password"
        ></Input>
        <span>Location</span>
        <Input
          title="Venue"
          value={webSiteSetting.location.venue}
          type="text"
        ></Input>
        <Input
          title="Street"
          value={webSiteSetting.location.street}
          type="text"
        ></Input>
        <Input
          title="Suburb"
          value={webSiteSetting.location.suburb}
          type="text"
        ></Input>
        <Input
          title="City"
          value={webSiteSetting.location.city}
          type="text"
        ></Input>
        <Input
          title="Province"
          value={webSiteSetting.location.province}
          type="text"
        ></Input>
        <Input
          title="Postal/Zip Code"
          value={webSiteSetting.location.zip}
          type="text"
        ></Input>
        {/* <Link href="/">Back to home</Link> */}
        {/* <button onClick={LogData}>click</button> */}
      </div>

      {/* <div className="previewContainer">
          <Image
            src={`data:image/jpeg;base64,${webSiteSetting.heroimg}`}
            alt="Picture of the author"
            width={800}
            height={500}
          />
          <div className="overlay"></div>
          <Home
            calRemaining={calRemaining}
            webSiteSetting={webSiteSetting}
            remainingTime={remainingTime}
            style={{
              width: "800px",
            }}
          />
        </div> */}
    </Home>
  );
};

export default PortalHome;
