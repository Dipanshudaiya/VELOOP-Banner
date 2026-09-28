import React from 'react';
import { Calendar, ArrowRight, Check } from 'lucide-react';
import styles from '../BonusVEsBanner.module.css';

/**
 * Triple Sparkle / Ray Burst SVG Component
 */
const SparkleRayBurst = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="3" y1="6" x2="9" y2="10" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="2" y1="12" x2="9" y2="12" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="3" y1="18" x2="9" y2="14" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SparkleRayBurstRight = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="21" y1="6" x2="15" y2="10" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="12" x2="15" y2="12" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="21" y1="18" x2="15" y2="14" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/**
 * BonusCTAButton Component
 * Single Responsibility: Render the main gold action button with ray sparkles and claimed state
 */
const BonusCTAButton = ({ claimed, onClaim }) => {
  return (
    <div className={styles.ctaWrapperArea}>
      {/* Decorative Golden Ray Sparkles Left & Right */}
      <SparkleRayBurst className={`${styles.btnRaySparkle} ${styles.sparkleLeft}`} />
      <SparkleRayBurstRight className={`${styles.btnRaySparkle} ${styles.sparkleRight}`} />

      <button
        type="button"
        className={`${styles.goldMainCtaBtn} ${claimed ? styles.claimedStateBtn : ''}`}
        onClick={onClaim}
        aria-label="Claim Your Daily Bonus"
      >
        <div className={styles.ctaIconBadge}>
          {claimed ? (
            <Check size={18} strokeWidth={3} />
          ) : (
            <Calendar size={19} strokeWidth={2.5} className={styles.ctaCalendarIcon} />
          )}
        </div>

        <span className={styles.ctaTextLabel}>
          {claimed ? 'Bonus Claimed!' : 'Claim Your Daily Bonus'}
        </span>

        <ArrowRight size={20} strokeWidth={2.8} className={styles.ctaArrowIcon} />
      </button>
    </div>
  );
};

export default BonusCTAButton;
