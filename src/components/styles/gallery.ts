import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 8rem;
  margin-bottom: 6rem;

  .image-selected {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .image-and-exit {
    position: absolute;
  }

  .image-selected img {
    width: 1280px;
    height: 720px;
    align-self: center;
    /* object-fit: contain; */
    object-fit: scale-down;
    border: 3px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
  }

  .exit {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2em;
    cursor: pointer;
    margin: 8px;
    transition: 0.2s;
  }

  .exit:hover {
    color: #fff;
  }

  @media (max-width: 1300px) {
    .image-selected img {
      width: 900px;
      height: 600px;
    }
  }

  @media (max-width: 950px) {
    .image-selected img {
      width: 340px;
      height: 400px;
    }
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

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0 2rem 0;

  p {
    color: ${({ theme }) => theme.colors.red};
  }

  h1 {
    /* color: ${({ theme }) => theme.colors.red}; */
    @media (max-width: 750px) {
      font-size: 2.6rem;
    }
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.colors.white};

    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
