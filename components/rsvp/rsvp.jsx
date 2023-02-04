import styled from "styled-components";

const RsvpComp = styled.div`
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const RSVP = () => {
  return <RsvpComp id="rsvp">RSVP Comp</RsvpComp>;
};

export default RSVP;
