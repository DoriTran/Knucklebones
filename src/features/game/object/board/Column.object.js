import Phaser from "phaser";
import Cell from "./Cell.object";
import Point from "../item/Point.object";

const CELL_COUNT = 3;
const COLUMN_GAP = 15;

class Column extends Phaser.GameObjects.Container {
  constructor(scene, x, y, player) {
    super(scene, x, y);

    /** Background */
    this.background = this.add
      .sprite(0, 0, "image.fit-col")
      .setOrigin(0.5, player === "you" ? 1 : 0);

    // Set the width of the container equal to the width of the background
    this.displayWidth = this.background.width;

    /** Content */
    let verticalPosition = 0;
    this.dicePositions = [];

    // Cells
    for (let i = 0; i < CELL_COUNT; i++) {
      const cell = new Cell(scene, 0, verticalPosition, player);
      this.dicePositions.push(verticalPosition + cell.displayHeight / 2);
      verticalPosition +=
        player === "you" ? -cell.displayHeight - COLUMN_GAP : cell.displayHeight + COLUMN_GAP;
      this.add(cell);
    }

    // Point number
    this.numberText = new Point(scene, 0, verticalPosition, player);
    this.add(this.numberText);

    // Dices
    this.diceFace = Array(6).fill(0);
    this.dices = [];

    // Background
    this.state = "normal";
    this.updateState();

    // Mouse event listeners
    this.setInteractive();
    this.on("pointerover", this.onPointerOver, this);
    this.on("pointerout", this.onPointerOut, this);
  }

  onPointerOver() {
    if (this.dices.length === 3) this.state = "full";
    else this.state = "fit";
    this.updateState();
  }

  onPointerOut() {
    this.state = "normal";
    this.updateState();
  }

  updateState() {
    switch (this.state) {
      case "normal":
        this.background.setVisible(false);
        break;
      case "full":
        this.background.setTexture("image.full-col");
        this.background.setVisible(true);
        break;
      case "fit":
        this.background.setTexture("image.fit-col");
        this.background.setVisible(true);
        break;
      default:
        break;
    }
  }

  setNumber(number) {
    this.numberText.setText(number.toString());
  }

  // addDice(dice) {}

  // removeDice(faceValue) {}

  // destroyDice(faceValue) {
  //   const cell = this.cells.find((cell) => cell.dice && cell.dice.faceValue === faceValue);
  //   if (cell) {
  //     cell.dice.destroy();
  //     cell.dice = null;
  //   }
  // }

  // update() {
  //   const faceValues = this.cells.map((cell) => cell.dice?.faceValue || 0);
  //   const uniqueFaceValues = new Set(faceValues);
  //   let point = 0;

  //   for (const faceValue of uniqueFaceValues) {
  //     const count = faceValues.filter((value) => value === faceValue).length;

  //     if (count === 2) {
  //       point += faceValue * 2;
  //     } else if (count === 3) {
  //       point += faceValue * 3;
  //     }
  //   }

  //   this.setNumber(point);

  //   if (this.cells.length === this.cellCount) {
  //     if (uniqueFaceValues.size === this.cellCount) {
  //       this.state = "full";
  //     } else {
  //       this.state = "fit";
  //     }
  //   } else {
  //     this.state = "normal";
  //   }

  //   this.updateState();
  // }
}

export default Column;
