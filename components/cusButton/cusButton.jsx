import styled from "styled-components";

const CustomButton = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 5px 15px;
  transition: 0.5s;
  border: solid black 4px;
  margin: 5px;
`;

const CusButton = ({ id, title, clicked }) => {
  return (
    <CustomButton
      id={id ? id : ""}
      onClick={() => {
        clicked();
      }}
    >
      {title}
    </CustomButton>
  );
};

export default CusButton;
