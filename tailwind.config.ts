import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideInNavbar: "slideInNavbar 0.5s ease-out",
        'slide-up-fade': "slideUpFadeIn 0.8s ease-out forwards",
        'float': "float 3s ease-in-out infinite"
      },
      keyframes: {
        slideInNavbar: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUpFadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
} satisfies Config;















// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       animation: {
//         slideInNavbar: "slideInNavbar 0.5s ease-out", // Add the custom navbar animation
//       },
//       keyframes: {
//         slideInNavbar: {
//           '0%': { transform: 'translateY(-100%)' }, // Navbar starts off-screen
//           '100%': { transform: 'translateY(0)' },  // Navbar comes into view
//         },
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
