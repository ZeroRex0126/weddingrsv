import styled from "styled-components";

const Story = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoryComponent = () => {
  return (
    <Story id="story">
      <h1>Story of the Weds</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Neque gravida in
        fermentum et sollicitudin ac orci. Dignissim cras tincidunt lobortis
        feugiat vivamus at augue. Convallis convallis tellus id interdum velit.
        Amet nisl suscipit adipiscing bibendum est. Lectus quam id leo in vitae
        turpis massa sed elementum. Egestas pretium aenean pharetra magna ac
        placerat vestibulum lectus. Pellentesque elit eget gravida cum sociis
        natoque penatibus. Aliquet enim tortor at auctor. At tempor commodo
        ullamcorper a lacus vestibulum sed arcu non. Ut faucibus pulvinar
        elementum integer enim neque volutpat. Ut faucibus pulvinar elementum
        integer enim neque volutpat ac. Viverra justo nec ultrices dui. Diam ut
        venenatis tellus in metus vulputate eu scelerisque. Amet est placerat in
        egestas erat imperdiet sed euismod nisi. Id aliquet risus feugiat in
        ante metus dictum. Odio eu feugiat pretium nibh ipsum consequat nisl.
        Orci ac auctor augue mauris augue neque gravida. At varius vel pharetra
        vel turpis nunc eget lorem. Fermentum leo vel orci porta. Vitae proin
        sagittis nisl rhoncus mattis. Enim ut tellus elementum sagittis vitae
        et. Hac habitasse platea dictumst quisque sagittis purus sit amet.
        Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eget
        lorem dolor sed viverra ipsum nunc aliquet bibendum. Consectetur purus
        ut faucibus pulvinar elementum integer enim neque volutpat. Vitae tempus
        quam pellentesque nec nam aliquam. Velit egestas dui id ornare. Massa id
        neque aliquam vestibulum. Arcu felis bibendum ut tristique et egestas
        quis. Volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque.
      </div>
    </Story>
  );
};

export default StoryComponent;
