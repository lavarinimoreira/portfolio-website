import { styled } from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 8rem;

  h2 {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray600};
    margin-bottom: 0.7rem;
    padding-bottom: 1rem;
  }

  P {
    color: ${({ theme }) => theme.colors.gray500};
  }

  @media (max-width: 815px) {
    margin-top: 20rem;
  }

  @media (max-width: 723px) {
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

  @media (max-width: 483px) {
    margin-top: 17rem;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;

  width: 45rem;

  border: 1px solid white;
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 723px) {
    width: 30rem;
  }

  @media (max-width: 483px) {
    width: 20rem;
  }
`;

export const Button = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 2rem;

  transform: scale(1, 0.75);

  @media (max-width: 483px) {
    margin-top: 2rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 15rem;

  a {
    color: ${({ theme }) => theme.colors.red};
    font-size: 3rem;
    transition: 0.4s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 723px) {
      font-size: 2.5rem;
    }

    @media (max-width: 483px) {
      font-size: 2rem;
    }
  }
`;
