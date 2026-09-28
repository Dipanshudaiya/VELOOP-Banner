import React from 'react';
import styles from '../BonusVEsBanner.module.css';

/**
 * 3D Gold VEs Coin Icon SVG
 */
const GoldCoinIcon = () => (
  <svg width="42" height="42" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.perkSvgIcon}>
    <defs>
      <radialGradient id="coinGoldGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fff8b5" />
        <stop offset="35%" stopColor="#ffc800" />
        <stop offset="70%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#9a3412" />
      </radialGradient>
      <linearGradient id="coinRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>
    <circle cx="25" cy="25" r="23" fill="url(#coinRimGrad)" stroke="#fef08a" strokeWidth="1.5" />
    <circle cx="25" cy="25" r="18" fill="url(#coinGoldGrad)" stroke="#fffbeb" strokeWidth="1.2" />
    <text x="25" y="30.5" textAnchor="middle" fill="#582a00" fontSize="13.5" fontWeight="950" fontFamily="sans-serif" fontStyle="italic" letterSpacing="-0.5">
      VEs
    </text>
    <text x="24.5" y="30" textAnchor="middle" fill="#fffdf0" fontSize="13.5" fontWeight="950" fontFamily="sans-serif" fontStyle="italic" letterSpacing="-0.5">
      VEs
    </text>
  </svg>
);

/**
 * 3D Faceted Purple Diamond SVG
 */
const PurpleGemIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.perkSvgIcon}>
    <defs>
      <filter id="gemGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#c084fc" floodOpacity="0.8" />
      </filter>
    </defs>
    <g filter="url(#gemGlow)">
      {/* Top crown facets */}
      <path d="M 20,4 L 30,12 L 20,17 L 10,12 Z" fill="#fdf4ff" opacity="0.95" />
      <path d="M 10,12 L 4,14 L 10,23 L 20,17 Z" fill="#c084fc" />
      <path d="M 30,12 L 36,14 L 30,23 L 20,17 Z" fill="#a855f7" />
      <path d="M 20,4 L 10,12 L 4,14 L 12,6 Z" fill="#fae8ff" opacity="0.85" />
      <path d="M 20,4 L 30,12 L 36,14 L 28,6 Z" fill="#d8b4fe" opacity="0.85" />
      {/* Bottom pavilion facets */}
      <path d="M 10,23 L 20,17 L 30,23 L 20,38 Z" fill="#7e22ce" />
      <path d="M 4,14 L 10,23 L 20,38 Z" fill="#581c87" />
      <path d="M 36,14 L 30,23 L 20,38 Z" fill="#6b21a8" />
    </g>
  </svg>
);

/**
 * 3D Extra XP Lightning Bolt SVG
 */
const ExtraXpIcon = () => (
  <div className={styles.xpIconContainer}>
    <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8b5" />
          <stop offset="40%" stopColor="#ffc700" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="boltGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#fbbf24" floodOpacity="0.85" />
        </filter>
      </defs>
      <path
        d="M 17,2 L 4,20 L 14,20 L 11,36 L 27,16 L 17,16 Z"
        fill="url(#boltGrad)"
        stroke="#fffbeb"
        strokeWidth="1.2"
        strokeLinejoin="round"
        filter="url(#boltGlow)"
      />
    </svg>
    <span className={styles.xpBoldTag}>XP</span>
  </div>
);

/**
 * 3D Blue & Gold Gift Box SVG
 */
const GiftBoxIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.perkSvgIcon}>
    <defs>
      <linearGradient id="boxBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="boxLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff9c4" />
        <stop offset="50%" stopColor="#ffc107" />
        <stop offset="100%" stopColor="#ff9800" />
      </linearGradient>
      <filter id="giftGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#60a5fa" floodOpacity="0.6" />
      </filter>
    </defs>
    <g filter="url(#giftGlow)">
      {/* Box Body */}
      <rect x="7" y="16" width="26" height="20" rx="3" fill="url(#boxBodyGrad)" stroke="#93c5fd" strokeWidth="1" />
      {/* Vertical Ribbon on Body */}
      <rect x="17" y="16" width="6" height="20" fill="url(#ribbonGrad)" stroke="#fff9c4" strokeWidth="0.8" />
      {/* Box Lid */}
      <rect x="5" y="11" width="30" height="7" rx="2" fill="url(#boxLidGrad)" stroke="#bfdbfe" strokeWidth="1" />
      {/* Vertical Ribbon on Lid */}
      <rect x="17" y="11" width="6" height="7" fill="url(#ribbonGrad)" stroke="#fff9c4" strokeWidth="0.8" />
      {/* Ribbon Bow */}
      <path d="M 15,11 C 12,6 8,8 14,11 Z" fill="url(#ribbonGrad)" stroke="#fff9c4" strokeWidth="0.8" />
      <path d="M 25,11 C 28,6 32,8 26,11 Z" fill="url(#ribbonGrad)" stroke="#fff9c4" strokeWidth="0.8" />
      <circle cx="20" cy="11" r="2.5" fill="#ffe082" stroke="#fff9c4" strokeWidth="0.8" />
    </g>
  </svg>
);

/**
 * BonusRewardStrip Component
 * Single Responsibility: Render the 4 reward items (Free Coins, Bonus Gems, Extra XP, Special Rewards)
 */
const BonusRewardStrip = () => {
  return (
    <div className={styles.rewardItemsStrip}>
      {/* 1. Free Coins */}
      <div className={styles.rewardPillItem}>
        <div className={styles.rewardIconWrapper}>
          <GoldCoinIcon />
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Free</strong>
          <span className={styles.rewardSub}>Coins</span>
        </div>
      </div>

      {/* 2. Bonus Gems */}
      <div className={styles.rewardPillItem}>
        <div className={styles.rewardIconWrapper}>
          <PurpleGemIcon />
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Bonus</strong>
          <span className={styles.rewardSub}>Gems</span>
        </div>
      </div>

      {/* 3. Extra XP */}
      <div className={styles.rewardPillItem}>
        <div className={styles.rewardIconWrapper}>
          <ExtraXpIcon />
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Extra</strong>
          <span className={styles.rewardSub}>XP</span>
        </div>
      </div>

      {/* 4. Special Rewards */}
      <div className={styles.rewardPillItem}>
        <div className={styles.rewardIconWrapper}>
          <GiftBoxIcon />
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Special</strong>
          <span className={styles.rewardSub}>Rewards</span>
        </div>
      </div>
    </div>
  );
};

export default BonusRewardStrip;
