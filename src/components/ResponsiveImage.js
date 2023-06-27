import { useEffect, useMemo, useState } from "react";

const DisplayDivive = 500;

const ResponsiveImage = ({
  src = "",

  // Width and Height
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,

  // Spacing
  bottom,
  top,
  left,
  right,

  // Display
  appearAbove, // width in number of pixels
  appearBelow, // width in number of pixels
  desktop,
  mobile,

  // Status
  absolute,
  zIndex,

  // Other properties
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
  const [displayStyles, setDisplayStyles] = useState({});

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const rules = { display: "none" };

    if (appearAbove && screenWidth < appearAbove) setDisplayStyles(rules);
    else if (appearBelow && screenWidth > appearBelow) setDisplayStyles(rules);
    else if (desktop && screenWidth < DisplayDivive) setDisplayStyles(rules);
    else if (mobile && screenWidth > DisplayDivive) setDisplayStyles(rules);
    else setDisplayStyles({});
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => handleResize(), [appearAbove, appearBelow, desktop, mobile]);

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
    ...displayStyles,
    ...style,
  };

  return <img src={src} alt={alt} style={styles} {...restProps} />;
};

export default ResponsiveImage;
