import ButtonImg from "assets/images/common/button.png";
import HoverSound from "assets/sounds/common/Hover.mp3";
import EnteringSound from "assets/sounds/common/Entering.mp3";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useState } from "react";
import { ReactContainer, Typography } from "components";

const buttonStyle = {
  width: "50vw",
  maxWidth: "290px",
  height: "11.2vw",
  maxHeight: "65px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#585858",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "color 0.1s",
  outline: "none",
  border: "none",
  backgroundColor: "black",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const hoverStyle = {
  backgroundImage: `url(${ButtonImg})`,
  color: "#cac6b1",
};

const HomeBtn = ({ to, children, hoverId, hover, setHover }) => {
  const navigate = useNavigate();
  const [playHover] = useSound(HoverSound);
  const [playEntering] = useSound(EnteringSound);

  const buttonStyles = {
    ...buttonStyle,
    ...(hoverId === hover ? hoverStyle : {}),
  };

  const onMouseEnter = () => {
    playHover();
    setHover(hoverId);
  };
  const onMouseLeave = () => {
    setHover(hoverId);
  };
  const onClick = () => {
    playEntering();
    navigate(to);
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Typography fontWeight="600" fontSize="1.4rem">
        {children}
      </Typography>
    </button>
  );
};

const HomeBtnWrapper = () => {
  const [wasHovering, setWasHovering] = useState(1);

  return (
    <ReactContainer gap={10}>
      <HomeBtn to="/game" hoverId={1} hover={wasHovering} setHover={setWasHovering}>
        Play
      </HomeBtn>
      <HomeBtn to="/how-to-play" hoverId={2} hover={wasHovering} setHover={setWasHovering}>
        How To Play
      </HomeBtn>
    </ReactContainer>
  );
};

export default HomeBtnWrapper;
