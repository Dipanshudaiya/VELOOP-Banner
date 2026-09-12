import React from 'react';
import { Flame, CheckCircle, Plus, Sparkles, Calendar, Users, CheckSquare } from 'lucide-react';
import BannerContainer from '../common/BannerContainer';
import RewardBadge from '../common/RewardBadge';
import BannerCTA from '../common/BannerCTA';
import styles from './BonusVEsBanner.module.css';

const BonusVEsBanner = () => {
  return (
    <BannerContainer variant="gold">
      <div className={styles.bannerGrid}>
        {/* Left Column */}
        <div className={styles.contentCol}>
          <RewardBadge icon={<Flame size={14} />} variant="gold">
            SPECIAL CAMPAIGNS
          </RewardBadge>

          <h2 className={styles.title}>
            Boost Your <br />
            <span className="text-gradient-gold">VE Balance</span>
          </h2>

          <p className={styles.description}>
            Complete eligible platform activities and unlock additional VEs through special bonus opportunities and active campaigns.
          </p>

          {/* Activity Checklist Strip */}
          <div className={styles.checklistRow}>
            <div className={styles.checkItem}>
              <div className={styles.checkIconBox}>
                <Calendar size={13} />
              </div>
              <div>
                <strong>Daily Check-in</strong>
                <span>Stay active</span>
              </div>
              <CheckCircle size={14} className={styles.doneCheck} />
            </div>

            <div className={styles.checkItem}>
              <div className={styles.checkIconBox}>
                <Users size={13} />
              </div>
              <div>
                <strong>Invite Friends</strong>
                <span>Grow together</span>
              </div>
              <CheckCircle size={14} className={styles.doneCheck} />
            </div>

            <div className={styles.checkItem}>
              <div className={styles.checkIconBox}>
                <CheckSquare size={13} />
              </div>
              <div>
                <strong>Complete Tasks</strong>
                <span>Earn more</span>
              </div>
              <CheckCircle size={14} className={styles.doneCheck} />
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaGroup}>
            <BannerCTA variant="gold" ariaLabel="Explore Bonus Opportunities">
              Explore Bonuses
            </BannerCTA>
          </div>
        </div>

        {/* Right Column: Custom Gold Vault & Bonus Pedestal Visual */}
        <div className={styles.visualCol}>
          <div className={styles.vaultStage}>
            {/* Background Glow */}
            <div className={styles.goldGlowRing} />

            {/* Central Pedestal & Bonus Meter Ring */}
            <div className={styles.bonusPedestal}>
              <div className={styles.meterCircle}>
                <div className={styles.meterText}>BONUS</div>
                <div className={styles.meterValue}>VE</div>
                <div className={styles.plusBadge}>
                  <Plus size={12} />
                </div>
              </div>

              {/* Main Glowing VE Coin on Pedestal */}
              <div className={styles.mainVeCoin}>
                <span>VE</span>
              </div>
            </div>

            {/* Open Gold Vault Box Vector Graphics */}
            <div className={styles.goldVaultBox}>
              <div className={styles.vaultBody}>
                <div className={styles.vaultInnerGlow} />
                <div className={styles.vaultWheel}>⚙</div>
              </div>
            </div>

            {/* Floating Gold Coins */}
            <div className={`${styles.goldCoin} ${styles.c1}`}>VE</div>
            <div className={`${styles.goldCoin} ${styles.c2}`}>VE</div>
            <div className={`${styles.goldCoin} ${styles.c3}`}>VE</div>
            <div className={`${styles.goldCoin} ${styles.c4}`}>VE</div>

            {/* Sparkles */}
            <Sparkles size={18} className={`${styles.sparkle} ${styles.sp1}`} />
            <Sparkles size={14} className={`${styles.sparkle} ${styles.sp2}`} />
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default BonusVEsBanner;
