import { ReactContainer, ResponsiveImage } from "components";
import HowToPlayTitle from "assets/images/how-to-play/how-to-play-title.png";
import MatchDice from "assets/images/how-to-play/match-dice.png";
import DestoryDice from "assets/images/how-to-play/destroy-dice.png";
import RedBone from "assets/images/how-to-play/red-bone.png";

const CenterHowTo = () => {
  return (
    <>
      <ResponsiveImage src={HowToPlayTitle} width="340px-40%" alt="how-to-play-title" zIndex={1} />
      <ReactContainer fullWidth maxHeight="65vh" overflow="auto" horizontal wrap gap={15}>
        <ResponsiveImage src={MatchDice} width="350px-25%" alt="how-to-play" zIndex={1} />
        <ResponsiveImage
          src={RedBone}
          appearAbove={900}
          maxWidth="7%"
          alt="red-bone"
          zIndex={1}
          bottom="50px"
        />
        <ResponsiveImage src={DestoryDice} width="350px-25%" alt="how-to-play" zIndex={1} />
      </ReactContainer>
    </>
  );
};

export default CenterHowTo;
