import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import styles from '../CaptchaTasksBanner.module.css';

/**
 * CaptchaActions Component
 * Single Responsibility: Render CTA action buttons (Primary Gradient & Secondary Outlined)
 */
const CaptchaActions = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className={styles.ctaActionRow}>
      <button
        type="button"
        className={styles.primaryGradientBtn}
        onClick={onPrimaryClick}
        aria-label="Start Solving Captcha"
      >
        <span>Start Solving</span>
        <ArrowRight size={18} className={styles.ctaArrowIcon} />
      </button>

      <button
        type="button"
        className={styles.secondaryRewardBtn}
        onClick={onSecondaryClick}
        aria-label="View Rewards"
      >
        <Gift size={17} className={styles.giftIcon} />
        <span>View Rewards</span>
      </button>
    </div>
  );
};

export default CaptchaActions;
