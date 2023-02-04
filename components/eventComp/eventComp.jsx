import styled from "styled-components";

const EventsComp = styled.div`
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Events = () => {
  return <EventsComp id="events">Events Comp</EventsComp>;
};

export default Events;
