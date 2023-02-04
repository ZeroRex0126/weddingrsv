import styled from "styled-components";

const GalleryComp = styled.div`
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Gallery = () => {
  return <GalleryComp id="gallery">Gallery Comp</GalleryComp>;
};

export default Gallery;
