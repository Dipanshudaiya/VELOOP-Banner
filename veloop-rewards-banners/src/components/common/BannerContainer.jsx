import React from 'react';
import styles from './BannerContainer.module.css';

const BannerContainer = ({ children, variant = 'blue', className = '' }) => {
  return (
    <div className={`${styles.bannerCard} ${styles[variant]} ${className}`}>
      {/* Background ambient radial gradients */}
      <div className={styles.radialHighlight} />
      <div className={styles.gridOverlay} />
      <div className={styles.innerContent}>
        {children}
      </div>
    </div>
  );
};

export default BannerContainer;
