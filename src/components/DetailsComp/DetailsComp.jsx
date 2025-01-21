import styles from "./DetailsComp.module.css";

const DetailsComp = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <details className={styles.test}>
        <summary className={styles.title}>{title}</summary>
        {children}
      </details>
    </div>
  );
};

export default DetailsComp;
