import React from "react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export function useWindowWidth() {
  const [width, setWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}