import React, { useState } from 'react';
import {
  Users,
  Copy,
  Check,
  Gift,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Star,
} from 'lucide-react';

import BannerContainer from '../common/BannerContainer';
import styles from './ReferEarnBanner.module.css';

const ReferEarnBanner = () => {
  const [copied, setCopied] = useState(false);

  const referralCode = 'VELOOP123';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy referral code:', error);
    }
  };

  const handleInvite = async () => {
    const shareText = `Join VELOOP Rewards using my referral code: ${referralCode}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'VELOOP Rewards',
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (error) {
      // User cancelled native share dialog
    }
  };

  return (
    <BannerContainer variant="blue">
      <section className={styles.banner}>
        {/* =========================================
            BACKGROUND DECORATION
        ========================================= */}
        <div className={styles.backgroundGlow} />
        <div className={styles.backgroundGlowTwo} />

        <div className={`${styles.particle} ${styles.particleOne}`} />
        <div className={`${styles.particle} ${styles.particleTwo}`} />
        <div className={`${styles.particle} ${styles.particleThree}`} />
        <div className={`${styles.particle} ${styles.particleFour}`} />

        {/* =========================================
            MAIN HERO
        ========================================= */}
        <div className={styles.heroGrid}>

          {/* =======================================
              LEFT CONTENT
          ======================================= */}
          <div className={styles.content}>

            {/* Badge */}
            <div className={styles.badge}>
              <Users size={17} strokeWidth={2.4} />
              <span>REFER &amp; EARN</span>
            </div>

            {/* Heading */}
            <h1 className={styles.title}>
              Invite Friends,
              <span>Earn Rewards</span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
              Invite your friends to VELOOP and unlock exclusive
              rewards when they achieve eligible milestones.
            </p>

            {/* ===================================
                CTA ROW
            =================================== */}
            <div className={styles.ctaRow}>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={handleInvite}
              >
                <span>Invite Friends Now</span>
                <ArrowRight size={21} />
              </button>

              <button
                type="button"
                className={styles.secondaryButton}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check size={18} className={styles.successIcon} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <span>Copy Referral Link</span>
                    <Copy size={18} />
                  </>
                )}
              </button>

            </div>

            {/* ===================================
                REFERRAL INFO
            =================================== */}
            <div className={styles.referralInfo}>

              <div className={styles.referralIcon}>
                <Gift size={21} />
              </div>

              <div className={styles.referralText}>
                <strong>The more you invite, the more you earn!</strong>
                <span>
                  Earn eligible rewards for successful referrals.
                </span>
              </div>

            </div>

          </div>

          {/* =======================================
              RIGHT ILLUSTRATION
          ======================================= */}
          <div className={styles.visual}>

            <div className={styles.visualGlow} />

            {/* Orbit / dashed path */}
            <svg
              className={styles.orbit}
              viewBox="0 0 520 390"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M75 275
                   C110 105 245 45 355 90
                   C445 127 480 205 430 300"
                stroke="rgba(173, 76, 255, 0.55)"
                strokeWidth="2"
                strokeDasharray="8 9"
              />
            </svg>

            {/* =================================
                PAPER PLANE (top right, HR ref)
            ================================= */}
            <svg
              className={styles.paperPlane}
              viewBox="0 0 60 60"
              aria-hidden="true"
            >
              <path
                d="M4 32 L54 6 L36 54 L28 36 L4 32Z"
                fill="url(#planeFill)"
              />
              <path
                d="M28 36 L54 6 L4 32 Z"
                fill="rgba(255,255,255,0.15)"
              />
              <defs>
                <linearGradient id="planeFill" x1="4" y1="6" x2="54" y2="54">
                  <stop offset="0" stopColor="#b98bff" />
                  <stop offset="1" stopColor="#6d28d9" />
                </linearGradient>
              </defs>
            </svg>

            {/* =================================
                OPEN GIFT BOX + COIN (HR style)
            ================================= */}
            <div className={styles.giftGroup}>

              {/* Lid (tilted, floating open) */}
              <div className={styles.floatingGift}>
                <svg
                  viewBox="0 0 180 80"
                  className={styles.giftLidSvg}
                  aria-hidden="true"
                >
                  <rect x="20" y="24" width="140" height="26" rx="6" fill="url(#lidTop)" />
                  <rect x="78" y="24" width="24" height="26" fill="url(#lidRibbon)" />
                  <path
                    d="M90 24
                       C60 20 40 8 50 -2
                       C60 -11 84 6 90 18 Z"
                    fill="url(#bow)"
                  />
                  <path
                    d="M90 24
                       C120 20 140 8 130 -2
                       C120 -11 96 6 90 18 Z"
                    fill="url(#bowTwo)"
                  />
                  <circle cx="90" cy="20" r="7" fill="#ff75e8" />
                  <defs>
                    <linearGradient id="lidTop" x1="20" y1="24" x2="160" y2="50">
                      <stop offset="0" stopColor="#a855f7" />
                      <stop offset="0.5" stopColor="#d530ff" />
                      <stop offset="1" stopColor="#5b1aa8" />
                    </linearGradient>
                    <linearGradient id="lidRibbon" x1="78" y1="24" x2="102" y2="50">
                      <stop offset="0" stopColor="#ff6be9" />
                      <stop offset="1" stopColor="#8f20ff" />
                    </linearGradient>
                    <linearGradient id="bow" x1="50" y1="-2" x2="90" y2="24">
                      <stop offset="0" stopColor="#ff9af1" />
                      <stop offset="1" stopColor="#a018ff" />
                    </linearGradient>
                    <linearGradient id="bowTwo" x1="90" y1="-2" x2="130" y2="24">
                      <stop offset="0" stopColor="#ff9af1" />
                      <stop offset="1" stopColor="#8e14ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Glow beam from box */}
              <div className={styles.giftBeam} />

              {/* Box base (bottom half, open) */}
              <svg viewBox="0 0 180 90" className={styles.giftBaseSvg} aria-hidden="true">
                <ellipse cx="90" cy="86" rx="70" ry="8" fill="rgba(116,0,255,0.3)" />
                <path
                  d="M28 30 H152 V78
                     C152 84 148 88 142 88
                     H38
                     C32 88 28 84 28 78 Z"
                  fill="url(#baseFill)"
                />
                <rect x="82" y="30" width="18" height="58" fill="url(#baseRibbon)" />
                <defs>
                  <linearGradient id="baseFill" x1="28" y1="30" x2="152" y2="88">
                    <stop offset="0" stopColor="#17104d" />
                    <stop offset="0.5" stopColor="#32107a" />
                    <stop offset="1" stopColor="#13072e" />
                  </linearGradient>
                  <linearGradient id="baseRibbon" x1="82" y1="30" x2="100" y2="88">
                    <stop offset="0" stopColor="#ff6be9" />
                    <stop offset="1" stopColor="#8f20ff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* =================================
                  CENTRAL VE COIN (emerging from box)
              ================================= */}
              <div className={styles.veCoin}>
                <div className={styles.coinInner}>
                  <span>V</span>
                </div>
              </div>

            </div>

            {/* =================================
                REWARD CARD - LEFT
            ================================= */}
            <div className={`${styles.rewardCard} ${styles.rewardCardLeft}`}>

              <div className={styles.cardGlow} />

              <div className={styles.cardText}>
                <span>EXCLUSIVE</span>
                <strong>REWARDS</strong>
              </div>

              <Star
                size={22}
                fill="currentColor"
                className={styles.cardStar}
              />

            </div>

            {/* =================================
                REWARD CARD - RIGHT
            ================================= */}
            <div className={`${styles.rewardCard} ${styles.rewardCardRight}`}>

              <div className={styles.cardText}>
                <span>HIGHER</span>
                <strong>EARNINGS</strong>
              </div>

              <TrendingUp
                size={24}
                className={styles.trendingIcon}
              />

            </div>

            {/* =================================
                FLOATING VE COINS
            ================================= */}
            <div className={`${styles.coin} ${styles.coinOne}`}>
              VE
            </div>

            <div className={`${styles.coin} ${styles.coinTwo}`}>
              VE
            </div>

            <div className={`${styles.coin} ${styles.coinThree}`}>
              VE
            </div>

            {/* Sparkles */}
            <Sparkles
              className={`${styles.sparkle} ${styles.sparkleOne}`}
              size={16}
            />

            <Sparkles
              className={`${styles.sparkle} ${styles.sparkleTwo}`}
              size={12}
            />

          </div>

        </div>

        {/* =========================================
            BOTTOM FEATURE STRIP
        ========================================= */}
        <div className={styles.featureStrip}>

          <div className={styles.featureItem}>
            <div className={`${styles.featureIcon} ${styles.blueIcon}`}>
              <Users size={21} />
            </div>

            <div>
              <strong>Invite &amp; Earn</strong>
              <span>
                Earn eligible rewards through referrals.
              </span>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={`${styles.featureIcon} ${styles.purpleIcon}`}>
              <Gift size={21} />
            </div>

            <div>
              <strong>Exciting Rewards</strong>
              <span>
                Unlock eligible rewards and bonuses.
              </span>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={`${styles.featureIcon} ${styles.goldIcon}`}>
              <TrendingUp size={21} />
            </div>

            <div>
              <strong>Track Easily</strong>
              <span>
                Monitor your referral activity.
              </span>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={`${styles.featureIcon} ${styles.greenIcon}`}>
              <ShieldCheck size={21} />
            </div>

            <div>
              <strong>Trusted &amp; Secure</strong>
              <span>
                Clear and transparent reward tracking.
              </span>
            </div>
          </div>

        </div>

      </section>
    </BannerContainer>
  );
};

export default ReferEarnBanner;