const PhaserContainer = ({ id = 0, style = {}, children }) => {
  return (
    <div id={id} style={{ position: "relative", ...style }}>
      {children}
    </div>
  );
};

export default PhaserContainer;
