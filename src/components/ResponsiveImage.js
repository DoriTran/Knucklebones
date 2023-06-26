import { useMemo } from "react";

const ResponsiveImage = ({
  src = "",
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  absolute,
  zIndex,
  bottom,
  top,
  left,
  right,
  alt = "image",
  style,
  ...restProps
}) => {
  const widthStyles = useMemo(() => {
    if (width && width.includes("-"))
      return { minWidth: width.split("-")[0], maxWidth: width.split("-")[1] };
    return { width };
  }, [width]);
  const heightStyles = useMemo(() => {
    if (height && height.includes("-"))
      return { minHeight: height.split("-")[0], maxHeight: height.split("-")[1] };
    return { height };
  }, [height]);

  const styles = {
    ...(absolute && { position: "absolute" }),
    width: "fit-content",
    height: "fit-content",
    objectFit: "cover",
    ...widthStyles,
    ...(minWidth && { minWidth }),
    ...(maxWidth && { maxWidth }),
    ...heightStyles,
    ...(minHeight && { minHeight }),
    ...(maxHeight && { maxHeight }),
    zIndex,
    ...(bottom && { paddingBottom: bottom }),
    ...(top && { paddintTop: top }),
    ...(left && { paddingLeft: left }),
    ...(right && { paddingRight: right }),
    ...style,
  };

  return <img src={src} alt={alt} style={styles} {...restProps} />;
};

export default ResponsiveImage;
