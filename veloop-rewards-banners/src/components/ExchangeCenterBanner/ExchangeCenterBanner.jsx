import React from 'react';
import { Wallet, ArrowRight, RefreshCw, Diamond, CheckCircle, Gift, Landmark } from 'lucide-react';
import BannerContainer from '../common/BannerContainer';
import RewardBadge from '../common/RewardBadge';
import BannerCTA from '../common/BannerCTA';
import styles from './ExchangeCenterBanner.module.css';

const ExchangeCenterBanner = () => {
  return (
    <BannerContainer variant="cyan">
      <div className={styles.bannerGrid}>
        {/* Left Column */}
        <div className={styles.contentCol}>
          <RewardBadge icon={<Wallet size={14} />} variant="cyan">
            REDEMPTION PORTAL
          </RewardBadge>

          <h2 className={styles.title}>
            Convert <span className="text-gradient-purple">Gems</span> to <span className="text-gradient-gold">VEs</span>
          </h2>

          <p className={styles.description}>
            Exchange your earned Gems directly into VEs and redeem them for supported gift cards, UPI rewards, and real payout vouchers.
          </p>

          {/* Redemption Steps & Exchange Feature Tag */}
          <div className={styles.redemptionFlow}>
            <div className={styles.stepPill}>
              <Diamond size={13} className={styles.gemIcon} />
              <span>GEM</span>
            </div>

            <ArrowRight size={13} className={styles.flowArrow} />

            <div className={`${styles.stepPill} ${styles.activeConvert}`}>
              <RefreshCw size={12} className={styles.spinIcon} />
              <span>CONVERT</span>
            </div>

            <ArrowRight size={13} className={styles.flowArrow} />

            <div className={`${styles.stepPill} ${styles.vePill}`}>
              <span className={styles.veMiniBadge}>V</span>
              <span>VE</span>
            </div>

            <div className={styles.rateBadge}>
              <span>Redemption Utility: <strong>Gems ➔ VEs ➔ Rewards</strong></span>
            </div>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaGroup}>
            <BannerCTA variant="gold" ariaLabel="Open Exchange Center">
              Open Exchange Center
            </BannerCTA>
          </div>
        </div>

        {/* Right Column: Custom Gem-to-VE & Payout Card Redemption Visual */}
        <div className={styles.visualCol}>
          <div className={styles.exchangeStage}>
            {/* Ambient Backlight */}
            <div className={styles.ambientBacklight} />

            {/* Left Card: 3D Purple Gem Card */}
            <div className={styles.gemCard3D}>
              <div className={styles.cardHeader}>
                <span>GEM</span>
              </div>
              <div className={styles.gemGraphicContainer}>
                <Diamond size={38} color="#f3e8ff" fill="#c084fc" className={styles.bigGem} />
              </div>
            </div>

            {/* Central Animated Exchange Arrow Button */}
            <div className={styles.exchangeArrowCircle}>
              <RefreshCw size={22} className={styles.exchangeArrowIcon} />
            </div>

            {/* Right Card: 3D Golden VE Card */}
            <div className={styles.veCard3D}>
              <div className={styles.cardHeaderGold}>
                <span>VE</span>
              </div>
              <div className={styles.veGraphicContainer}>
                <div className={styles.bigVeCoin}>VE</div>
              </div>
              <div className={styles.verifiedCheckBadge}>
                <CheckCircle size={14} />
              </div>
            </div>

            {/* Payout Options Badges (UPI / Gift Cards / Wallet) */}
            <div className={styles.payoutStrip}>
              <div className={styles.payoutBadge}>
                <Gift size={13} className={styles.giftIcon} />
                <span>Gift Cards</span>
              </div>
              <div className={styles.payoutBadge}>
                <Landmark size={13} className={styles.bankIcon} />
                <span>UPI / Payouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default ExchangeCenterBanner;
