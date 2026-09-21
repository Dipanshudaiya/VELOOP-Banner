import React, { useState } from 'react';
import BannerContainer from '../common/BannerContainer';
import CaptchaBadge from './subcomponents/CaptchaBadge';
import CaptchaHeroContent from './subcomponents/CaptchaHeroContent';
import CaptchaActions from './subcomponents/CaptchaActions';
import CaptchaVisualStage from './subcomponents/CaptchaVisualStage';
import styles from './CaptchaTasksBanner.module.css';

/**
 * CaptchaTasksBanner Container Component
 * Follows SOLID Principles:
 * - Single Responsibility (SRP): Orchestrates layout and verification state between modular components.
 * - Open/Closed (OCP): Subcomponents are modular & configurable via props.
 * - Interface Segregation (ISP) & Dependency Inversion (DIP): Decoupled UI logic.
 */
const CaptchaTasksBanner = () => {
  const [captchaCode, setCaptchaCode] = useState('A7X9B');
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    if (isVerified || isVerifying) return;
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 700);
  };

  const handleReset = () => {
    setIsVerified(false);
    setIsVerifying(false);
    const codes = ['A7X9B', 'K9M4P', 'V8R2T', 'X3N7L'];
    const nextCode = codes[(codes.indexOf(captchaCode) + 1) % codes.length];
    setCaptchaCode(nextCode);
  };

  return (
    <BannerContainer variant="purple">
      <div className={styles.bannerContainerGrid}>
        {/* Left Column: Information & Actions */}
        <div className={styles.leftContentColumn}>
          <CaptchaBadge text="CAPTCHA TASKS" />

          <CaptchaHeroContent
            titleFirst="Complete Captcha,"
            titleGradient="Earn Rewards"
            descriptionLine1="Solve captcha tasks and"
            descriptionLine2="earn exciting rewards instantly."
          />

          <CaptchaActions
            onPrimaryClick={handleVerify}
            onSecondaryClick={handleReset}
          />
        </div>

        {/* Right Column: 3D Visual Stage with Coins, Pedestal & Browser */}
        <div className={styles.rightVisualColumn}>
          <CaptchaVisualStage
            captchaCode={captchaCode}
            isVerified={isVerified}
            isVerifying={isVerifying}
            onVerify={handleVerify}
            onReset={handleReset}
          />
        </div>
      </div>
    </BannerContainer>
  );
};

export default CaptchaTasksBanner;