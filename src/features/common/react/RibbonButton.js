import ButtonImg from "assets/images/common/button.png";
import HoverSound from "assets/sounds/common/Hover.mp3";
import EnteringSound from "assets/sounds/common/Entering.mp3";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { Typography } from "components";

const buttonStyle = {
  width: "20vw",
  minWidth: "160px",
  maxWidth: "290px",
  height: "4.48vw",
  minHeight: "40px",
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
  zIndex: 1,
};

const hoverStyle = {
  backgroundImage: `url(${ButtonImg})`,
  color: "#cac6b1",
};

const RibbonButton = ({ to, children, hoverId, hover, setHover }) => {
  const navigate = useNavigate();
  const [playHover] = useSound(HoverSound);
  const [playEntering] = useSound(EnteringSound);

  const buttonStyles = {
    ...buttonStyle,
    ...(!hover || hoverId === hover ? hoverStyle : {}),
  };

  const onMouseEnter = () => {
    playHover();
    setHover?.(hoverId);
  };
  const onMouseLeave = () => {
    setHover?.(hoverId);
  };
  const onClick = () => {
    playEntering();
    console.log("Yo");
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

export default RibbonButton;
