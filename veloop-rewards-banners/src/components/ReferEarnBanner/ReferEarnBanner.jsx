import React, { useState } from 'react';
import { Users, Copy, Check, Link2, ShieldCheck, Gift, Star, Coins, Diamond, Trophy } from 'lucide-react';
import BannerContainer from '../common/BannerContainer';
import RewardBadge from '../common/RewardBadge';
import BannerCTA from '../common/BannerCTA';
import styles from './ReferEarnBanner.module.css';

const ReferEarnBanner = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'VELOOP123';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <BannerContainer variant="blue">
      <div className={styles.bannerGrid}>
        {/* Content Column */}
        <div className={styles.contentCol}>

          {/* ========== SVG ILLUSTRATION ========== */}
          <div className={styles.illustrationArea}>
            {/* Background Glow */}
            <div className={styles.illustrationGlow} />

            {/* Dashed Arc Connection Line */}
            <svg className={styles.dashedArc} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 100 C60 20, 200 -10, 200 30 C200 -10, 340 20, 340 100" 
                stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
            </svg>

            {/* Top Center - Users/Referral Icon */}
            <div className={`${styles.floatingIcon} ${styles.iconUsers}`}>
              <Users size={18} />
            </div>

            {/* Top Right - Cursor Arrow */}
            <div className={`${styles.floatingIcon} ${styles.iconCursor}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M4 2l16 12H12l-2 8L4 2z"/>
              </svg>
            </div>

            {/* Character Left - Boy with Blue Jacket */}
            <div className={styles.characterLeft}>
              <svg width="110" height="150" viewBox="0 0 120 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Blue circular backdrop glow */}
                <circle cx="60" cy="65" r="55" fill="url(#boyBg)" opacity="0.6" />
                
                {/* Body / Blue Jacket */}
                <path d="M28 92 C28 80, 40 72, 60 72 C80 72, 92 80, 92 92 L95 148 C95 152, 92 155, 88 155 L32 155 C28 155, 25 152, 25 148 Z" fill="url(#blueJacket)" />
                {/* Jacket shadow/fold line */}
                <path d="M60 74 L60 120" stroke="#1E40AF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                {/* Collar / V-neck showing white tee */}
                <path d="M48 74 L60 72 L72 74 L68 88 L52 88 Z" fill="#E8EDF5" />
                {/* Left Shoulder highlight */}
                <path d="M28 92 C30 84, 38 76, 48 74" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
                
                {/* Left Arm holding phone */}
                <path d="M28 92 C22 100, 16 112, 14 120 C12 126, 14 128, 18 128 L26 128 C28 128, 30 126, 30 124 L36 100 Z" fill="url(#blueJacket)" />
                {/* Phone in left hand */}
                <rect x="8" y="112" width="18" height="30" rx="4" fill="#1E293B" />
                <rect x="10" y="115" width="14" height="22" rx="2" fill="#0F172A" />
                {/* Phone screen glow */}
                <rect x="11" y="116" width="12" height="20" rx="1.5" fill="url(#screenGlow)" opacity="0.7" />
                {/* Hand wrapped around phone */}
                <path d="M8 118 C5 118, 4 120, 4 123 C4 126, 5 130, 8 132" stroke="#EDBA6A" strokeWidth="5" strokeLinecap="round" fill="none" />
                
                {/* Right Arm */}
                <path d="M92 92 C96 100, 100 112, 100 120 L94 122 L84 100 Z" fill="url(#blueJacket)" />
                <path d="M96 120 C100 120, 102 122, 102 125 C102 128, 100 130, 96 130" stroke="#EDBA6A" strokeWidth="5" strokeLinecap="round" fill="none" />
                
                {/* Neck */}
                <rect x="52" y="60" width="16" height="14" rx="5" fill="#EDBA6A" />
                
                {/* Head - smooth rounded */}
                <ellipse cx="60" cy="38" rx="22" ry="24" fill="#F5C978" />
                {/* Face shadow for depth */}
                <ellipse cx="60" cy="42" rx="20" ry="20" fill="#EDBA6A" opacity="0.6" />
                
                {/* Hair - styled short dark hair with volume */}
                <path d="M38 30 C38 14, 50 6, 62 6 C76 6, 84 16, 84 30 C84 34, 82 36, 80 36 L80 28 C80 18, 72 12, 60 12 C48 12, 40 18, 40 28 L40 36 C38 36, 38 34, 38 30 Z" fill="#1A1A2E" />
                {/* Hair highlight */}
                <path d="M50 10 C55 8, 65 8, 72 12" stroke="#2A2A42" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Side hair */}
                <path d="M38 30 L38 42 C38 42, 36 40, 36 36 C36 32, 37 30, 38 30 Z" fill="#1A1A2E" />
                <path d="M82 30 L82 42 C82 42, 84 40, 84 36 C84 32, 83 30, 82 30 Z" fill="#1A1A2E" />
                
                {/* Eyes - larger, expressive */}
                <ellipse cx="50" cy="38" rx="4" ry="4.5" fill="white" />
                <ellipse cx="70" cy="38" rx="4" ry="4.5" fill="white" />
                <ellipse cx="51" cy="39" rx="2.8" ry="3" fill="#1E293B" />
                <ellipse cx="71" cy="39" rx="2.8" ry="3" fill="#1E293B" />
                {/* Pupil highlights */}
                <circle cx="52.5" cy="37.5" r="1.2" fill="white" />
                <circle cx="72.5" cy="37.5" r="1.2" fill="white" />
                <circle cx="50" cy="40" r="0.6" fill="white" opacity="0.5" />
                <circle cx="70" cy="40" r="0.6" fill="white" opacity="0.5" />
                
                {/* Eyebrows - friendly arch */}
                <path d="M45 32 C47 29, 53 29, 55 31" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M65 31 C67 29, 73 29, 75 32" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none" />
                
                {/* Nose - subtle */}
                <path d="M58 42 C59 44, 61 44, 62 42" stroke="#D4A24E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                
                {/* Smile - warm, friendly */}
                <path d="M50 48 C54 53, 66 53, 70 48" stroke="#C07A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Teeth hint */}
                <path d="M54 49 C57 52, 63 52, 66 49" fill="white" opacity="0.8" />
                
                {/* Ears */}
                <ellipse cx="38" cy="40" rx="4" ry="5" fill="#EDBA6A" />
                <ellipse cx="38" cy="40" rx="2" ry="3" fill="#D4A24E" opacity="0.4" />
                <ellipse cx="82" cy="40" rx="4" ry="5" fill="#EDBA6A" />
                <ellipse cx="82" cy="40" rx="2" ry="3" fill="#D4A24E" opacity="0.4" />
                
                {/* Cheek blush */}
                <circle cx="44" cy="45" r="4" fill="#F5A0A0" opacity="0.2" />
                <circle cx="76" cy="45" r="4" fill="#F5A0A0" opacity="0.2" />
                
                <defs>
                  <radialGradient id="boyBg" cx="0.5" cy="0.4" r="0.5">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="blueJacket" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Central Gift Box */}
            <div className={styles.giftContainer}>
              <svg width="110" height="120" viewBox="0 0 110 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Glow under the box */}
                <ellipse cx="55" cy="115" rx="45" ry="6" fill="url(#giftGlow)" />
                {/* Box body */}
                <rect x="15" y="50" width="80" height="55" rx="6" fill="url(#giftBody)" />
                {/* Box lid */}
                <rect x="10" y="40" width="90" height="15" rx="5" fill="url(#giftLid)" />
                {/* Vertical ribbon */}
                <rect x="49" y="40" width="12" height="65" fill="url(#ribbon)" />
                {/* Horizontal ribbon */}
                <rect x="15" y="62" width="80" height="12" fill="url(#ribbon)" />
                {/* Bow left */}
                <ellipse cx="42" cy="38" rx="14" ry="10" fill="#F59E0B" />
                <ellipse cx="42" cy="38" rx="10" ry="7" fill="#FBBF24" />
                {/* Bow right */}
                <ellipse cx="68" cy="38" rx="14" ry="10" fill="#F59E0B" />
                <ellipse cx="68" cy="38" rx="10" ry="7" fill="#FBBF24" />
                {/* Bow center knot */}
                <circle cx="55" cy="40" r="6" fill="#D97706" />
                <circle cx="55" cy="40" r="4" fill="#F59E0B" />
                {/* Shine on box */}
                <rect x="20" y="52" width="3" height="45" rx="1.5" fill="rgba(255,255,255,0.15)" />
                <defs>
                  <linearGradient id="giftBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="giftLid" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                  <radialGradient id="giftGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Character Right - Girl with Purple Jacket */}
            <div className={styles.characterRight}>
              <svg width="110" height="150" viewBox="0 0 120 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Purple circular backdrop glow */}
                <circle cx="60" cy="65" r="55" fill="url(#girlBg)" opacity="0.6" />
                
                {/* Body / Purple Jacket */}
                <path d="M28 92 C28 80, 40 72, 60 72 C80 72, 92 80, 92 92 L95 148 C95 152, 92 155, 88 155 L32 155 C28 155, 25 152, 25 148 Z" fill="url(#purpleJacket)" />
                {/* Jacket fold line */}
                <path d="M60 74 L60 120" stroke="#6D28D9" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                {/* Collar / V-neck white top */}
                <path d="M48 74 L60 72 L72 74 L68 88 L52 88 Z" fill="#E8EDF5" />
                {/* Left Shoulder highlight */}
                <path d="M28 92 C30 84, 38 76, 48 74" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
                
                {/* Right Arm holding phone */}
                <path d="M92 92 C98 100, 104 112, 106 120 C108 126, 106 128, 102 128 L94 128 C92 128, 90 126, 90 124 L84 100 Z" fill="url(#purpleJacket)" />
                {/* Phone in right hand */}
                <rect x="94" y="112" width="18" height="30" rx="4" fill="#1E293B" />
                <rect x="96" y="115" width="14" height="22" rx="2" fill="#0F172A" />
                {/* Phone screen glow */}
                <rect x="97" y="116" width="12" height="20" rx="1.5" fill="url(#screenGlowPurple)" opacity="0.7" />
                {/* Hand wrapped around phone */}
                <path d="M112 118 C115 118, 116 120, 116 123 C116 126, 115 130, 112 132" stroke="#EDBA6A" strokeWidth="5" strokeLinecap="round" fill="none" />
                
                {/* Left Arm */}
                <path d="M28 92 C24 100, 20 112, 20 120 L26 122 L36 100 Z" fill="url(#purpleJacket)" />
                <path d="M24 120 C20 120, 18 122, 18 125 C18 128, 20 130, 24 130" stroke="#EDBA6A" strokeWidth="5" strokeLinecap="round" fill="none" />
                
                {/* Neck */}
                <rect x="52" y="60" width="16" height="14" rx="5" fill="#EDBA6A" />
                
                {/* Head - smooth rounded */}
                <ellipse cx="60" cy="38" rx="22" ry="24" fill="#F5C978" />
                {/* Face shadow for depth */}
                <ellipse cx="60" cy="42" rx="20" ry="20" fill="#EDBA6A" opacity="0.6" />
                
                {/* Long flowing hair - main shape */}
                <path d="M36 28 C36 12, 48 4, 60 4 C72 4, 84 12, 84 28 L84 36 C84 36, 86 34, 86 30 C86 14, 74 2, 60 2 C46 2, 34 14, 34 30 C34 34, 36 36, 36 36 Z" fill="#1A1A2E" />
                {/* Hair flowing down left */}
                <path d="M36 36 C34 38, 32 45, 30 60 C28 72, 26 85, 28 95 C30 100, 34 98, 36 90 L36 36 Z" fill="#1A1A2E" />
                {/* Hair flowing down right */}
                <path d="M84 36 C86 38, 88 45, 90 60 C92 72, 94 85, 92 95 C90 100, 86 98, 84 90 L84 36 Z" fill="#1A1A2E" />
                {/* Hair highlights */}
                <path d="M48 8 C54 5, 66 5, 74 10" stroke="#2A2A42" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M33 50 C32 60, 30 72, 30 80" stroke="#2A2A42" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M87 50 C88 60, 90 72, 90 80" stroke="#2A2A42" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
                {/* Bangs/fringe */}
                <path d="M40 28 C42 22, 50 18, 58 20 C56 24, 48 26, 40 28 Z" fill="#222238" />
                
                {/* Eyes - larger, expressive with eyelashes */}
                <ellipse cx="50" cy="38" rx="4" ry="4.5" fill="white" />
                <ellipse cx="70" cy="38" rx="4" ry="4.5" fill="white" />
                <ellipse cx="51" cy="39" rx="2.8" ry="3" fill="#1E293B" />
                <ellipse cx="71" cy="39" rx="2.8" ry="3" fill="#1E293B" />
                {/* Pupil highlights */}
                <circle cx="52.5" cy="37.5" r="1.2" fill="white" />
                <circle cx="72.5" cy="37.5" r="1.2" fill="white" />
                <circle cx="50" cy="40" r="0.6" fill="white" opacity="0.5" />
                <circle cx="70" cy="40" r="0.6" fill="white" opacity="0.5" />
                {/* Eyelashes */}
                <path d="M46 34 C47 33, 48 33, 49 33.5" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M53 33.5 C54 33, 55 33, 56 34" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M66 34 C67 33, 68 33, 69 33.5" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M73 33.5 C74 33, 75 33, 76 34" stroke="#1A1A2E" strokeWidth="1" strokeLinecap="round" fill="none" />
                
                {/* Eyebrows - feminine arch */}
                <path d="M45 32 C47 29, 53 29, 55 31" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M65 31 C67 29, 73 29, 75 32" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                
                {/* Nose - subtle */}
                <path d="M58 42 C59 44, 61 44, 62 42" stroke="#D4A24E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                
                {/* Smile */}
                <path d="M50 48 C54 53, 66 53, 70 48" stroke="#C07A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Teeth hint */}
                <path d="M54 49 C57 52, 63 52, 66 49" fill="white" opacity="0.8" />
                
                {/* Ears */}
                <ellipse cx="36" cy="40" rx="4" ry="5" fill="#EDBA6A" />
                <ellipse cx="36" cy="40" rx="2" ry="3" fill="#D4A24E" opacity="0.4" />
                <ellipse cx="84" cy="40" rx="4" ry="5" fill="#EDBA6A" />
                <ellipse cx="84" cy="40" rx="2" ry="3" fill="#D4A24E" opacity="0.4" />
                {/* Earrings */}
                <circle cx="35" cy="46" r="2.5" fill="url(#earringGrad)" />
                <circle cx="85" cy="46" r="2.5" fill="url(#earringGrad)" />
                
                {/* Cheek blush */}
                <circle cx="44" cy="45" r="4.5" fill="#F5A0A0" opacity="0.2" />
                <circle cx="76" cy="45" r="4.5" fill="#F5A0A0" opacity="0.2" />
                
                <defs>
                  <radialGradient id="girlBg" cx="0.5" cy="0.4" r="0.5">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="purpleJacket" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                  <linearGradient id="screenGlowPurple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="earringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating VE Coins */}
            <div className={`${styles.floatingCoin} ${styles.coin1}`}>
              <span>VE</span>
            </div>
            <div className={`${styles.floatingCoin} ${styles.coin2}`}>
              <span>VE</span>
            </div>
            <div className={`${styles.floatingCoin} ${styles.coin3}`}>
              <span>VE</span>
            </div>
            <div className={`${styles.floatingCoin} ${styles.coin4}`}>
              <span>VE</span>
            </div>

            {/* Floating Shield Icon */}
            <div className={`${styles.floatingIcon} ${styles.iconShield}`}>
              <ShieldCheck size={16} />
            </div>

            {/* Floating Star Badge */}
            <div className={`${styles.floatingIcon} ${styles.iconStar}`}>
              <div className={styles.starBadge}>
                <Star size={14} fill="#fbbf24" />
              </div>
            </div>

            {/* Small Blue Star bottom right */}
            <div className={`${styles.floatingIcon} ${styles.iconSmallStar}`}>
              <Star size={12} fill="#60a5fa" stroke="#60a5fa" />
            </div>
          </div>

          {/* ========== BADGE ========== */}
          <RewardBadge icon={<Users size={14} />} variant="blue">
            REFERRAL PROGRAM
          </RewardBadge>

          {/* ========== HEADING ========== */}
          <h2 className={styles.title}>
            Refer Friends,<br />
            <span className="text-gradient-blue">Earn Rewards</span>
          </h2>

          {/* ========== DESCRIPTION ========== */}
          <p className={styles.description}>
            Invite your friends to VELOOP Rewards and unlock exciting rewards when they complete eligible activities.
          </p>

          {/* ========== REWARD OPPORTUNITIES CARD ========== */}
          <div className={styles.rewardOpportunities}>
            <div className={styles.rewardOpLabel}>
              <Gift size={14} className={styles.rewardOpLabelIcon} />
              <span>REWARD OPPORTUNITIES</span>
            </div>
            <div className={styles.rewardOpItems}>
              <div className={styles.rewardChip}>
                <span className={`${styles.chipCircle} ${styles.chipGold}`}>V</span>
                <span>VEs</span>
              </div>
              <span className={styles.chipDot}>•</span>
              <div className={styles.rewardChip}>
                <Coins size={14} className={styles.chipCyanIcon} />
                <span>Spins</span>
              </div>
              <span className={styles.chipDot}>•</span>
              <div className={styles.rewardChip}>
                <Star size={14} className={styles.chipGreenIcon} />
                <span>Tokens</span>
              </div>
              <span className={styles.chipDot}>•</span>
              <div className={styles.rewardChip}>
                <Diamond size={14} className={styles.chipPurpleIcon} />
                <span>Gems</span>
              </div>
              <span className={styles.chipDot}>•</span>
              <div className={styles.rewardChip}>
                <Trophy size={14} className={styles.chipBlueIcon} />
                <span>XP</span>
              </div>
            </div>
          </div>

          {/* ========== REFERRAL CODE CARD ========== */}
          <div className={styles.referralCodeCard}>
            <div className={styles.referralCodeLeft}>
              <div className={styles.linkIconWrap}>
                <Link2 size={18} />
              </div>
              <div>
                <span className={styles.referralLabel}>YOUR REFERRAL CODE</span>
                <span className={styles.codeText}>{referralCode}</span>
              </div>
            </div>
            <button 
              type="button" 
              className={styles.copyBtn} 
              onClick={handleCopy}
              aria-label="Copy referral code"
            >
              {copied ? <Check size={14} className={styles.checkIcon} /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* ========== CTA ========== */}
          <div className={styles.ctaGroup}>
            <BannerCTA variant="blue" ariaLabel="Invite Friends Now">
              Invite Now
            </BannerCTA>
          </div>

          {/* ========== BOTTOM FEATURE STRIP ========== */}
          <div className={styles.bottomFeatureStrip}>
            <div className={styles.featureItem}>
              <div className={`${styles.featureIconCircle} ${styles.fCircleBlue}`}>
                <Link2 size={13} />
              </div>
              <div>
                <strong>Easy to Share</strong>
                <p>Share your link or code in one click.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={`${styles.featureIconCircle} ${styles.fCircleOrange}`}>
                <Gift size={13} />
              </div>
              <div>
                <strong>Instant Rewards</strong>
                <p>Earn rewards when friends join.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={`${styles.featureIconCircle} ${styles.fCircleGreen}`}>
                <ShieldCheck size={13} />
              </div>
              <div>
                <strong>100% Secure</strong>
                <p>Real-time referral tracking.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column — Desktop Only Illustration */}
        <div className={styles.visualCol}>
          <div className={styles.desktopIllustration}>
            {/* Same illustration elements rendered for desktop right column */}
            <div className={styles.desktopStage}>
              <svg className={styles.dashedArcDesktop} viewBox="0 0 400 120" fill="none">
                <path d="M60 100 C60 20, 200 -10, 200 30 C200 -10, 340 20, 340 100" 
                  stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
              </svg>

              <div className={`${styles.dFloatingIcon} ${styles.dIconUsers}`}>
                <Users size={16} />
              </div>

              <div className={styles.dCharLeft}>
                <svg width="85" height="120" viewBox="0 0 100 140" fill="none">
                  <circle cx="50" cy="55" r="48" fill="url(#dBoyBg)" opacity="0.5" />
                  <ellipse cx="50" cy="32" rx="20" ry="18" fill="#1E293B" />
                  <path d="M32 28 C32 18, 50 10, 62 18 C68 22, 68 32, 68 32 L62 30 C60 22, 42 18, 36 28 Z" fill="#0F172A" />
                  <ellipse cx="50" cy="36" rx="17" ry="18" fill="#FBBF68" />
                  <ellipse cx="43" cy="34" rx="2.5" ry="3" fill="#1E293B" />
                  <ellipse cx="57" cy="34" rx="2.5" ry="3" fill="#1E293B" />
                  <circle cx="44" cy="33" r="1" fill="white" opacity="0.7" />
                  <circle cx="58" cy="33" r="1" fill="white" opacity="0.7" />
                  <path d="M43 41 C46 44, 54 44, 57 41" stroke="#C17A3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <ellipse cx="33" cy="36" rx="3" ry="4" fill="#E8A84C" />
                  <ellipse cx="67" cy="36" rx="3" ry="4" fill="#E8A84C" />
                  <rect x="44" y="52" width="12" height="8" rx="3" fill="#E8A84C" />
                  <path d="M25 70 C25 60, 35 56, 50 56 C65 56, 75 60, 75 70 L78 115 C78 118, 75 120, 72 120 L28 120 C25 120, 22 118, 22 115 Z" fill="url(#dBlueJ)" />
                  <line x1="50" y1="58" x2="50" y2="90" stroke="#1E40AF" strokeWidth="1.5" />
                  <path d="M42 58 L50 56 L58 58 L56 72 L44 72 Z" fill="#E2E8F0" />
                  <path d="M25 70 L15 95 L20 96 L32 75 Z" fill="url(#dBlueJ)" />
                  <rect x="10" y="88" width="14" height="24" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <rect x="12" y="91" width="10" height="17" rx="1" fill="#3B82F6" opacity="0.4" />
                  <path d="M75 70 L85 95 L80 96 L68 75 Z" fill="url(#dBlueJ)" />
                  <ellipse cx="17" cy="88" rx="5" ry="4" fill="#E8A84C" />
                  <defs>
                    <radialGradient id="dBoyBg" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
                    </radialGradient>
                    <linearGradient id="dBlueJ" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className={styles.dGift}>
                <svg width="95" height="105" viewBox="0 0 110 120" fill="none">
                  <ellipse cx="55" cy="115" rx="45" ry="6" fill="url(#dGiftGl)" />
                  <rect x="15" y="50" width="80" height="55" rx="6" fill="url(#dGiftBd)" />
                  <rect x="10" y="40" width="90" height="15" rx="5" fill="url(#dGiftLd)" />
                  <rect x="49" y="40" width="12" height="65" fill="url(#dRibbon)" />
                  <rect x="15" y="62" width="80" height="12" fill="url(#dRibbon)" />
                  <ellipse cx="42" cy="38" rx="14" ry="10" fill="#F59E0B" />
                  <ellipse cx="42" cy="38" rx="10" ry="7" fill="#FBBF24" />
                  <ellipse cx="68" cy="38" rx="14" ry="10" fill="#F59E0B" />
                  <ellipse cx="68" cy="38" rx="10" ry="7" fill="#FBBF24" />
                  <circle cx="55" cy="40" r="6" fill="#D97706" />
                  <circle cx="55" cy="40" r="4" fill="#F59E0B" />
                  <rect x="20" y="52" width="3" height="45" rx="1.5" fill="rgba(255,255,255,0.15)" />
                  <defs>
                    <linearGradient id="dGiftBd" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                    <linearGradient id="dGiftLd" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="dRibbon" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>
                    <radialGradient id="dGiftGl" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              <div className={styles.dCharRight}>
                <svg width="85" height="120" viewBox="0 0 100 140" fill="none">
                  <circle cx="50" cy="55" r="48" fill="url(#dGirlBg)" opacity="0.5" />
                  <ellipse cx="50" cy="34" rx="22" ry="20" fill="#1E293B" />
                  <path d="M28 34 C28 34, 28 65, 30 75 C32 80, 34 78, 34 70 L34 45 C34 35, 40 28, 50 26 C60 28, 66 35, 66 45 L66 70 C66 78, 68 80, 70 75 C72 65, 72 34, 72 34" fill="#0F172A" />
                  <ellipse cx="50" cy="36" rx="16" ry="18" fill="#FBBF68" />
                  <ellipse cx="43" cy="34" rx="2.5" ry="3" fill="#1E293B" />
                  <ellipse cx="57" cy="34" rx="2.5" ry="3" fill="#1E293B" />
                  <circle cx="44" cy="33" r="1" fill="white" opacity="0.7" />
                  <circle cx="58" cy="33" r="1" fill="white" opacity="0.7" />
                  <path d="M43 41 C46 44, 54 44, 57 41" stroke="#C17A3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <ellipse cx="34" cy="36" rx="3" ry="4" fill="#E8A84C" />
                  <ellipse cx="66" cy="36" rx="3" ry="4" fill="#E8A84C" />
                  <circle cx="66" cy="41" r="2" fill="#C084FC" />
                  <rect x="44" y="52" width="12" height="8" rx="3" fill="#E8A84C" />
                  <path d="M25 70 C25 60, 35 56, 50 56 C65 56, 75 60, 75 70 L78 115 C78 118, 75 120, 72 120 L28 120 C25 120, 22 118, 22 115 Z" fill="url(#dPurpJ)" />
                  <line x1="50" y1="58" x2="50" y2="90" stroke="#6D28D9" strokeWidth="1.5" />
                  <path d="M42 58 L50 56 L58 58 L56 72 L44 72 Z" fill="#E2E8F0" />
                  <path d="M75 70 L85 95 L80 96 L68 75 Z" fill="url(#dPurpJ)" />
                  <rect x="76" y="88" width="14" height="24" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <rect x="78" y="91" width="10" height="17" rx="1" fill="#8B5CF6" opacity="0.4" />
                  <path d="M25 70 L15 95 L20 96 L32 75 Z" fill="url(#dPurpJ)" />
                  <ellipse cx="83" cy="88" rx="5" ry="4" fill="#E8A84C" />
                  <defs>
                    <radialGradient id="dGirlBg" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#581C87" stopOpacity="0.1" />
                    </radialGradient>
                    <linearGradient id="dPurpJ" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Desktop floating coins */}
              <div className={`${styles.dCoin} ${styles.dCoin1}`}><span>VE</span></div>
              <div className={`${styles.dCoin} ${styles.dCoin2}`}><span>VE</span></div>
              <div className={`${styles.dCoin} ${styles.dCoin3}`}><span>VE</span></div>

              <div className={`${styles.dFloatingIcon} ${styles.dIconShield}`}>
                <ShieldCheck size={14} />
              </div>
              <div className={`${styles.dFloatingIcon} ${styles.dIconStar}`}>
                <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default ReferEarnBanner;
