import React from 'react';
import { Gem, Zap, Gift } from 'lucide-react';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusRewardStrip Component
 * Single Responsibility: Render the 4 reward items (Free Coins, Bonus Gems, Extra XP, Special Rewards)
 */
const BonusRewardStrip = () => {
  return (
    <div className={styles.rewardItemsStrip}>
      {/* 1. Free Coins */}
      <div className={styles.rewardPillItem}>
        <div className={`${styles.iconCircle3d} ${styles.coinIconGold}`}>
          <span>VEs</span>
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Free</strong>
          <span className={styles.rewardSub}>Coins</span>
        </div>
      </div>

      {/* 2. Bonus Gems */}
      <div className={styles.rewardPillItem}>
        <div className={`${styles.iconCircle3d} ${styles.gemIconPurple}`}>
          <Gem size={22} />
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Bonus</strong>
          <span className={styles.rewardSub}>Gems</span>
        </div>
      </div>

      {/* 3. Extra XP */}
      <div className={styles.rewardPillItem}>
        <div className={`${styles.iconCircle3d} ${styles.xpIconYellow}`}>
          <Zap size={20} fill="#ffe600" />
          <small className={styles.xpTextTag}>XP</small>
        </div>
        <div className={styles.rewardItemLabels}>
          <strong className={styles.rewardTitle}>Extra</strong>
          <span className={styles.rewardSub}>XP</span>
        </div>
      </div>

      {/* 4. Special Rewards */}
      <div className={styles.rewardPillItem}>
        <div className={`${styles.iconCircle3d} ${styles.giftIconPurple}`}>
          <Gift size={22} />
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
