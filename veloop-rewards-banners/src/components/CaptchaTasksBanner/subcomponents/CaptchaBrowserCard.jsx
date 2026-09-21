import React from 'react';
import { Check, RefreshCw } from 'lucide-react';
import styles from '../CaptchaTasksBanner.module.css';

/**
 * CaptchaBrowserCard Component
 * Single Responsibility: Render the interactive 3D browser window with Captcha challenge card
 */
const CaptchaBrowserCard = ({
  captchaCode = "A7X9B",
  isVerified,
  isVerifying,
  onVerify,
  onReset
}) => {
  return (
    <div className={styles.browserContainer}>
      <div className={styles.browserFrame}>
        {/* Browser Top Bar */}
        <div className={styles.browserHeaderBar}>
          <div className={styles.windowControls}>
            <span className={styles.dotCyan} />
            <span className={styles.dotBlue} />
            <span className={styles.dotMagenta} />
          </div>
        </div>

        {/* Inner Card Container */}
        <div className={styles.cardInnerContent}>
          <p className={styles.cardPromptText}>Verify you are human</p>

          {/* Captcha Code Box */}
          <div className={styles.captchaDisplayCard}>
            {/* Wavy distortion lines SVG overlay */}
            <svg className={styles.distortionSvg} viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M 0,15 Q 40,35 80,15 T 160,25 T 200,10" fill="none" stroke="rgba(30, 27, 75, 0.35)" strokeWidth="2.5" />
              <path d="M 0,35 Q 50,10 100,40 T 200,30" fill="none" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="2" />
              <path d="M 0,45 Q 60,20 120,48 T 200,40" fill="none" stroke="rgba(192, 38, 211, 0.25)" strokeWidth="1.8" />
            </svg>

            {/* Captcha Handwritten Text */}
            <span className={styles.captchaCodeString}>{captchaCode}</span>

            {/* Green Checkmark Circle Badge */}
            <div className={`${styles.greenCheckBadge} ${isVerified ? styles.badgeVerified : ''}`}>
              <Check size={20} strokeWidth={3} />
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            className={`${styles.verifySubmitBtn} ${isVerified ? styles.btnSuccess : ''}`}
            onClick={isVerified ? onReset : onVerify}
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <RefreshCw size={16} className={styles.spinnerIcon} />
                <span>Verifying...</span>
              </>
            ) : isVerified ? (
              <>
                <Check size={16} strokeWidth={2.5} />
                <span>Verified!</span>
              </>
            ) : (
              <span>Verify</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptchaBrowserCard;
