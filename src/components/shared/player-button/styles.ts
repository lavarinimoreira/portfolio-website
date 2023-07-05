import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  margin: 0;
  background: none;

  border: none;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};

  cursor: pointer;

  @media (max-width: 815px) {
    position: absolute;
    right: 0;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  @media (max-width: 438px) {
    margin-top: 4rem;
  }
`;
