import { useState } from "react";
import { ReactContainer } from "components";
import RibbonButton from "features/common/react/RibbonButton";

const HomeBtnWrapper = () => {
  const [wasHovering, setWasHovering] = useState(1);

  return (
    <ReactContainer gap={10}>
      <RibbonButton to="/game" hoverId={1} hover={wasHovering} setHover={setWasHovering}>
        Play
      </RibbonButton>
      <RibbonButton to="/how-to-play" hoverId={2} hover={wasHovering} setHover={setWasHovering}>
        How To Play
      </RibbonButton>
      <RibbonButton to="/test" hoverId={3} hover={wasHovering} setHover={setWasHovering}>
        Test
      </RibbonButton>
    </ReactContainer>
  );
};

export default HomeBtnWrapper;
