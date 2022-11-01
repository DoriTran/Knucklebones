// React
import { useState } from 'react'

// Dice resources
import NormalOne from "../Resources/Dices/Normal/1.png";
import NormalTwo from "../Resources/Dices/Normal/2.png";
import NormalThree from "../Resources/Dices/Normal/3.png";
import NormalFour from "../Resources/Dices/Normal/4.png";
import NormalFive from "../Resources/Dices/Normal/5.png";
import NormalSix from "../Resources/Dices/Normal/6.png";

import DoubleOne from "../Resources/Dices/Double/1.png";
import DoubleTwo from "../Resources/Dices/Double/2.png";
import DoubleThree from "../Resources/Dices/Double/3.png";
import DoubleFour from "../Resources/Dices/Double/4.png";
import DoubleFive from "../Resources/Dices/Double/5.png";
import DoubleSix from "../Resources/Dices/Double/6.png";

import TripleOne from "../Resources/Dices/Triple/1.png";
import TripleTwo from "../Resources/Dices/Triple/2.png";
import TripleThree from "../Resources/Dices/Triple/3.png";
import TripleFour from "../Resources/Dices/Triple/4.png";
import TripleFive from "../Resources/Dices/Triple/5.png";
import TripleSix from "../Resources/Dices/Triple/6.png";

import BreakOne from "../Resources/Dices/Death/1.png";
import BreakTwo from "../Resources/Dices/Death/2.png";
import BreakThree from "../Resources/Dices/Death/3.png";
import BreakFour from "../Resources/Dices/Death/4.png";
import BreakFive from "../Resources/Dices/Death/5.png";
import BreakSix from "../Resources/Dices/Death/6.png";

// Custom hook → useDice
const useDice = () => {
    const [dice, setDice] = useState({
        1: {normal: NormalOne, double: DoubleOne, triple: TripleOne, break: BreakOne},
        2: {normal: NormalTwo, double: DoubleTwo, triple: TripleTwo, break: BreakTwo},
        3: {normal: NormalThree, double: DoubleThree, triple: TripleThree, break: BreakThree},
        4: {normal: NormalFour, double: DoubleFour, triple: TripleFour, break: BreakFour},
        5: {normal: NormalFive, double: DoubleFive, triple: TripleFive, break: BreakFive},
        6: {normal: NormalSix, double: DoubleSix, triple: TripleSix, break: BreakSix},
    })  

    return dice
}

export default useDice