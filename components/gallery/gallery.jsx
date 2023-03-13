import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const GalleryComp = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .embla{
    --slide-spacing: 1rem;
    --slide-size: 10%;
    --slide-height: 19rem;
    padding: 1.6rem;
  
  .embla__viewport {
    width: 100vw
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    flex-direction: row;
    height: auto;
    margin-left: calc(var(--slide-spacing) * -1);
  }
  .embla__slide {
    height: 260px;
    width: 250px;
    flex: 0 0 var(--slide-size);
    min-width: 0;
    // padding-left: var(--slide-spacing);
    position: relative;
    .slideImg{
      background-size: cover;
      height:100%;
      width:100%;
    }
  }}
`;

const Gallery = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <GalleryComp id="gallery">
      <h1>this is gallery</h1>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
            <div className="embla__slide">
              <div
                className="img-fluid mr-md-3 slideImg"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${props.webSiteSetting.heroimg})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </GalleryComp>
  );
};

export default Gallery;
