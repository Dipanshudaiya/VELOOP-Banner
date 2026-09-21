import React from 'react';
import styles from '../CaptchaTasksBanner.module.css';

/**
 * CaptchaHeroContent Component
 * Single Responsibility: Render the title and description for Captcha Tasks banner
 */
const CaptchaHeroContent = ({ titleFirst = "Complete Captcha,", titleGradient = "Earn Rewards", descriptionLine1 = "Solve captcha tasks and", descriptionLine2 = "earn exciting rewards instantly." }) => {
  return (
    <div className={styles.heroTextGroup}>
      <h2 className={styles.heroTitle}>
        {titleFirst}
        <br />
        <span className={styles.gradientTitleText}>
          {titleGradient}
        </span>
      </h2>

      <p className={styles.heroDescription}>
        {descriptionLine1}
        <br />
        {descriptionLine2}
      </p>
    </div>
  );
};

export default CaptchaHeroContent;
