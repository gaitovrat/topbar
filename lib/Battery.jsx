import styles from "./styles.jsx";

const render = ({ output }) => {
  const percentage = output.percentage;

  return (
    <div style={{ color: styles.colors.red }}>
        􀋦 {percentage}%
    </div>
  );
};

export default render;
