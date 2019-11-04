import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { skills } from "../skills";

interface Images {
  node: {
    fixed: {
      src: string;
    };
  };
}

interface Props {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
    avatar: {
      childImageSharp: {
        fixed: {
          src: string;
        };
      };
    };
    allImageSharp: {
      edges: Array<Images>;
    };
  };
}

interface NameProps {
  outline?: boolean;
}

const HomepageWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 2% 4%;

  ${({ theme: { media } }) => media.tabletLandscape} {
    margin-left: 50px;
  }
`;

const SectionWrapper = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: ${({ theme: { breakpoints } }) =>
    breakpoints.laptopLandscape + "px"};
  margin: 0 auto;

  ${({ theme: { media } }) => media.mobileLandscape} {
    flex-direction: row;
    align-items: center;
  }
`;

const Section = styled.div`
  z-index: 10;
`;

const Name = styled.h2<NameProps>`
  font-family: ${({ theme: { fonts } }) => fonts.saira};
  font-weight: 800;
  font-size: 50px;
  text-rendering: optimizeLegibility;
  line-height: 1;

  color: ${({ theme: { colors }, outline }) =>
    outline ? colors.black : colors.offWhite};
  text-shadow: ${({ theme: { colors }, outline }) =>
    outline ? `${colors.brown} 0px 0px 2px` : "none"};

  ${({ theme: { media } }) => media.mobileLandscape} {
    font-size: 100px;
  }
  ${({ theme: { media } }) => media.tabletPortrait} {
    font-size: 140px;
  }

  ${({ theme: { media } }) => media.tabletLandscape} {
    font-size: 150px;
  }

  ${({ theme: { media } }) => media.laptopLandscape} {
    font-size: 220px;
  }

  ${({ theme: { media } }) => media.largeLandscape} {
    font-size: calc(220px + 2vw);
  }
`;

const AboutShortened = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.brown};
  font-family: ${({ theme: { fonts } }) => fonts.roboto};
  ${({ theme: { media } }) => media.tabletPortrait} {
    font-size: 18px;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100px;
  top: 55px;
  right: 0;
  border: 1px solid ${({ theme: { colors } }) => colors.offWhite};
  border-radius: 50%;
  animation-name: shifty;
  animation-duration: 4500ms;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  ${({ theme: { media } }) => media.mobileLandscape} {
    width: 150px;
  }

  ${({ theme: { media } }) => media.tabletPortrait} {
    width: 300px;
    top: 175px;
  }

  @keyframes shifty {
    0% {
      transform: translateX(-2px);
    }

    25% {
      transform: translateY(5px);
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const SkillsHeading = styled.h3`
  color: ${({ theme: { colors } }) => colors.brown};
  font-family: ${({ theme: { fonts } }) => fonts.saira};
  font-size: 60px;
  margin: 80px 0 25px;
  text-align: center;
  text-transform: uppercase;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  max-width: 745px;
  margin: 0 auto;
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 80px;
  margin: 2px;
  background-color: ${({ theme: { colors } }) => colors.brown};
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.saira};

  :nth-child(even) {
    background-color: ${({ theme: { colors } }) => colors.offWhite};
  }
`;

const Home = ({ data }: Props): React.ReactElement => {
  const siteTitle = data.site.siteMetadata.title;
  const avatar = data.avatar.childImageSharp.fixed.src;

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <HomepageWrapper>
        <SectionWrapper>
          <Section>
            <AboutShortened>CREATOR OF GREAT THINGS</AboutShortened>
            <AboutShortened>ON THE WEB FOR OVER</AboutShortened>
            <AboutShortened>THREE YEARS AND COUNTING</AboutShortened>
          </Section>
          <Section>
            <Name>DAVID</Name>
          </Section>
          <Image src={avatar} alt="david dugger" />
          <Section>
            <Name>DUGGER</Name>
          </Section>
          <Section>
            <Name outline>FULL STACK</Name>
          </Section>

          <Section>
            <Name>DEVELOPER</Name>
          </Section>
        </SectionWrapper>
        <SkillsHeading>Skills</SkillsHeading>
        <SkillsWrapper>
          {skills.map(skill => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillsWrapper>
      </HomepageWrapper>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/main.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          fixed {
            src
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
