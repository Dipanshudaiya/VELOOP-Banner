import React from 'react';
import styles from '../BonusVEsBanner.module.css';

/**
 * Custom 3D Faceted Diamond SVG Component
 */
export const FacetedDiamondSvg = ({ size = 32, primaryColor = "#38bdf8", secondaryColor = "#818cf8", glowColor = "#38bdf8" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0 0 10px ${glowColor})` }}>
    {/* Top crown facets */}
    <path d="M 20,4 L 30,12 L 20,16 L 10,12 Z" fill="#ffffff" opacity="0.9" />
    <path d="M 10,12 L 4,14 L 10,22 L 20,16 Z" fill={primaryColor} />
    <path d="M 30,12 L 36,14 L 30,22 L 20,16 Z" fill={secondaryColor} />
    <path d="M 20,4 L 10,12 L 4,14 L 12,6 Z" fill="#e0f2fe" opacity="0.8" />
    <path d="M 20,4 L 30,12 L 36,14 L 28,6 Z" fill="#c084fc" opacity="0.8" />
    {/* Bottom pavilion facets */}
    <path d="M 10,22 L 20,16 L 30,22 L 20,38 Z" fill={primaryColor} />
    <path d="M 4,14 L 10,22 L 20,38 Z" fill="#0284c7" />
    <path d="M 36,14 L 30,22 L 20,38 Z" fill="#6366f1" />
  </svg>
);

/**
 * Custom 3D Gold VEs Coin SVG Component
 */
export const VeCoin3dSvg = ({ size = 44, text = "VEs" }) => (
  <div className={styles.veCoinSvgWrapper} style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4a3" />
          <stop offset="35%" stopColor="#ffc400" />
          <stop offset="70%" stopColor="#ef9700" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <radialGradient id="goldCore" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffea75" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
      </defs>

      {/* Outer 3D Rim */}
      <circle cx="25" cy="25" r="23" fill="url(#goldRim)" stroke="#fef08a" strokeWidth="1.5" />
      {/* Inner Bevel */}
      <circle cx="25" cy="25" r="18" fill="url(#goldCore)" stroke="#fff1a8" strokeWidth="1.2" />
      {/* VEs Text */}
      <text x="25" y="30" textAnchor="middle" fill="#582a00" fontSize="14" fontWeight="950" fontFamily="sans-serif" fontStyle="italic" letterSpacing="-0.5">
        {text}
      </text>
      <text x="24.5" y="29.5" textAnchor="middle" fill="#fff9d0" fontSize="14" fontWeight="950" fontFamily="sans-serif" fontStyle="italic" letterSpacing="-0.5">
        {text}
      </text>
    </svg>
  </div>
);

/**
 * BonusTreasureChest Component
 * Single Responsibility: Render the 3D open gold treasure chest overflowing with coins & crystal gems
 */
const BonusTreasureChest = () => {
  return (
    <div className={styles.treasureChest3dWrapper}>
      {/* Golden Aura Glow behind chest */}
      <div className={styles.chestAuraGlow} />

      {/* Gold Ribbon / Strap wrapping around right of chest */}
      <div className={styles.goldRibbonRight} />

      {/* Open Lid */}
      <div className={styles.chestLidOpen}>
        <div className={styles.lidGoldTrim} />
        <div className={styles.lidInnerDarkPanel}>
          <VeCoin3dSvg size={36} text="VEs" />
        </div>
      </div>

      {/* Main Chest Body with stylized 3D VE Emblem */}
      <div className={styles.chestBodyMain}>
        <div className={styles.chestFrontPanel}>
          <div className={styles.veEmblemLogo}>
            <span className={styles.veLetterV}>V</span>
            <span className={styles.veLetterE}>E</span>
          </div>
        </div>

        {/* Top Metallic Lock Latch */}
        <div className={styles.chestLockBadge}>
          <div className={styles.lockKeyhole} />
        </div>
      </div>

      {/* Overflowing Gold VEs Coins & Crystal Diamonds */}
      <div className={styles.overflowingTreasureContents}>
        {/* Main Central Gold Coins */}
        <div className={`${styles.chestVeCoin} ${styles.cCoinCenter}`}>
          <VeCoin3dSvg size={54} text="VEs" />
        </div>
        <div className={`${styles.chestVeCoin} ${styles.cCoinTopLeft}`}>
          <VeCoin3dSvg size={46} text="VEs" />
        </div>
        <div className={`${styles.chestVeCoin} ${styles.cCoinTopRight}`}>
          <VeCoin3dSvg size={46} text="VEs" />
        </div>
        <div className={`${styles.chestVeCoin} ${styles.cCoinMidLeft}`}>
          <VeCoin3dSvg size={42} text="VEs" />
        </div>
        <div className={`${styles.chestVeCoin} ${styles.cCoinMidRight}`}>
          <VeCoin3dSvg size={42} text="VEs" />
        </div>

        {/* Floor Coins on Platform */}
        <div className={`${styles.chestVeCoin} ${styles.floorCoinLeft}`}>
          <VeCoin3dSvg size={44} text="VEs" />
        </div>
        <div className={`${styles.chestVeCoin} ${styles.floorCoinCenter}`}>
          <VeCoin3dSvg size={44} text="VEs" />
        </div>
        <div className={`${styles.chestVeCoin} ${styles.floorCoinRight}`}>
          <VeCoin3dSvg size={44} text="VEs" />
        </div>

        {/* 3D Faceted Crystal Diamonds / Gems */}
        <div className={`${styles.chestGem} ${styles.cGemTopLeftBlue}`}>
          <FacetedDiamondSvg size={38} primaryColor="#38bdf8" secondaryColor="#6366f1" glowColor="#38bdf8" />
        </div>
        <div className={`${styles.chestGem} ${styles.cGemTopRightPurple}`}>
          <FacetedDiamondSvg size={36} primaryColor="#c084fc" secondaryColor="#a855f7" glowColor="#c084fc" />
        </div>
        <div className={`${styles.chestGem} ${styles.cGemMidLeftPurple}`}>
          <FacetedDiamondSvg size={30} primaryColor="#a855f7" secondaryColor="#818cf8" glowColor="#a855f7" />
        </div>
        <div className={`${styles.chestGem} ${styles.cGemBottomCenterPurple}`}>
          <FacetedDiamondSvg size={28} primaryColor="#c084fc" secondaryColor="#9333ea" glowColor="#c084fc" />
        </div>
        <div className={`${styles.chestGem} ${styles.cGemBottomRightCyan}`}>
          <FacetedDiamondSvg size={42} primaryColor="#22d3ee" secondaryColor="#3b82f6" glowColor="#22d3ee" />
        </div>
        <div className={`${styles.chestGem} ${styles.cGemFarRightGiant}`}>
          <FacetedDiamondSvg size={48} primaryColor="#38bdf8" secondaryColor="#818cf8" glowColor="#38bdf8" />
        </div>
      </div>
    </div>
  );
};

export default BonusTreasureChest;
