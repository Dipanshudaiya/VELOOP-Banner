import React from 'react';
import ExchangeCardsStage from './ExchangeCardsStage';
import styles from '../ExchangeCenterBanner.module.css';

/**
 * ExchangeVisualStage Component
 * Single Responsibility: Render complete 3D Visual Stage with Pedestal, Cards Stage, Floating Coins & Gems
 */
const ExchangeVisualStage = ({ onExchangeClick }) => {
  return (
    <div className={styles.stageViewportArea}>
      {/* Background Radial Glows */}
      <div className={styles.ambientCyanGlow} />
      <div className={styles.ambientPurpleGlow} />
      <div className={styles.ambientGoldGlow} />

      {/* Floating 3D Gold VEs Coins */}
      <div className={`${styles.floatingCoin} ${styles.fCoinTopLeft}`}>VE</div>
      <div className={`${styles.floatingCoin} ${styles.fCoinBottomRight}`}>VE</div>

      {/* Floating 3D Purple Gems */}
      <div className={`${styles.floatingGem} ${styles.fGemTopRight}`}>💎</div>

      {/* 3D Exchange Cards Stage */}
      <ExchangeCardsStage onExchangeClick={onExchangeClick} />

      {/* 3D Pedestal / Platform Base */}
      <div className={styles.pedestalPlatform3d}>
        <div className={styles.pedestalTopGlowRing} />
        <div className={styles.pedestalMetallicEdge} />
        <div className={styles.pedestalNeonCyanRing} />
        <div className={styles.pedestalBaseAura} />
      </div>
    </div>
  );
};

export default ExchangeVisualStage;
