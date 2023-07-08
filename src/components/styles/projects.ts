import { styled } from "styled-components";

export const Projects = styled.div`
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
    text-align: justify;
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

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;

  width: 45rem;

  border: 1px solid white;
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 750px) {
    width: 30rem;
  }

  @media (max-width: 500px) {
    width: 20rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.purple};
    font-size: 1.25rem;

    margin-left: 0.5rem;
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* margin-bottom: 3rem; */

  padding: 1rem;
  border-radius: 8px;

  border: 1px solid white;

  margin-top: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.25rem;

    margin-left: 0.5rem;
  }

  @media (max-width: 500px) {
    width: 91%;
  }
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  img {
    width: 600px;
    height: 310px;
  }

  @media (max-width: 1055px) {
    & {
      width: 400px;
      margin-left: 26rem;
      img {
        width: 300px;
        height: 155px;
      }
      margin: 0;
    }
  }
`;

export const LineBreak = styled.div`
  width: 100%;
  border-top: ${({ theme }) => theme.colors.gray600} solid 1px;
  height: 1px;
  margin-top: 1rem;

  @media (max-width: 750px) {
    width: 75%;
  }
`;
