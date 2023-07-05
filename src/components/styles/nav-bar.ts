import { styled } from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  .active {
    color: ${({ theme }) => theme.colors.selected};
    font-weight: 800;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LavariniMoreira = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-left: 2rem;

  img {
    width: 277px;
    height: 20px;

    padding: 1.4rem;
  }

  @media (max-width: 815px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const NavBarLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: white;
    font-size: 1.4rem;
    text-decoration: none;
    padding: 1.4rem;
    z-index: 9999;

    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.selected};
      /* text-shadow: 0px 0px 6px ${({ theme }) => theme.colors.selected}; */
    }
  }

  @media (max-width: 815px) {
    flex-direction: column;
    align-items: center;

    a {
      padding: 0.2rem;
    }
  }
`;
