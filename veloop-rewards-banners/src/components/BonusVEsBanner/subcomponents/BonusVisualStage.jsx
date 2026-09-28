import React from 'react';
import { Crown } from 'lucide-react';
import BonusTreasureChest, { VeCoin3dSvg, FacetedDiamondSvg } from './BonusTreasureChest';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusVisualStage Component
 * Single Responsibility: Render the 3D Stage with double neon ring pedestal,
 * 7 Days annotation, floating coins/gems, and central 3D showcase.
 */
const BonusVisualStage = () => {
  return (
    <div className={styles.stageViewportArea}>
      {/* Background Multi-Layer Ambient Radial Glows */}
      <div className={styles.ambientGoldGlow} />
      <div className={styles.ambientPurpleGlow} />

      {/* Handwritten Annotation: 7 Days Better Rewards ↪ */}
      <div className={styles.annotation7DaysNote}>
        <Crown size={22} className={styles.annotationCrown} />
        <span className={styles.annotationText}>7 Days</span>
        <span className={styles.annotationSub}>Better</span>
        <span className={styles.annotationSub}>Rewards</span>
        <svg className={styles.curvedArrowSvg} viewBox="0 0 50 32" width="44" height="28">
          <path d="M 5,5 Q 24,26 40,18" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 33,12 L 42,18 L 36,25" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Floating 3D Gold VEs Coins */}
      <div className={`${styles.floatingGoldCoin} ${styles.fCoinTopRight}`}>
        <VeCoin3dSvg size={46} text="VEs" />
      </div>
      <div className={`${styles.floatingGoldCoin} ${styles.fCoinMidLeft}`}>
        <VeCoin3dSvg size={44} text="VEs" />
      </div>
      <div className={`${styles.floatingGoldCoin} ${styles.fCoinBottomLeft}`}>
        <VeCoin3dSvg size={38} text="VEs" />
      </div>

      {/* Floating 3D Crystal Diamonds */}
      <div className={`${styles.floatingPurpleGem} ${styles.fGemTopRight}`}>
        <FacetedDiamondSvg size={36} primaryColor="#c084fc" secondaryColor="#818cf8" glowColor="#c084fc" />
      </div>
      <div className={`${styles.floatingPurpleGem} ${styles.fGemMidRight}`}>
        <FacetedDiamondSvg size={42} primaryColor="#38bdf8" secondaryColor="#9333ea" glowColor="#38bdf8" />
      </div>

      {/* Twinkling Star Sparkles */}
      <div className={`${styles.starSparkle} ${styles.sparklePos1}`}>✦</div>
      <div className={`${styles.starSparkle} ${styles.sparklePos2}`}>✦</div>
      <div className={`${styles.starSparkle} ${styles.sparklePos3}`}>✦</div>

      {/* Main 3D Showcase Image with glowing auras */}
      <BonusTreasureChest />

      {/* 3D Platform Pedestal Base with Double Glowing Neon Rings (Cyan on top, Gold below) */}
      <div className={styles.pedestalPlatform3d}>
        <div className={styles.pedestalNeonBlueRing} />
        <div className={styles.pedestalNeonGoldRing} />
        <div className={styles.pedestalMetallicEdge} />
        <div className={styles.pedestalBaseAura} />
      </div>
    </div>
  );
};

export default BonusVisualStage;
