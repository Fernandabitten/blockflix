import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #1b252f;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
  color: white;
  height: 15vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavItemLeft = styled(Nav)`
  display: flex;
  position: relative;
`;

export const NavItemRight = styled(Nav)`
  display: flex;
  margin-left: 50%;
  position: relative;
`;

export const NavItem = styled(Nav)`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  position: relative;
  spam {
    margin-left: -49%;
    margin-top: 10%;
    text-decoration: none;
    font-size: 18px;
    color: orange;
  }
  :hover {
    border-bottom: 1px solid white;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "White" : "White")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #1b252f;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 130px;
    padding-top: 9.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const ImgStyled = styled(Nav)`
  img {
    padding: 16px 16px;
  }
  @media (max-width: 700px) {
    img {
      max-width: 150px;
    }
  }
`;
