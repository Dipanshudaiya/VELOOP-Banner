import React from 'react';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusDescription Component
 * Single Responsibility: Render the banner's descriptive subtitle with gold highlighted text
 */
const BonusDescription = ({
  line1 = "Log In Daily, Collect",
  highlight1 = "Rewards",
  line2 = "and Keep Your",
  highlight2 = "Streak Alive!"
}) => {
  return (
    <p className={styles.heroDescriptionText}>
      {line1} <strong className={styles.goldText}>{highlight1}</strong>,
      <br />
      {line2} <strong className={styles.goldText}>{highlight2}</strong>
    </p>
  );
};

export default BonusDescription;
