import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div>
      <span style={{ color: styles.colors.yellow }}>􀉉 {output.date}</span>
      &nbsp;
      <span style={{ color: styles.colors.blue }}>􀐬 {output.time}</span>
    </div>
  );
};

export default render;
