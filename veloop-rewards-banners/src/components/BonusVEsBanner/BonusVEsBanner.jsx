import React, { useState } from 'react';
import BannerContainer from '../common/BannerContainer';
import BonusHeroHeading from './subcomponents/BonusHeroHeading';
import BonusDescription from './subcomponents/BonusDescription';
import BonusRewardStrip from './subcomponents/BonusRewardStrip';
import BonusCTAButton from './subcomponents/BonusCTAButton';
import BonusVisualStage from './subcomponents/BonusVisualStage';
import styles from './BonusVEsBanner.module.css';

/**
 * BonusVEsBanner Container Component
 * Follows SOLID Principles:
 * - Single Responsibility (SRP): Orchestrates layout and claim state across modular components.
 * - Open/Closed (OCP): Subcomponents are modular and configurable.
 * - Interface Segregation (ISP) & Dependency Inversion (DIP): Decoupled UI and interaction logic.
 */
const BonusVEsBanner = () => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed((prev) => !prev);
  };

  return (
    <BannerContainer variant="gold">
      <div className={styles.bannerGridContainer}>
        {/* Left Column: Hero Information & Rewards */}
        <div className={styles.leftInfoCol}>
          <BonusHeroHeading />

          <BonusDescription
            line1="Log In Daily, Collect"
            highlight1="Rewards"
            line2="and Keep Your"
            highlight2="Streak Alive!"
          />

          <BonusRewardStrip />

          <BonusCTAButton claimed={claimed} onClaim={handleClaim} />
        </div>

        {/* Right Column: 3D Visual Stage */}
        <div className={styles.rightStageCol}>
          <BonusVisualStage />
        </div>
      </div>
    </BannerContainer>
  );
};

export default BonusVEsBanner;