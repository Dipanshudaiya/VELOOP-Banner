import React from 'react';
import styles from './VeLoopLogo.module.css';

/**
 * VeLoopLogo Component
 * Single Responsibility: Render the official high-resolution 3D VE Loop Rewards logo image.
 */
const VeLoopLogo = ({ size = 'medium', className = '', alt = 'VE Loop Rewards' }) => {
  return (
    <div className={`${styles.logoWrapper} ${styles[size] || ''} ${className}`}>
      <img
        src="/veloop_logo.png"
        alt={alt}
        className={styles.logoImage}
        draggable={false}
      />
    </div>
  );
};

export default VeLoopLogo;
