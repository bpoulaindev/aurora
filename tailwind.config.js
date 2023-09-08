export const red = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d",
};

export const indigo = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b3fc",
  400: "#818df8",
  500: "#6365f1",
  600: "#4e46e5",
  700: "#4438ca",
  800: "#3830a3",
  900: "#312e81",
};

export const dark = {
  50: "#E6E6E6",
  100: "#C1C1C1",
  200: "#979797",
  300: "#6D6D6D",
  400: "#4E4E4E",
  500: "#2F2F2F",
  600: "#2A2A2A",
  700: "#232323",
  800: "#1D1D1D",
  900: "#121212",
};
export const green = {
  50: "#ecf7f0",
  100: "#d0ebda",
  200: "#b1dec1",
  300: "#91d0a8",
  400: "#7ac695",
  500: "#62bc82",
  600: "#5ab67a",
  700: "#50ad6f",
  800: "#46a565",
  900: "#349752",
  1000: "#166534",
};
export const purple = {
  50: "#faf5ff",
  100: "#f3e8ff",
  200: "#e9d5ff",
  300: "#d8b4fe",
  400: "#c084fc",
  500: "#a955f7",
  600: "#9333ea",
  700: "#7e22ce",
  800: "#6b21a8",
  900: "#591c87",
};
export const palette = {
  cream: "#FFFAF5",
  brown: "#CF8C60",
  indigo,
  dark,
  green,
  purple,
  red,
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        0: "0px",
        "1/4": "2px",
        "1/2": "4px",
        "3/4": "6px",
        1: "8px",
        1.5: "12px",
        2: "16px",
        2.5: "20px",
        3: "24px",
        3.5: "28px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
        10: "80px",
        11: "88px",
        12: "104px",
        13: "112px",
        14: "120px",
        15: "128px",
        16: "136px",
        17: "144px",
        18: "152px",
        19: "160px",
        20: "168px",
        21: "176px",
        22: "184px",
        23: "192px",
        24: "200px",
        28: "224px",
        32: "256px",
        36: "288px",
        38: "304px",
        40: "336px",
        44: "352px",
        46: "368px",
        48: "384px",
        52: "416px",
        56: "448px",
        60: "480px",
        64: "512px",
        70: "560px",
        80: "640px",
        104: "832px",
      },
      margin: {
        0: "0px",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
      },
      width: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
        reset: "unset",
      },
      colors: {
        ...palette,
        cream: "#FFFAF5",
      },
      fontFamily: {
        supreme: ["Supreme", "open sans", "Arial", "serif"],
      },
    },
  },
  plugins: [],
};
