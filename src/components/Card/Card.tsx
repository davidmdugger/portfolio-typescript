import React from "react";
import styled from "styled-components";
import { Project } from "../../projects";
import { FaGithub } from "react-icons/fa";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  border: 1px solid #ccc;
  width: 100%;
  min-width: 350px;
  max-width: 500px;
`;

const CardHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 35px;
`;

const GithubWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 33%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${({ theme: { colors } }) => colors.brown};
  position: relative;
  &::after {
    content: "";
    background-color: white;
    border-left: 1px solid ${({ theme: { colors } }) => colors.black};
    height: 100%;
    width: 100px;
    transform: skewX(-30deg);
    position: absolute;
    right: -14px;
    top: 0;
  }

  a {
    color: ${({ theme: { colors } }) => colors.black};
  }
`;

const ProjectName = styled.p`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  font-family: ${({ theme: { fonts } }) => fonts.saira};
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 100%;
`;

const Desc = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.lato};
  text-align: justify;
  padding: 4px;
`;

export default ({ name, image, desc, github }: Project): React.ReactElement => {
  return (
    <CardWrapper>
      <CardHeader>
        <GithubWrapper>
          <a href={github}>
            <FaGithub />
          </a>
        </GithubWrapper>
        <ProjectName>{name}</ProjectName>
      </CardHeader>
      <div>
        <Image src={image} alt={name} />
        <Desc>{desc}</Desc>
      </div>
    </CardWrapper>
  );
};
