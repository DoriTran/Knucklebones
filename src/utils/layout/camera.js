const camera = (scene, cornerAxis, offset = 0) => {
  const { width, height } = scene.cameras.main;
  const [corner, axis] = cornerAxis.split(".");

  switch (corner) {
    case "start":
      return offset;
    case "center":
      if (axis === "x") return width / 2 + offset;
      return height / 2 + offset;
    case "end":
      if (axis === "x") return width - offset;
      return height - offset;
    default:
      return 0;
  }
};

export default camera;
