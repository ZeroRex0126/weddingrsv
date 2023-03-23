import { useState } from "react";
import { Input } from "../../components";

const PortalHome = ({ webSiteSetting }) => {
  const [date, setDate] = useState(
    `${webSiteSetting.year}-${webSiteSetting.month}-${webSiteSetting.day}`
  );
  return (
    <div>
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
    </div>
  );
};

export default PortalHome;
