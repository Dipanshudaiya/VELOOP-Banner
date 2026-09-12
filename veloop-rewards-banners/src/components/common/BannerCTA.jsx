import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './BannerCTA.module.css';

const BannerCTA = ({ 
  children, 
  variant = 'gold', 
  onClick, 
  icon = <ArrowRight className={styles.arrowIcon} size={18} />, 
  className = '',
  ariaLabel
}) => {
  return (
    <button
      type="button"
      className={`${styles.ctaButton} ${styles[variant]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Call to Action')}
    >
      <span className={styles.btnText}>{children}</span>
      {icon}
    </button>
  );
};

export default BannerCTA;
