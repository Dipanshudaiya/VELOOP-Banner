import React from 'react';
import { Check } from 'lucide-react';
import CaptchaBrowserCard from './CaptchaBrowserCard';
import styles from '../CaptchaTasksBanner.module.css';

/**
 * CaptchaVisualStage Component
 * Single Responsibility: Render the 3D visual scene including Pedestal, Coins, Shield, Particles & Browser Card
 */
const CaptchaVisualStage = ({
  captchaCode,
  isVerified,
  isVerifying,
  onVerify,
  onReset
}) => {
  return (
    <div className={styles.stageViewport}>
      {/* Background Ambient Glows */}
      <div className={styles.ambientBlueGlow} />
      <div className={styles.ambientPurpleGlow} />
      <div className={styles.ambientCyanGlow} />

      {/* Floating 3D Geometric Confetti & Particles */}
      <div className={`${styles.confetti} ${styles.confettiCyanTri1}`} />
      <div className={`${styles.confetti} ${styles.confettiCyanTri2}`} />
      <div className={`${styles.confetti} ${styles.confettiPinkRect1}`} />
      <div className={`${styles.confetti} ${styles.confettiPinkRect2}`} />
      <div className={`${styles.confetti} ${styles.confettiPurpleDiamond}`} />
      <div className={`${styles.confetti} ${styles.sparkleCyan}`} />
      <div className={`${styles.confetti} ${styles.sparkleMagenta}`} />

      {/* 3D Floating "V" Coins */}

      {/* Top-Left Coin (Large) */}
      <div className={`${styles.vCoin3d} ${styles.coinTopLeft}`}>
        <div className={styles.coinOuterRing}>
          <div className={styles.coinInnerDisc}>
            <div className={styles.coinBevelRing} />
            <span className={styles.coinLetter}>V</span>
          </div>
        </div>
      </div>

      {/* Middle-Left Coin (Medium) */}
      <div className={`${styles.vCoin3d} ${styles.coinMidLeft}`}>
        <div className={styles.coinOuterRing}>
          <div className={styles.coinInnerDisc}>
            <div className={styles.coinBevelRing} />
            <span className={styles.coinLetter}>V</span>
          </div>
        </div>
      </div>

      {/* Bottom-Right Coin (Large) */}
      <div className={`${styles.vCoin3d} ${styles.coinBottomRight}`}>
        <div className={styles.coinOuterRing}>
          <div className={styles.coinInnerDisc}>
            <div className={styles.coinBevelRing} />
            <span className={styles.coinLetter}>V</span>
          </div>
        </div>
      </div>

      {/* Main Perspective Browser Window */}
      <CaptchaBrowserCard
        captchaCode={captchaCode}
        isVerified={isVerified}
        isVerifying={isVerifying}
        onVerify={onVerify}
        onReset={onReset}
      />

      {/* Metallic 3D Security Shield Badge */}
      <div className={styles.metallicShield3d}>
        <div className={styles.shieldGlowBorder}>
          <div className={styles.shieldBody}>
            <div className={styles.shieldCheckBadge}>
              <Check size={28} strokeWidth={3.5} />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Glowing Elliptical Pedestal / Platform */}
      <div className={styles.pedestalPlatform}>
        <div className={styles.pedestalTopRing} />
        <div className={styles.pedestalMidBody} />
        <div className={styles.pedestalBaseGlow} />
        <div className={styles.pedestalNeonEdge} />
      </div>
    </div>
  );
};

export default CaptchaVisualStage;
