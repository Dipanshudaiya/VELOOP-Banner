import React from 'react';
import { Puzzle } from 'lucide-react';
import styles from '../CaptchaTasksBanner.module.css';

/**
 * CaptchaBadge Component
 * Single Responsibility: Render the pill badge for Captcha Tasks section
 */
const CaptchaBadge = ({ text = "CAPTCHA TASKS", icon: Icon = Puzzle }) => {
  return (
    <div className={styles.badgePill}>
      <div className={styles.badgeIconWrapper}>
        <Icon size={15} className={styles.badgeIcon} />
      </div>
      <span className={styles.badgeText}>{text}</span>
    </div>
  );
};

export default CaptchaBadge;
