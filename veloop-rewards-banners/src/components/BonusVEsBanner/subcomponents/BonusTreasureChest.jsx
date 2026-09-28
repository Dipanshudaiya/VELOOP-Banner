import React from 'react';
import styles from '../BonusVEsBanner.module.css';

/**
 * Custom 3D Faceted Diamond SVG Component
 * (Still exported — used by BonusVisualStage for floating gems)
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
 * (Still exported — used by BonusVisualStage for floating coins)
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
 * Single Responsibility: Render the treasure2.png image with glow + float animation,
 * centered on the pedestal.
 */
const BonusTreasureChest = () => {
  return (
    <div className={styles.treasureChest3dWrapper}>
      {/* Soft golden aura behind the image */}
      <div className={styles.chestAuraGlow} />

      {/* The actual treasure image — PNG from /public */}
      <img
        src="/treasure3.png"
        alt="VE Treasure Chest overflowing with VE coins and crystals"
        className={styles.treasureChestImg}
        draggable={false}
      />
    </div>
  );
};

export default BonusTreasureChest;
