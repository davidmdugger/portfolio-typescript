import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyles from "../theme/GlobalStyles";

interface Props {
  location?: Location;
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default ({ children }: Props): React.ReactElement => {
  // @ts-ignore-next-line
  const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line no-undef

  console.log(rootPath);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
