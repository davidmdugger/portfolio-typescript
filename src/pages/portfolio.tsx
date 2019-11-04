import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { projects } from "../projects";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/Card";

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export default (data): React.ReactElement => {
  const images = data.data.allImageSharp.edges.map(img => img.node.fixed.src);

  return (
    <Layout title="Dugger's Portfolio" pageTitle="Portfolio">
      <SEO title="Portfolio" />
      <CardsWrapper>
        {projects.map(project => {
          function getImage(imgs: Array<string>): string {
            let projectImage = "";
            imgs.forEach((img: string, i: number) => {
              if (img.includes(project.image)) {
                projectImage = imgs[i];

                return imgs[i];
              }
            });

            return projectImage;
          }

          const mainProjectImg = getImage(images);

          return (
            <Card
              key={project.name}
              name={project.name}
              image={mainProjectImg}
              skills={project.skills}
              desc={project.desc}
              github={project.github}
            />
          );
        })}
      </CardsWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ImageQuery {
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
  }
`;

// image1: file(relativePath: { eq: "images/image1.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 200, maxHeight: 200) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
