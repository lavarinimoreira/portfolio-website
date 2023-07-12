import { styled } from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 8rem;
  margin-bottom: 6rem;

  h2 {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray600};
    margin-bottom: 0.7rem;
    padding-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray500};
    line-height: 1.5rem;
    /* text-align: justify; */
    margin-top: 1rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 815px) {
    margin-top: 20rem;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    margin-top: 17rem;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;

  width: 45rem;

  border: 1px solid white;
  box-sizing: border-box;
  padding: 2rem;

  .linkedin,
  .mail {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    transition: 0.4s;
    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  @media (max-width: 750px) {
    width: 30rem;
  }

  @media (max-width: 500px) {
    width: 20rem;
  }
`;

export const IconsLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 0 2rem 0;
  width: 45%;

  a {
    color: ${({ theme }) => theme.colors.red};
    font-size: 2.5em;
    transition: 0.4s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 750px) {
    width: 80%;
  }
`;
