import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import styles from '../ExchangeCenterBanner.module.css';

/**
 * ExchangeActions Component
 * Single Responsibility: Render main CTA button and secondary payout action
 */
const ExchangeActions = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className={styles.actionsRow}>
      <button
        type="button"
        className={styles.primaryExchangeBtn}
        onClick={onPrimaryClick}
        aria-label="Open Exchange Center"
      >
        <span>Open Exchange Center</span>
        <ArrowRight size={18} className={styles.ctaArrowIcon} />
      </button>

      <button
        type="button"
        className={styles.secondaryPayoutBtn}
        onClick={onSecondaryClick}
        aria-label="View Payout Options"
      >
        <Gift size={16} className={styles.giftIcon} />
        <span>View Payouts</span>
      </button>
    </div>
  );
};

export default ExchangeActions;
