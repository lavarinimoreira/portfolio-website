import styled from 'styled-components';

export const CertificationCardContainer = styled.a`
    text-decoration: none;
    text-align: center;

    div {
        height: 280px;
    }

    transition: 0.4s;

    img {
        object-fit: scale-down;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 1250px) {
        div {
            height: 250px;
        }
    }

    p {
        text-align: center;
    }
`;
