import React from 'react';
import { RefreshCw, Check, Gift, Landmark } from 'lucide-react';
import styles from '../ExchangeCenterBanner.module.css';

/**
 * 3D Faceted Diamond SVG Component
 */
const FacetedGemGraphic = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 14px #c084fc)' }}>
    <path d="M 20,4 L 30,12 L 20,16 L 10,12 Z" fill="#ffffff" opacity="0.95" />
    <path d="M 10,12 L 4,14 L 10,22 L 20,16 Z" fill="#c084fc" />
    <path d="M 30,12 L 36,14 L 30,22 L 20,16 Z" fill="#a855f7" />
    <path d="M 20,4 L 10,12 L 4,14 L 12,6 Z" fill="#f3e8ff" opacity="0.8" />
    <path d="M 20,4 L 30,12 L 36,14 L 28,6 Z" fill="#e9d5ff" opacity="0.8" />
    <path d="M 10,22 L 20,16 L 30,22 L 20,38 Z" fill="#a855f7" />
    <path d="M 4,14 L 10,22 L 20,38 Z" fill="#7e22ce" />
    <path d="M 36,14 L 30,22 L 20,38 Z" fill="#6b21a8" />
  </svg>
);

/**
 * ExchangeCardsStage Component
 * Single Responsibility: Render 3D Gem Card, 3D VE Card, central exchange button and payout option badges
 */
const ExchangeCardsStage = ({ onExchangeClick }) => {
  return (
    <div className={styles.cardsStageContainer}>
      {/* Left 3D Gem Card */}
      <div className={`${styles.card3d} ${styles.gemCard3d}`}>
        <div className={styles.cardHeaderPurple}>
          <span>GEM</span>
        </div>
        <div className={styles.cardBodyGraphic}>
          <FacetedGemGraphic />
        </div>
        <div className={styles.cardSubText}>PURPLE DIAMOND</div>
      </div>

      {/* Central Rotating Exchange Vortex Button */}
      <button
        type="button"
        className={styles.exchangeVortexButton}
        onClick={onExchangeClick}
        aria-label="Trigger Exchange Preview"
      >
        <RefreshCw size={24} className={styles.spinVortexIcon} />
      </button>

      {/* Right 3D VE Card */}
      <div className={`${styles.card3d} ${styles.veCard3d}`}>
        <div className={styles.cardHeaderGold}>
          <span>VE</span>
        </div>
        <div className={styles.cardBodyGraphic}>
          <div className={styles.veBigCoinGraphic}>
            <span>VE</span>
          </div>
        </div>
        <div className={styles.cardCheckVerified}>
          <Check size={14} strokeWidth={3} />
        </div>
      </div>

      {/* Floating Payout Badges (Gift Cards / UPI Payouts) */}
      <div className={styles.payoutStripRow}>
        <div className={styles.payoutOptionPill}>
          <Gift size={14} className={styles.payoutGiftIcon} />
          <span>Gift Cards</span>
        </div>

        <div className={styles.payoutOptionPill}>
          <Landmark size={14} className={styles.payoutBankIcon} />
          <span>UPI / Payouts</span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCardsStage;
