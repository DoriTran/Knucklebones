import { ResponsiveImage } from "components";
import DiceTitle from "assets/images/home/dice-title.png";
import Title from "assets/images/home/title.gif";
import Bone from "assets/images/home/bone.png";
import Description from "assets/images/home/description.gif";

const ThreeDice = () => {
  return (
    <>
      <ResponsiveImage src={DiceTitle} width="250px-40%" alt="dice-title" zIndex={1} />
      <ResponsiveImage src={Title} width="350px-75%" alt="Knucklebones" zIndex={1} />
      <ResponsiveImage src={Bone} width="7%" alt="Bone" zIndex={1} />
      <ResponsiveImage
        src={Description}
        width="200px-25%"
        alt="Description"
        zIndex={1}
        bottom="7vh"
      />
    </>
  );
};

export default ThreeDice;
