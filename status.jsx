import parse from "./lib/parse.jsx";
import Error from "./lib/Error.jsx";
import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import styles from "./lib/styles.jsx";

const style = {
  root: {
    backgroundColor: styles.colors.bg,
    top: 0,
    right: 0,
    left: 0,
    position: "fixed",
    display: "flex",
    flexDirection: "row-reverse"
  },
  box: {
    backgroundColor: styles.colors.pink,
    padding: "5px",
    margin: "5px",
    borderRadius: "5px",
    color: styles.colors.white,
    fontSize: styles.fontSize
  }
}

export const refreshFrequency = 10000;

export const command = "./topbar/scripts/status.sh";

export const render = ({ output }) => {
  const data = parse(output);
  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" />
      </div>
    );
  }
  return (
    <div style={style.root}>
      <div style={style.box}>
        <Battery output={data.battery} />
      </div>
      <DateTime output={data.datetime} />
    </div>
  );
};

export default null;
