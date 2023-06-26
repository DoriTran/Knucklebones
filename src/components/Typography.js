const Typography = ({ children, fontSize = "25px", fontWeight = "normal" }) => {
  const styles = {
    fontFamily: "ComicNeue",
    fontSize,
    fontWeight,
  };

  return <span style={styles}>{children}</span>;
};

export default Typography;
