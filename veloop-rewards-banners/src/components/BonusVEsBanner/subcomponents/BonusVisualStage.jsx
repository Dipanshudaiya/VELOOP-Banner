import React from 'react';
import { Crown } from 'lucide-react';
import BonusCalendarCard from './BonusCalendarCard';
import BonusTreasureChest, { VeCoin3dSvg, FacetedDiamondSvg } from './BonusTreasureChest';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusVisualStage Component
 * Single Responsibility: Render the 3D Visual Stage (Platform, Calendar, Chest, Floating Coins & Gems)
 */
const BonusVisualStage = () => {
  return (
    <div className={styles.stageViewportArea}>
      {/* Background Ambient Radial Glows */}
      <div className={styles.ambientGoldGlow} />
      <div className={styles.ambientPurpleGlow} />

      {/* Handwritten Annotation: 7 Days Better Rewards ↪ */}
      <div className={styles.annotation7DaysNote}>
        <Crown size={20} className={styles.annotationCrown} />
        <span className={styles.annotationText}>7 Days</span>
        <span className={styles.annotationSub}>Better</span>
        <span className={styles.annotationSub}>Rewards</span>
        <svg className={styles.curvedArrowSvg} viewBox="0 0 50 30" width="42" height="26">
          <path d="M 5,5 Q 25,25 42,18" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 36,12 L 44,18 L 38,24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Floating 3D Gold VEs Coins */}
      <div className={`${styles.floatingGoldCoin} ${styles.fCoinTopLeft}`}>
        <VeCoin3dSvg size={44} text="VEs" />
      </div>
      <div className={`${styles.floatingGoldCoin} ${styles.fCoinMidLeft}`}>
        <VeCoin3dSvg size={42} text="VEs" />
      </div>

      {/* Floating 3D Crystal Diamonds */}
      <div className={`${styles.floatingPurpleGem} ${styles.fGemTopRight}`}>
        <FacetedDiamondSvg size={32} primaryColor="#c084fc" secondaryColor="#818cf8" glowColor="#c084fc" />
      </div>
      <div className={`${styles.floatingPurpleGem} ${styles.fGemMidRight}`}>
        <FacetedDiamondSvg size={36} primaryColor="#38bdf8" secondaryColor="#9333ea" glowColor="#38bdf8" />
      </div>

      {/* 3D Daily Login Calendar Card */}
      <BonusCalendarCard />

      {/* 3D Open Gold VE Treasure Chest */}
      <BonusTreasureChest />

      {/* 3D Pedestal / Platform Base with Neon Rings */}
      <div className={styles.pedestalPlatform3d}>
        <div className={styles.pedestalTopGlowRing} />
        <div className={styles.pedestalMetallicEdge} />
        <div className={styles.pedestalNeonGoldRing} />
        <div className={styles.pedestalNeonBlueRing} />
        <div className={styles.pedestalBaseAura} />
      </div>
    </div>
  );
};

export default BonusVisualStage;
