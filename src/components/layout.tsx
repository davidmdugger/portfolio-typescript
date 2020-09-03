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
  pageTitle?: string;
}

const LayoutWrapper = styled.div`
  /* margin-top: 40px;
  ${({ theme: { media } }) => media.tabletLandscape} {
    margin-left: 50px;
  } */
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 25px;
  font-family: ${({ theme: { fonts } }) => fonts.saira};
  font-size: 64px;
`;

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-family: ${({ theme: { fonts } }) => fonts.saira};
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.offWhite};
`;

export default ({ children, pageTitle }: Props): React.ReactElement => {
  // @ts-ignore-next-line
  // const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line no-undef

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navigation theme={theme} />
        <LayoutWrapper>
          <GlobalStyles />
          {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
          {children}
          <FooterStyled>
            &copy;{new Date().getFullYear()} Designed, developed, and deployed
            by David Dugger
          </FooterStyled>
        </LayoutWrapper>
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
