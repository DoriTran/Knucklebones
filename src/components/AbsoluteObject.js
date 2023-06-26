const AbsoluteObject = ({ comp: Comp = "div", style = {}, children, ...restProps }) => {
  return (
    <Comp style={{ ...style, position: "absolute" }} {...restProps}>
      {children}
    </Comp>
  );
};

export default AbsoluteObject;
