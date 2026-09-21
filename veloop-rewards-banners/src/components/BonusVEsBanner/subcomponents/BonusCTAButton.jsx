import React from 'react';
import { Calendar, ArrowRight, Check } from 'lucide-react';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusCTAButton Component
 * Single Responsibility: Render the main gold action button with sparkles and claimed state
 */
const BonusCTAButton = ({ claimed, onClaim }) => {
  return (
    <div className={styles.ctaWrapperArea}>
      {/* Decorative Sparkles Left & Right */}
      <div className={`${styles.btnSparkle} ${styles.sparkleLeft}`}>✦</div>
      <div className={`${styles.btnSparkle} ${styles.sparkleRight}`}>✦</div>

      <button
        type="button"
        className={`${styles.goldMainCtaBtn} ${claimed ? styles.claimedStateBtn : ''}`}
        onClick={onClaim}
        aria-label="Claim Your Daily Bonus"
      >
        <div className={styles.ctaIconBadge}>
          {claimed ? <Check size={18} strokeWidth={3} /> : <Calendar size={18} />}
        </div>

        <span className={styles.ctaTextLabel}>
          {claimed ? 'Bonus Claimed!' : 'Claim Your Daily Bonus'}
        </span>

        <ArrowRight size={19} className={styles.ctaArrowIcon} />
      </button>
    </div>
  );
};

export default BonusCTAButton;
