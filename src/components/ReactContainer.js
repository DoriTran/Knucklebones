const ReactContainer = ({
  style = {},
  fullScreen,
  horizontal,
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
        width: fullScreen ? "100%" : "auto",
        height: fullScreen ? "100%" : "auto",
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        justifyContent,
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
