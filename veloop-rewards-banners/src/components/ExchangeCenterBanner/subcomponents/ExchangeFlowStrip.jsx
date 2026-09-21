import React from 'react';
import { Diamond, RefreshCw, ArrowRight } from 'lucide-react';
import styles from '../ExchangeCenterBanner.module.css';

/**
 * ExchangeFlowStrip Component
 * Single Responsibility: Render the 3-step redemption conversion flow pill (GEM -> CONVERT -> VE)
 */
const ExchangeFlowStrip = () => {
  return (
    <div className={styles.flowStripContainer}>
      <div className={styles.flowStepPillsRow}>
        {/* Step 1: GEM */}
        <div className={`${styles.flowPill} ${styles.gemPill}`}>
          <Diamond size={14} className={styles.gemPillIcon} />
          <span>GEM</span>
        </div>

        <ArrowRight size={13} className={styles.flowArrowIcon} />

        {/* Step 2: CONVERT */}
        <div className={`${styles.flowPill} ${styles.convertPill}`}>
          <RefreshCw size={13} className={styles.spinConvertIcon} />
          <span>CONVERT</span>
        </div>

        <ArrowRight size={13} className={styles.flowArrowIcon} />

        {/* Step 3: VE */}
        <div className={`${styles.flowPill} ${styles.vePill}`}>
          <div className={styles.veMiniCoinIcon}>V</div>
          <span>VE</span>
        </div>
      </div>

      {/* Redemption Utility Tag */}
      <div className={styles.utilityTagBadge}>
        <span>Redemption Utility: <strong>Gems ➔ VEs ➔ Rewards</strong></span>
      </div>
    </div>
  );
};

export default ExchangeFlowStrip;
