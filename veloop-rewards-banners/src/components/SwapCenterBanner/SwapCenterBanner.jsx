// import React, { useState } from 'react';
// import {
//   ArrowLeftRight,
//   RefreshCw,
//   Tag,
//   BarChart3,
//   ShieldCheck,
//   Wallet,
//   Percent,
//   Gift,
// } from 'lucide-react';

// import BannerContainer from '../common/BannerContainer';
// import RewardBadge from '../common/RewardBadge';
// import BannerCTA from '../common/BannerCTA';
// import styles from './SwapCenterBanner.module.css';

// const SwapCenterBanner = () => {
//   const [isSwapped, setIsSwapped] = useState(false);

//   const handleSwap = () => {
//     setIsSwapped((prev) => !prev);
//   };

//   return (
//     <BannerContainer variant="gold">
//       <div className={styles.banner}>

//         {/* ================= LEFT CONTENT ================= */}
//         <div className={styles.contentCol}>

//           <RewardBadge
//             icon={<ArrowLeftRight size={15} />}
//             variant="gold"
//           >
//             SWAP CENTER
//           </RewardBadge>

//           <h2 className={styles.title}>
//             Swap Smarter,
//             <span>Earn More!</span>
//           </h2>

//           <p className={styles.description}>
//             Swap your assets with low fees
//             <br className={styles.desktopBreak} />
//             and better rewards.
//           </p>

//           {/* Feature cards */}
//           <div className={styles.featureRow}>

//             <div className={styles.featureCard}>
//               <div className={`${styles.featureIcon} ${styles.goldIcon}`}>
//                 <Tag size={20} />
//               </div>

//               <div>
//                 <strong>Low Fees</strong>
//                 <span>Save more</span>
//               </div>
//             </div>

//             <div className={styles.featureCard}>
//               <div className={`${styles.featureIcon} ${styles.purpleIcon}`}>
//                 <BarChart3 size={20} />
//               </div>

//               <div>
//                 <strong>Better Rewards</strong>
//                 <span>Earn more</span>
//               </div>
//             </div>

//             <div className={styles.featureCard}>
//               <div className={`${styles.featureIcon} ${styles.cyanIcon}`}>
//                 <ShieldCheck size={20} />
//               </div>

//               <div>
//                 <strong>Secure & Safe</strong>
//                 <span>100% protected</span>
//               </div>
//             </div>

//           </div>

//           {/* CTA */}
//           <div className={styles.ctaWrapper}>
//             <BannerCTA
//               variant="gold"
//               ariaLabel="Swap Now"
//             >
//               Swap Now
//             </BannerCTA>

//             <button
//               type="button"
//               className={styles.previewSwapButton}
//               onClick={handleSwap}
//               aria-label="Preview swap"
//             >
//               <RefreshCw
//                 size={19}
//                 className={isSwapped ? styles.rotated : ''}
//               />
//             </button>
//           </div>

//         </div>

//         {/* ================= RIGHT VISUAL ================= */}
//         <div className={styles.visualCol}>

//           <div className={styles.visualScene}>

//             {/* Ambient glow */}
//             <div className={styles.mainGlow} />
//             <div className={styles.purpleGlow} />
//             <div className={styles.goldGlow} />

//             {/* Decorative particles */}
//             <span className={`${styles.particle} ${styles.p1}`} />
//             <span className={`${styles.particle} ${styles.p2}`} />
//             <span className={`${styles.particle} ${styles.p3}`} />
//             <span className={`${styles.particle} ${styles.p4}`} />
//             <span className={`${styles.particle} ${styles.p5}`} />

//             {/* Top curved arrow */}
//             <div className={styles.topArrow}>
//               <ArrowLeftRight size={105} strokeWidth={1.7} />
//             </div>

//             {/* VE Coin */}
//             <div
//               className={`${styles.coin} ${styles.veCoin} ${
//                 isSwapped ? styles.coinSwapLeft : ''
//               }`}
//             >
//               <div className={styles.coinInner}>
//                 <span>V</span>
//                   <small>VE</small>
//               </div>
//             </div>

//             {/* SVE Coin */}
//             <div
//               className={`${styles.coin} ${styles.sveCoin} ${
//                 isSwapped ? styles.coinSwapRight : ''
//               }`}
//             >
//               <div className={styles.coinInner}>
//                 <span>V</span>
//                 <small>SVE</small>
//               </div>
//             </div>

//             {/* Center exchange indicator */}
//             <button
//               type="button"
//               className={styles.exchangeButton}
//               onClick={handleSwap}
//               aria-label="Swap currencies"
//             >
//               <RefreshCw
//                 size={27}
//                 className={isSwapped ? styles.rotated : ''}
//               />
//             </button>

//             {/* Direction dots */}
//             <div className={styles.exchangeDots}>
//               <span />
//               <span />
//               <span />
//               <ArrowLeftRight size={23} />
//             </div>

//             {/* Bottom platform */}
//             <div className={styles.platform}>
//               <div className={styles.platformGlow} />
//               <div className={`${styles.platformRing} ${styles.ring1}`} />
//               <div className={`${styles.platformRing} ${styles.ring2}`} />
//               <div className={`${styles.platformRing} ${styles.ring3}`} />

//               <div className={styles.platformCore}>
//                 <RefreshCw size={32} />
//               </div>
//             </div>

//             {/* Floating mini particles */}
//             <div className={styles.miniCoin}>V</div>
//             <div className={styles.miniCoinTwo}>V</div>

//           </div>

//         </div>

//       </div>

//       {/* ================= BOTTOM BENEFITS ================= */}
//       <div className={styles.bottomBenefits}>

//         <div className={styles.benefit}>
//           <div className={`${styles.benefitIcon} ${styles.purpleBenefit}`}>
//             <Wallet size={24} />
//           </div>

//           <div>
//             <strong>Best Rates</strong>
//             <span>Get the best market rates</span>
//           </div>
//         </div>

//         <div className={styles.benefit}>
//           <div className={`${styles.benefitIcon} ${styles.goldBenefit}`}>
//             <Percent size={24} />
//           </div>

//           <div>
//             <strong>Low Fees</strong>
//             <span>Minimal fees, maximum value</span>
//           </div>
//         </div>

//         <div className={styles.benefit}>
//           <div className={`${styles.benefitIcon} ${styles.cyanBenefit}`}>
//             <ShieldCheck size={24} />
//           </div>

//           <div>
//             <strong>Secure</strong>
//             <span>Smart contracts you can trust</span>
//           </div>
//         </div>

//         <div className={styles.benefit}>
//           <div className={`${styles.benefitIcon} ${styles.pinkBenefit}`}>
//             <Gift size={24} />
//           </div>

//           <div>
//             <strong>More Rewards</strong>
//             <span>Swap more, earn more</span>
//           </div>
//         </div>

//       </div>

//     </BannerContainer>
//   );
// };

// export default SwapCenterBanner;


import React, { useState } from 'react';
import {
  ArrowLeftRight,
  ArrowRight,
  RefreshCw,
  Tag,
  BarChart3,
  ShieldCheck,
  Wallet,
  Percent,
  Gift,
} from 'lucide-react';

import BannerContainer from '../common/BannerContainer';
import VeLoopLogo from '../common/VeLoopLogo';
import RewardBadge from '../common/RewardBadge';
import BannerCTA from '../common/BannerCTA';
import styles from './SwapCenterBanner.module.css';

const SwapCenterBanner = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped((prev) => !prev);
  };

  return (
    <BannerContainer variant="gold">
      <div className={styles.banner}>

        {/* ================= TOP ROW ================= */}
        <div className={styles.topRow}>

          {/* ---------- LEFT CONTENT ---------- */}
          <div className={styles.contentCol}>

            <div style={{ marginBottom: '0.4rem' }}>
              <VeLoopLogo />
            </div>

            <RewardBadge icon={<ArrowLeftRight size={15} />} variant="gold">
              SWAP CENTER
            </RewardBadge>

            <h2 className={styles.title}>
              Swap Smarter,
              <span>Earn More!</span>
            </h2>

            <p className={styles.description}>
              Swap your assets with low fees and better rewards.
            </p>

            <div className={styles.featureRow}>
              <div className={styles.featureCard}>
                <div className={`${styles.featureIcon} ${styles.goldIcon}`}>
                  <Tag size={20} />
                </div>
                <div>
                  <strong>Low Fees</strong>
                  <span>Save more</span>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={`${styles.featureIcon} ${styles.purpleIcon}`}>
                  <BarChart3 size={20} />
                </div>
                <div>
                  <strong>Better Rewards</strong>
                  <span>Earn more</span>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={`${styles.featureIcon} ${styles.cyanIcon}`}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong>Secure & Safe</strong>
                  <span>100% protected</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaWrapper}>
              <BannerCTA variant="gold" ariaLabel="Swap Now">
                Swap Now
              </BannerCTA>

              <button
                type="button"
                className={styles.previewSwapButton}
                onClick={handleSwap}
                aria-label="Preview swap"
              >
                <RefreshCw size={19} className={isSwapped ? styles.rotated : ''} />
              </button>
            </div>
          </div>

          {/* ---------- RIGHT VISUAL ---------- */}
          <div className={styles.visualCol}>
            <div className={styles.visualScene}>

              <div className={styles.mainGlow} />
              <div className={styles.purpleGlow} />
              <div className={styles.goldGlow} />

              <span className={`${styles.particle} ${styles.p1}`} />
              <span className={`${styles.particle} ${styles.p2}`} />
              <span className={`${styles.particle} ${styles.p3}`} />
              <span className={`${styles.particle} ${styles.p4}`} />
              <span className={`${styles.particle} ${styles.p5}`} />

              {/* Double curved swap arrows */}
              <div className={styles.swapArrows}>
                <ArrowRight size={64} strokeWidth={2.4} className={styles.arrowToGold} />
                <ArrowRight size={64} strokeWidth={2.4} className={styles.arrowToPurple} />
              </div>

              {/* Coins row */}
              <div className={styles.coinsRow}>
                <div
                  className={`${styles.coin} ${styles.veCoin} ${
                    isSwapped ? styles.coinSwapLeft : ''
                  }`}
                >
                  <div className={styles.coinInner}>
                    <span>V</span>
                    <small>VE</small>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.exchangeDots}
                  onClick={handleSwap}
                  aria-label="Swap currencies"
                >
                  <span />
                  <span />
                  <span />
                  <RefreshCw size={18} className={isSwapped ? styles.rotated : ''} />
                </button>

                <div
                  className={`${styles.coin} ${styles.sveCoin} ${
                    isSwapped ? styles.coinSwapRight : ''
                  }`}
                >
                  <div className={styles.coinInner}>
                    <span>V</span>
                    <small>SVE</small>
                  </div>
                </div>
              </div>

              {/* Bottom platform */}
              <div className={styles.platform}>
                <div className={styles.platformGlow} />
                <div className={`${styles.platformRing} ${styles.ring1}`} />
                <div className={`${styles.platformRing} ${styles.ring2}`} />
                <div className={`${styles.platformRing} ${styles.ring3}`} />
                <div className={styles.platformCore}>
                  <RefreshCw size={30} />
                </div>
              </div>

              <div className={styles.miniCoin}>V</div>
              <div className={styles.miniCoinTwo}>V</div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BENEFITS ================= */}
        <div className={styles.bottomBenefits}>
          <div className={styles.benefit}>
            <div className={`${styles.benefitIcon} ${styles.purpleBenefit}`}>
              <Wallet size={24} />
            </div>
            <div>
              <strong>Best Rates</strong>
              <span>Get the best market rates</span>
            </div>
          </div>

          <div className={styles.benefit}>
            <div className={`${styles.benefitIcon} ${styles.goldBenefit}`}>
              <Percent size={24} />
            </div>
            <div>
              <strong>Low Fees</strong>
              <span>Minimal fees, maximum value</span>
            </div>
          </div>

          <div className={styles.benefit}>
            <div className={`${styles.benefitIcon} ${styles.cyanBenefit}`}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <strong>Secure</strong>
              <span>Smart contracts you can trust</span>
            </div>
          </div>

          <div className={styles.benefit}>
            <div className={`${styles.benefitIcon} ${styles.pinkBenefit}`}>
              <Gift size={24} />
            </div>
            <div>
              <strong>More Rewards</strong>
              <span>Swap more, earn more</span>
            </div>
          </div>
        </div>

      </div>
    </BannerContainer>
  );
};

export default SwapCenterBanner;