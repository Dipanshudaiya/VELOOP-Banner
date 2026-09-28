import React from 'react';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusHeroHeading Component
 * Single Responsibility: Render the Daily Bonus heading image (daily_bonous.png from /public)
 * The PNG has a transparent background — mix-blend-mode: screen blends cleanly on dark backgrounds.
 */
const BonusHeroHeading = () => {
  return (
    <div className={styles.heroHeadingWrapper}>
      <img
        src="/daily_bonous.png"
        alt="Daily Bonus"
        className={styles.dailyBonusHeadingImg}
        draggable={false}
      />
    </div>
  );
};

export default BonusHeroHeading;
