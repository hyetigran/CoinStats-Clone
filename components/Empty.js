const Empty = (props) => {
  const iconStyle = {
    color: "#ffffff",
    width: "100%",
    textAlign: "center",
    fontSize: "15rem",
  };
  return (
    <div style={{ margin: "auto" }}>
      <i className="fas fa-archive" style={iconStyle}></i>
      <h2 style={{ textAlign: "center" }}>
        You don't have any coins set as favorite.
      </h2>
    </div>
  );
};

export default Empty;
