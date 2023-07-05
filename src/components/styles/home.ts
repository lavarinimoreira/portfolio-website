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
`;

export const Button = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 2rem;

  transform: scale(1, 0.75);
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
  }
`;
