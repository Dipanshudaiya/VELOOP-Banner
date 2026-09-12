import React, { useState } from 'react';
import { ShieldCheck, Check, ArrowRight, RefreshCw, Diamond } from 'lucide-react';
import BannerContainer from '../common/BannerContainer';
import RewardBadge from '../common/RewardBadge';
import BannerCTA from '../common/BannerCTA';
import styles from './CaptchaTasksBanner.module.css';

const CaptchaTasksBanner = () => {
  const [captchaInput, setCaptchaInput] = useState('K7M4');
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    if (isVerified) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 800);
  };

  const handleReset = () => {
    setIsVerified(false);
    setCaptchaInput('K7M4');
  };

  return (
    <BannerContainer variant="purple">
      <div className={styles.bannerGrid}>
        {/* Left Column */}
        <div className={styles.contentCol}>
          <RewardBadge icon={<ShieldCheck size={14} />} variant="purple">
            VERIFICATION EARNING
          </RewardBadge>

          <h2 className={styles.title}>
            Solve Captchas. <br />
            <span className="text-gradient-purple">Earn Gems.</span>
          </h2>

          <p className={styles.description}>
            Complete simple captcha verification tasks accurately and earn eligible Gem rewards for verified submissions.
          </p>

          {/* Interactive CAPTCHA Test Widget & Workflow */}
          <div className={styles.workflowRow}>
            <div className={styles.captchaPreviewPill}>
              <span className={styles.captchaCodeText}>K7M4</span>
              <ArrowRight size={12} className={styles.flowArrow} />
              <button 
                type="button" 
                className={`${styles.verifyCheckBtn} ${isVerified ? styles.verifiedSuccess : ''}`}
                onClick={handleVerify}
              >
                {isVerifying ? (
                  <RefreshCw size={12} className={styles.spinIcon} />
                ) : isVerified ? (
                  <Check size={13} />
                ) : (
                  <span>Verify</span>
                )}
              </button>
              <ArrowRight size={12} className={styles.flowArrow} />
              <div className={styles.gemRewardTag}>
                <Diamond size={13} className={styles.gemIcon} />
                <span>Gem Reward</span>
              </div>
            </div>

            {isVerified && (
              <button type="button" className={styles.resetBtn} onClick={handleReset}>
                Reset Demo
              </button>
            )}
          </div>

          {/* CTA */}
          <div className={styles.ctaGroup}>
            <BannerCTA variant="purple" ariaLabel="Start Captcha Task Now">
              Start Task
            </BannerCTA>
          </div>
        </div>

        {/* Right Column: Custom 3D Terminal & Captcha Interface Visual */}
        <div className={styles.visualCol}>
          <div className={styles.terminalStage}>
            {/* Ambient Purple Glow */}
            <div className={styles.purpleGlow} />

            {/* 3D Computer Terminal Frame */}
            <div className={styles.terminalScreen}>
              <div className={styles.screenHeader}>
                <div className={styles.screenDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <span className={styles.screenTitle}>SECURITY VERIFICATION</span>
                <button type="button" className={styles.refreshIconBtn} onClick={handleReset}>
                  <RefreshCw size={12} />
                </button>
              </div>

              {/* CAPTCHA Display Area */}
              <div className={styles.captchaCodeDisplay}>
                <span className={styles.codeFont}>K7M4</span>
                <div className={styles.distortionLines} />
              </div>

              {/* Input & Checkmark Button */}
              <div className={styles.inputRow}>
                <div className={styles.textInputBox}>
                  <span>{captchaInput}</span>
                  <span className={styles.blinkingCursor}>|</span>
                </div>
                <button 
                  type="button" 
                  className={`${styles.screenCheckBtn} ${isVerified ? styles.checkedGreen : ''}`}
                  onClick={handleVerify}
                >
                  <Check size={18} />
                </button>
              </div>
            </div>

            {/* Terminal Keyboard Base */}
            <div className={styles.terminalKeyboard}>
              <div className={styles.keyGrid}>
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className={styles.keyCap} />
                ))}
              </div>
            </div>

            {/* Floating 3D Purple Gems */}
            <div className={`${styles.purpleGem} ${styles.g1}`}>
              <Diamond size={22} color="#f3e8ff" fill="#c084fc" />
            </div>
            <div className={`${styles.purpleGem} ${styles.g2}`}>
              <Diamond size={26} color="#f3e8ff" fill="#a78bfa" />
            </div>
            <div className={`${styles.purpleGem} ${styles.g3}`}>
              <Diamond size={18} color="#f3e8ff" fill="#8b5cf6" />
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default CaptchaTasksBanner;
