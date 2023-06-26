import { ReactContainer } from "components";
import CornerObject from "./react/CornerObject";
import CenterTitle from "./react/CenterTitle";
import HomeButton from "./react/HomeButton";

const Home = () => {
  return (
    <ReactContainer fullScreen gap={0} style={{ backgroundColor: "black" }}>
      <CornerObject corner="top-left" />
      <CornerObject corner="top-right" />
      <CornerObject corner="bot-left" />
      <CornerObject corner="bot-right" />

      <CenterTitle />
      <HomeButton />
    </ReactContainer>
  );
};

export default Home;
