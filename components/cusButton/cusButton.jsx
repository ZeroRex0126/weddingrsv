import styled from "styled-components";
import { fontColor, primaryColor } from "../../libs/color";

const CustomButton = styled.div`
  .cusButton {
    background: ${primaryColor};
    color: ${fontColor};
    border: solid 4px ${fontColor};
    cursor: pointer;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding: 5px 15px;
    transition: 0.5s;
    margin: 5px;
  }

  .cusButton:hover {
    background: ${fontColor};
    color: ${primaryColor};
  }
`;

const CusButton = ({ id, title, clicked }) => {
  return (
    <CustomButton
      onClick={() => {
        clicked();
      }}
    >
      <div className="cusButton" id={id ? id : ""}>
        {title}
      </div>
    </CustomButton>
  );
};

export default CusButton;
