import React from "react";
import styles from "../styles/CtaButton.module.css";

type CtaButtonProps = {
  label: string;
};

const CtaButton: React.FC<CtaButtonProps> = ({ label }) => (
  <button className={styles.ctaButton}>{label}</button>
);

export default CtaButton;
