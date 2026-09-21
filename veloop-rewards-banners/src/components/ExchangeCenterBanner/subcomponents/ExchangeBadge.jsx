import React from 'react';
import { Wallet } from 'lucide-react';
import styles from '../ExchangeCenterBanner.module.css';

/**
 * ExchangeBadge Component
 * Single Responsibility: Render the pill badge for Redemption Portal
 */
const ExchangeBadge = ({ text = "REDEMPTION PORTAL", icon: Icon = Wallet }) => {
  return (
    <div className={styles.badgePill}>
      <div className={styles.badgeIconWrapper}>
        <Icon size={15} className={styles.badgeIcon} />
      </div>
      <span className={styles.badgeText}>{text}</span>
    </div>
  );
};

export default ExchangeBadge;
