import React from 'react';
import { Check, Gift } from 'lucide-react';
import styles from '../BonusVEsBanner.module.css';

/**
 * BonusCalendarCard Component
 * Single Responsibility: Render the 3D Daily Login calendar card with binder rings, checkmarks & Day 7 gift
 */
const BonusCalendarCard = () => {
  return (
    <div className={styles.calendarCard3d}>
      {/* 6 Gold Binder Spiral Rings */}
      <div className={styles.calendarSpiralHeader}>
        <span className={styles.spiralRing} />
        <span className={styles.spiralRing} />
        <span className={styles.spiralRing} />
        <span className={styles.spiralRing} />
        <span className={styles.spiralRing} />
        <span className={styles.spiralRing} />
      </div>

      {/* Calendar Header */}
      <div className={styles.calendarTitleBar}>
        <Check size={16} strokeWidth={3} className={styles.checkHeaderIcon} />
        <span className={styles.calendarHeaderText}>DAILY LOGIN</span>
      </div>

      {/* Days Row (1 to 6 Checked + 7 Gift) */}
      <div className={styles.daysGridContainer}>
        {[1, 2, 3, 4, 5, 6].map((day) => (
          <div key={day} className={styles.dayBoxItem}>
            <span className={styles.dayBoxLabel}>DAY {day}</span>
            <div className={styles.dayCheckBadge}>
              <Check size={13} strokeWidth={3.5} />
            </div>
          </div>
        ))}

        {/* Day 7 Neon Gift Box */}
        <div className={styles.day7GiftBoxItem}>
          <span className={styles.day7Label}>DAY 7</span>
          <Gift size={22} className={styles.day7GiftIcon} />
        </div>
      </div>
    </div>
  );
};

export default BonusCalendarCard;
