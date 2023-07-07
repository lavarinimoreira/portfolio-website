import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  background-color: rgba(255, 255, 255, 0.7);
  align-items: center;
  margin: 1em 0 0 0;
  border-radius: 10px 10px 0 0;
  /* font-weight: 600; */

  background-color: ${({ theme }) => theme.colors.black};

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 1em 0 0 0;

    @media (max-width: 1250px) {
      & {
        width: 150px;
        height: 150px;
      }
    }
  }

  p {
    padding: 8px;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 1250px) {
    & {
      width: 180px;
    }
  }
`;
