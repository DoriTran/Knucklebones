import { ReactContainer } from "components";
import CornerObject from "../common/react/CornerObject";

const HowToPlay = () => {
  return (
    <ReactContainer fullScreen gap={0} style={{ backgroundColor: "black" }}>
      <CornerObject corner="top-left" />
      <CornerObject corner="top-right" />
      <CornerObject corner="bot-left" />
      <CornerObject corner="bot-right" />
    </ReactContainer>
  );
};

export default HowToPlay;
