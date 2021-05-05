import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
  display: "grid",
  padding: "12px",
  borderRadius: "20px",
  gridAutoFlow: "column",
  gridGap: "20px",
  position: "fixed",
  overflow: "hidden",
  right: "12px",
  top: "12px",
  background: styles.colors.bg,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight
};

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
    <div style={style}>
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
    </div>
  );
};

export default null;
