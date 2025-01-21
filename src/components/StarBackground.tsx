// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// const StarBackground: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         const numStars = 200;
//         const minStarSize = 1;
//         const maxStarSize = 3;
//         const minOpacity = 0.4;
//         const maxOpacity = 0.9;
//         const minDuration = 2;
//         const maxDuration = 5;
//         const minRepeatDelay = 0;
//         const maxRepeatDelay = 0.5;
//         const initialRadiusFactor = 0.05;
//         const showShootingStars = true;
//         const shootingStarFrequency = 0.02;
//         const shootingStarSpeed = 0.5;
//         const shootingStarDistance = 200;
//         const shootingStarAngleVariation = 30;

//         let animationRunning = true;

//         const createStars = () => {
//             const { width, height } = container.getBoundingClientRect();
//             const centerX = width / 2;
//             const centerY = height / 2;
//             const maxRadius = Math.hypot(width / 2, height / 2);

//             for (let i = 0; i < numStars; i++) {
//                 const star = document.createElement('div');
//                 star.className = 'absolute rounded-full bg-white';
//                 const size = gsap.utils.random(minStarSize, maxStarSize);
//                 star.style.width = `${size}px`;
//                 star.style.height = `${size}px`;
//                 star.style.opacity = gsap.utils.random(minOpacity, maxOpacity).toString();
//                 container.appendChild(star);

//                 const angle = gsap.utils.random(0, 360);
//                 const initialRadius = maxRadius * initialRadiusFactor;

//                 gsap.fromTo(
//                     star,
//                     {
//                         x: centerX + initialRadius * Math.cos(angle * Math.PI / 180) - size / 2,
//                         y: centerY + initialRadius * Math.sin(angle * Math.PI / 180) - size / 2,
//                         scale: 0,
//                         force3D: true,
//                     },
//                     {
//                         duration: gsap.utils.random(minDuration, maxDuration),
//                         x: centerX + maxRadius * Math.cos(angle * Math.PI / 180) - size / 2,
//                         y: centerY + maxRadius * Math.sin(angle * Math.PI / 180) - size / 2,
//                         scale: 1,
//                         ease: "none",
//                         repeat: -1,
//                         repeatDelay: gsap.utils.random(minRepeatDelay, maxRepeatDelay),
//                         onRepeat: () => {
//                             if (animationRunning) {
//                                 gsap.set(star, {
//                                     scale: 0,
//                                     x: centerX + initialRadius * Math.cos(angle * Math.PI / 180) - size / 2,
//                                     y: centerY + initialRadius * Math.sin(angle * Math.PI / 180) - size / 2,
//                                 });
//                             }
//                         },
//                     }
//                 );

//                 if (showShootingStars && Math.random() < shootingStarFrequency) {
//                     const shootingStarAngle = angle + gsap.utils.random(-shootingStarAngleVariation, shootingStarAngleVariation);
//                     gsap.to(star, {
//                         duration: shootingStarSpeed,
//                         x: `+=${shootingStarDistance * Math.cos(shootingStarAngle * Math.PI / 180)}`,
//                         y: `+=${shootingStarDistance * Math.sin(shootingStarAngle * Math.PI / 180)}`,
//                         opacity: 0,
//                         ease: "power1.out",
//                         onComplete: () => star.remove(),
//                     });
//                 }
//             }
//         };

//         createStars();

//         const handleResize = () => {
//           if (container) {
//             if (!animationRunning) return;
//             gsap.killTweensOf(container.children);
//             container.innerHTML = '';
//             createStars();
//           }
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             animationRunning = false;
//             window.removeEventListener('resize', handleResize);
//             if (container) {
//               gsap.killTweensOf(container.children);
//               container.innerHTML = '';
//             }
//         };
//     }, []);

//     return (
//         <div
//             className="w-full h-screen bg-black absolute inset-0 pointer-events-none" // Stili importanti qui
//             ref={containerRef}
//             style={{ overflow: 'hidden' }}
//         ></div>
//     );
// };

// export default StarBackground;
