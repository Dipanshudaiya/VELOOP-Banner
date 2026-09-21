import React from 'react';
import { Calendar, Crown } from 'lucide-react';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusHeroHeading Component
 * Single Responsibility: Render the 3D 3D Daily Bonus heading with Calendar icon, Crown, and Gold Orbit Ring
 */
const BonusHeroHeading = () => {
  return (
    <div className={styles.heroHeadingWrapper}>
      {/* 3D Gold Orbit Ring Background */}
      <div className={styles.goldOrbitRing} />

      {/* Top Header Row with 3D Calendar & Crown */}
      <div className={styles.headingTopRow}>
        <div className={styles.calendar3dBadge}>
          <Calendar size={22} className={styles.calendarIcon} />
          <div className={styles.starBadge}>★</div>
        </div>

        <h1 className={styles.dailyText}>DAILY</h1>

        <div className={styles.crown3dBadge}>
          <Crown size={28} className={styles.crownIcon} />
        </div>
      </div>

      {/* Main 3D BONUS Gold Title */}
      <div className={styles.bonusGoldTitle}>
        <span>BONUS</span>
      </div>
    </div>
  );
};

export default BonusHeroHeading;
