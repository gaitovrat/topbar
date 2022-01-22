import styles from './styles.jsx'

const style = {
  box: {
    backgroundColor: styles.colors.pink,
    padding: "5px",
    margin: "5px",
    borderRadius: "5px",
    color: styles.colors.white,
    fontSize: styles.fontSize
  }
}

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div style={{ display: "flex" }}>
      <div style={style.box}>{output.date}</div>
      <div style={style.box}>{output.time}</div>
    </div>
      // <div style={style.box}>{output.date}</div>
      // &nbsp;
    // </div>
  );
};

export default render;
