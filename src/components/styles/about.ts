import { styled } from "styled-components";

export const About = styled.div`
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

export const AboutContent = styled.div`
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
`;

export const Button = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 2rem;

  transform: scale(1, 0.75);

  @media (max-width: 500px) {
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

    @media (max-width: 750px) {
      font-size: 2.5rem;
    }

    @media (max-width: 500px) {
      font-size: 2rem;
    }
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

export const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid white;

  @media (max-width: 750px) {
    width: 150px;
    height: 150px;
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 8px; */
  color: ${({ theme }) => theme.colors.gray400};

  margin-bottom: 3rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* border-radius: 16px; */

    padding: 1rem;

    border: 1px solid ${({ theme }) => theme.colors.gray600};

    svg {
      font-size: 2rem;
      margin-right: 0.5rem;
    }

    /* @media (max-width: 1055px) {
            & {
                padding: 0 0.5px 0 0.5px;
            }
        } */
    @media (max-width: 500px) {
      padding: 0.4rem;
    }
  }

  .js {
    svg {
      color: #f0db4f;
    }
  }

  .ts {
    svg {
      color: #007acc;
    }
  }

  .html {
    svg {
      color: #d84924;
    }
  }

  .css {
    svg {
      color: #0066b6;
    }
  }

  .py {
    svg {
      color: #366994;
    }
  }

  .cpp {
    svg {
      color: #9c033a;
    }
  }

  .react {
    svg {
      color: #61dbfb;
    }
  }

  .next {
    svg {
      color: ${({ theme }) => theme.colors.gray600};
    }
  }

  .scss {
    svg {
      color: #c36291;
    }
  }

  .node {
    svg {
      color: #81b640;
    }
  }

  .pgsql {
    svg {
      color: #30628a;
    }
  }

  .git {
    svg {
      color: #e44c30;
    }
  }
`;

export const CertificationsGrid = styled.div`
  margin: 0 0 0 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
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
    font-size: 2.2em;
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
