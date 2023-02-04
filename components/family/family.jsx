import styled from "styled-components";

const FamilyComp = styled.div`
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Family = () => {
  return <FamilyComp id="family">Gallery Comp</FamilyComp>;
};

export default Family;
