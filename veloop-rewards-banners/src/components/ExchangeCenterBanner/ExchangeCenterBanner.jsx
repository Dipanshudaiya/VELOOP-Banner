import React, { useState } from 'react';
import BannerContainer from '../common/BannerContainer';
import VeLoopLogo from '../common/VeLoopLogo';
import ExchangeBadge from './subcomponents/ExchangeBadge';
import ExchangeHeroContent from './subcomponents/ExchangeHeroContent';
import ExchangeFlowStrip from './subcomponents/ExchangeFlowStrip';
import ExchangeActions from './subcomponents/ExchangeActions';
import ExchangeVisualStage from './subcomponents/ExchangeVisualStage';
import styles from './ExchangeCenterBanner.module.css';

/**
 * ExchangeCenterBanner Component
 * Follows SOLID Principles:
 * - Single Responsibility (SRP): Orchestrates redemption portal layout & state across sub-components.
 * - Open/Closed (OCP): Sub-components are modular & configurable.
 * - Dependency Inversion (DIP): UI components decoupled from state logic.
 */
const ExchangeCenterBanner = () => {
  const [exchangeCount, setExchangeCount] = useState(0);

  const handleExchangeTrigger = () => {
    setExchangeCount((prev) => prev + 1);
  };

  return (
    <BannerContainer variant="cyan">
      <div className={styles.bannerGridContainer}>
        {/* Left Column: Hero & Redemption Flow */}
        <div className={styles.leftInfoCol}>
          <div style={{ marginBottom: '0.4rem' }}>
            <VeLoopLogo />
          </div>

          <ExchangeBadge text="REDEMPTION PORTAL" />

          <ExchangeHeroContent
            description="Exchange your earned Gems directly into VEs and redeem them for supported gift cards, UPI rewards, and real payout vouchers."
          />

          <ExchangeFlowStrip />

          <ExchangeActions
            onPrimaryClick={handleExchangeTrigger}
            onSecondaryClick={handleExchangeTrigger}
          />
        </div>

        {/* Right Column: 3D Visual Stage */}
        <div className={styles.rightStageCol}>
          <ExchangeVisualStage onExchangeClick={handleExchangeTrigger} />
        </div>
      </div>
    </BannerContainer>
  );
};

export default ExchangeCenterBanner;
