export interface Theme {
  fonts: {
    saira: string;
    lato: string;
    roboto: string;
  };
  colors: {
    black: string;
    darkBlue: string;
    lightred: string;
    brown: string;
    accent: string;
    white: string;
    offWhite: string;
  };
  media: {
    [key: string]: string;
  };
  breakpoints: Breakpoints;
}

interface Breakpoints {
  [key: string]: number;
}

const breakpoints: Breakpoints = {
  mobilePortrait: 320, // smartphones, portrait iPhone, portrait 480x320 phones (Android)
  mobileLandscape: 480, // smartphones, Android phones, landscape iPhone
  tabletPortrait: 600, // portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android)
  tabletLandscape: 800, // tablet, landscape iPad, lo-res laptops ands desktops
  laptopLandscape: 950, // big landscape tablets, laptops, and desktops
  largeLandscape: 1200 // hi-res laptops and desktops
};

function getBreakpoints(breakpoints: Breakpoints) {
  const media = {};
  Object.keys(breakpoints).forEach(key => {
    return (media[key] = `@media (min-width: ${breakpoints[key]}px)`);
  });
  return media;
}

const theme: Theme = {
  fonts: {
    saira: "'Saira Extra Condensed', sans-serif",
    lato: "'Lato', sans-serif",
    roboto: "'Roboto', sans-serif"
  },
  colors: {
    black: "#090909",
    darkBlue: "#121133",
    lightred: "rgb(81,80,81)",
    brown: "#CCCC99",
    accent: "#313131",
    white: "#FFF",
    offWhite: "#FAFAFA"
  },
  media: {},
  breakpoints
};

theme.media = getBreakpoints(breakpoints);

export default theme;
