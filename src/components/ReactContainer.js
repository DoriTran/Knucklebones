const ReactContainer = ({
  style = {},
  fullScreen,
  fullWidth,
  fullHeight,
  maxWidth,
  maxHeight,
  overflow,
  horizontal,
  wrap,
  justifyContent = "center",
  alignItems = "center",
  gap = "25px",
  children,
  ...restProps
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: fullScreen || fullWidth ? "100%" : "auto",
        height: fullScreen || fullHeight ? "100%" : "auto",
        maxWidth,
        maxHeight,
        overflow,
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        justifyContent,
        flexWrap: wrap ? "wrap" : "no-wrap",
        alignItems,
        gap,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default ReactContainer;
