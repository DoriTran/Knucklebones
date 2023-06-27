import { ReactContainer } from "components";
import CornerObject from "../common/react/CornerObject";
import CenterHowTo from "./react/CenterHowTo";
import GotItButton from "./react/GotItButton";

const HowToPlay = () => {
  return (
    <ReactContainer fullScreen gap={15} style={{ backgroundColor: "black" }}>
      <CornerObject corner="top-left" />
      <CornerObject corner="top-right" />
      <CornerObject corner="bot-left" />
      <CornerObject corner="bot-right" />

      <CenterHowTo />
      <GotItButton />
    </ReactContainer>
  );
};

export default HowToPlay;
