import styled from "styled-components";

const ContactComp = styled.div`
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Contact = () => {
  return <ContactComp id="contact">Contact Comp</ContactComp>;
};

export default Contact;
