import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  border: none;
  font-size: 1.3rem;

  margin: 0 2rem 0 1rem;
  opacity: 0.7;
  transition: 0.4s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1250px) {
    & {
      margin: 0;
    }
  }

  @media (max-width: 750px) {
    margin: 0.5rem 0 0 0;
    font-size: 1.2rem;
  }
`;
