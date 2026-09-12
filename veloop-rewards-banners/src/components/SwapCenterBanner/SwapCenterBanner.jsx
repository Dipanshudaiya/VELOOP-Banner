import React, { useState } from 'react';
import { ArrowLeftRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import BannerContainer from '../common/BannerContainer';
import RewardBadge from '../common/RewardBadge';
import BannerCTA from '../common/BannerCTA';
import styles from './SwapCenterBanner.module.css';

const SwapCenterBanner = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <BannerContainer variant="gold">
      <div className={styles.bannerGrid}>
        {/* Left Column */}
        <div className={styles.contentCol}>
          <RewardBadge icon={<ArrowLeftRight size={14} />} variant="gold">
            REWARD CONVERSION
          </RewardBadge>

          <h2 className={styles.title}>
            Swap <span className="text-gradient-gold">Center</span>
          </h2>

          <p className={styles.description}>
            Convert eligible reward balances between supported currencies and manage your rewards efficiently.
          </p>

          {/* Currency Swap Preview Widgets */}
          <div className={styles.conversionPreview}>
            <div className={styles.currencyPill}>
              <div className={styles.currencyIconVE}>V</div>
              <div>
                <span className={styles.currencyName}>{isSwapped ? 'SVE' : 'VE'}</span>
                <span className={styles.currencyAmount}>{isSwapped ? 'SVE Balance' : 'VE Balance'}</span>
              </div>
            </div>

            <button 
              type="button" 
              className={styles.swapToggleBtn}
              onClick={() => setIsSwapped(!isSwapped)}
              aria-label="Toggle currency swap preview"
              title="Click to toggle swap direction"
            >
              <RefreshCw size={16} className={`${styles.swapIcon} ${isSwapped ? styles.rotated : ''}`} />
            </button>

            <div className={styles.currencyPill}>
              <div className={styles.currencyIconSVE}>★</div>
              <div>
                <span className={styles.currencyName}>{isSwapped ? 'VE' : 'SVE'}</span>
                <span className={styles.currencyAmount}>{isSwapped ? 'VE Balance' : 'SVE Balance'}</span>
              </div>
            </div>
          </div>

          <div className={styles.conversionRateTag}>
            <CheckCircle2 size={13} className={styles.rateCheckIcon} />
            <span>Supported Feature: <strong>Convert Eligible Reward Balances (VE ⇄ SVE)</strong></span>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaGroup}>
            <BannerCTA variant="gold" ariaLabel="Open Swap Center">
              Open Swap Center
            </BannerCTA>
          </div>
        </div>

        {/* Right Column: Custom 3D Wallet & Card Conversion Visual */}
        <div className={styles.visualCol}>
          <div className={styles.walletStage}>
            {/* Background Digital Wallet Interface Frame */}
            <div className={styles.walletBackdrop}>
              <div className={styles.walletHeader}>
                <span className={styles.walletTitle}>REWARD WALLET</span>
                <span className={styles.walletDots}>•••</span>
              </div>
              <div className={styles.walletSubheader}>Eligible Balances</div>

              {/* Balance Sliders Simulation */}
              <div className={styles.sliderBarContainer}>
                <div className={styles.sliderBarLabel}>
                  <span>VE Balance</span>
                  <span>75%</span>
                </div>
                <div className={styles.sliderTrack}>
                  <div className={styles.sliderFillGold} style={{ width: '75%' }} />
                </div>
              </div>

              <div className={styles.sliderBarContainer}>
                <div className={styles.sliderBarLabel}>
                  <span>SVE Balance</span>
                  <span>40%</span>
                </div>
                <div className={styles.sliderTrack}>
                  <div className={styles.sliderFillBlue} style={{ width: '40%' }} />
                </div>
              </div>
            </div>

            {/* Currency Card A: VE Card */}
            <div className={`${styles.currencyCard} ${styles.cardVE} ${isSwapped ? styles.swapRight : styles.swapLeft}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>VE</span>
                <span className={styles.cardSub}>REWARD CURRENCY</span>
              </div>
              <div className={styles.chipGraphic} />
              <div className={styles.cardCoinBadge}>VE</div>
            </div>

            {/* Central Rotating Swap Icon Button */}
            <div 
              className={styles.centralSwapCircle}
              onClick={() => setIsSwapped(!isSwapped)}
            >
              <RefreshCw size={22} className={`${styles.circleSwapIcon} ${isSwapped ? styles.spin180 : ''}`} />
            </div>

            {/* Currency Card B: SVE Card */}
            <div className={`${styles.currencyCard} ${styles.cardSVE} ${isSwapped ? styles.swapLeft : styles.swapRight}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>SVE</span>
                <span className={styles.cardSub}>REWARD CURRENCY</span>
              </div>
              <div className={styles.chipGraphicBlue} />
              <div className={styles.cardStarBadge}>★</div>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default SwapCenterBanner;
