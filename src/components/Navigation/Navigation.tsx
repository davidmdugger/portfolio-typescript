import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedin, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import routes from "./routes";

interface LinkProps {
  isActive?: boolean;
}

const Header = styled.header`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.brown};

  animation-name: slideDown;
  animation-duration: 200ms;

  @keyframes slideDown {
    from {
      margin-top: -500px;
    }
    to {
      margin-top: 0;
    }
  }

  ${({ theme: { media } }) => media.tabletLandscape} {
    flex-direction: row-reverse;
    align-items: center;
    position: fixed;
    top: inherit;
    left: inherit;
    right: inherit;
    bottom: -50px;
    height: 50px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    width: 100vh;
    background-color: ${({ theme: { colors } }) => colors.black};
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  text-align: center;

  ${({ theme: { media } }) => media.tabletLandscape} {
    text-align: inherit;
    display: flex;
    justify-content: center;
    flex: 1;
  }
`;

const LinkStyled = styled(Link)<LinkProps>`
  text-decoration: none;
  font-family: ${({ theme: { fonts } }) => fonts.saira};
  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.black : colors.offWhite};
  font-size: 32px;
  transition: 300ms;

  ${({ theme: { media } }) => media.tabletLandscape} {
    height: 23px;
    font-size: 18px;
    color: ${({ isActive, theme: { colors } }) =>
      isActive ? colors.brown : colors.offWhite};
    border-bottom: 1px solid
      ${({ isActive, theme: { colors } }) =>
        isActive ? colors.brown : "transparent"};
    :hover {
      color: ${({ theme: { colors } }) => colors.brown};
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.brown};
    }
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;

  svg {
    color: ${({ theme: { colors } }) => colors.offWhite};
    margin-left: 10px;
    width: 20px;
    height: 20px;
    padding: 2px;
    cursor: pointer;
    background-color: transparent;

    transition: 350ms;
    &:hover {
      color: ${({ theme: { colors } }) => colors.black};
      background-color: ${({ theme: { colors } }) => colors.brown};
    }
  }
`;

const Hamburger = styled.div`
  z-index: 30;
  position: fixed;
  top: 4px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: white;
`;

const LinkItems = (): React.ReactElement[] => {
  return routes.map((route: any) => (
    <LinkWrapper key={route.src}>
      <LinkStyled
        isActive={
          typeof window !== undefined &&
          window &&
          route.src === window.location.pathname
        }
        to={route.src}
      >
        {route.text.toUpperCase()}
      </LinkStyled>
    </LinkWrapper>
  ));
};

const SocialIcons = (): React.ReactElement => (
  <SocialIconsWrapper>
    <a
      href="https://github.com/davidmdugger"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaGithub />
    </a>
    <a
      href="https://twitter.com/iamdaviddugger"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaTwitter />
    </a>
    <a
      href="https://linkedin.com/in/davidmdugger"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaLinkedin />
    </a>
  </SocialIconsWrapper>
);

export default () => {
  const [width, setWidth] = React.useState(0);
  const [isMenuOpen, setMenu] = React.useState(false);

  React.useEffect(() => {
    typeof window !== undefined &&
      window &&
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const toggleMenu = (): void => {
    setMenu(!isMenuOpen);
  };

  const Menu = (): React.ReactElement => {
    if (width > 800)
      return (
        <Header>
          {LinkItems()}
          {SocialIcons()}
        </Header>
      );

    return isMenuOpen ? (
      <Header>
        {width < 801 && (
          <Hamburger>
            <MdClose onClick={toggleMenu} />
          </Hamburger>
        )}
        {LinkItems()}
        {SocialIcons()}
      </Header>
    ) : (
      <Hamburger onClick={toggleMenu}>
        <FaBars />
      </Hamburger>
    );
  };

  return <>{Menu()}</>;
};
