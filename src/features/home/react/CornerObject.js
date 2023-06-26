import topLeft from "assets/images/home/top-left.gif";
import botRight from "assets/images/home/bot-right.gif";
import fireCorner from "assets/images/home/fire-corner.gif";
import { ResponsiveImage } from "components";
import { useMemo } from "react";

const CornerObject = ({ corner }) => {
  const source = useMemo(() => {
    switch (corner) {
      case "top-left":
        return topLeft;
      case "bot-right":
        return botRight;
      default:
        return fireCorner;
    }
  });

  const styles = {
    ...(corner.includes("top") && { top: 0 }),
    ...(corner.includes("bot") && { bottom: 0 }),
    ...(corner.includes("left") && { left: 0 }),
    ...(corner.includes("right") && { right: 0 }),
    ...(corner === "bot-left" && { transform: "scaleX(-1) scaleY(-1)" }),
  };

  return (
    <ResponsiveImage src={source} absolute width="150px-25%" height="100px-35%" style={styles} />
  );
};

export default CornerObject;
