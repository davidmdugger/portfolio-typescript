import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyles from "../theme/GlobalStyles";

import Navigation from "./Navigation";
import styled from "styled-components";

interface Props {
  location?: Location;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  data?: any;
}

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.offWhite};
`;

export default ({ children }: Props): React.ReactElement => {
  // @ts-ignore-next-line
  // const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line no-undef

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navigation />
        {children}
        <FooterStyled>
          &copy;{new Date().getFullYear()} Designed, developed, and deployed by
          David Dugger
        </FooterStyled>
      </>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
