import React from 'react';
import styles from './RewardBadge.module.css';

const RewardBadge = ({ icon, children, variant = 'blue', className = '' }) => {
  return (
    <div className={`${styles.badge} ${styles[variant]} ${className}`}>
      {icon && <span className={styles.badgeIcon}>{icon}</span>}
      <span className={styles.badgeText}>{children}</span>
    </div>
  );
};

export default RewardBadge;
