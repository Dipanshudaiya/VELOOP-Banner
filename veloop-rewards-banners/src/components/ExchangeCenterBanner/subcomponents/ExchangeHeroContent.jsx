import React from 'react';
import styles from '../ExchangeCenterBanner.module.css';

/**
 * ExchangeHeroContent Component
 * Single Responsibility: Render title with Gem & VE gradient text and description
 */
const ExchangeHeroContent = ({
  description = "Exchange your earned Gems directly into VEs and redeem them for supported gift cards, UPI rewards, and real payout vouchers."
}) => {
  return (
    <div className={styles.heroTextGroup}>
      <h2 className={styles.heroTitle}>
        Convert <span className={styles.purpleGemGradient}>Gems</span> to{' '}
        <span className={styles.goldVeGradient}>VEs</span>
      </h2>

      <p className={styles.heroDescription}>{description}</p>
    </div>
  );
};

export default ExchangeHeroContent;
