// import type { Config } from "tailwindcss";

// export default {
//   content: ["./app/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
//         playfair: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
//       },
//       keyframes: {
//         charReveal: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(12px)",
//             filter: "blur(6px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//             filter: "blur(0)",
//           },
//         },
//         marquee: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//         preloaderBar: {
//           "0%": { width: "0" },
//           "100%": { width: "100%" },
//         },
//         floatAnim: {
//           "0%,100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//         sweep: {
//           "0%": {
//             transform: "translateX(-120%) skewX(-20deg)",
//             opacity: "0",
//           },
//           "25%": { opacity: "0.9" },
//           "100%": {
//             transform: "translateX(160%) skewX(-20deg)",
//             opacity: "0",
//           },
//         },
//       },
//       animation: {
//         charReveal: "charReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
//         marquee: "marquee 28s linear infinite",
//         preloaderBar: "preloaderBar 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
//         floatAnim: "floatAnim 3s ease-in-out infinite",
//         sweep: "sweep 4.8s ease-in-out infinite",
//       },
//     },
//   },
// } satisfies Config;
