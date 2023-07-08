import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Button = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  line-height: 1.5;
  box-sizing: border-box;
  display: inline-block;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s;
  text-transform: uppercase;
  div .a {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .click {
    transition: 1s;
    box-sizing: border-box;
    display: inline-block;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
    padding: 0.875rem 3.125rem;
    flex: 0 auto;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(206, 49, 45, 0.12);
    border-radius: 0.1875rem;
    /* background-color: rgba(206, 49, 45, 0.12); */
    background-color: rgba(206, 49, 45, 0.05);
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }

  .click-decoration_upper-left-blur {
    color: #000;
    font-size: 1rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    border-top: 2px solid ${({ theme }) => theme.colors.red};
    border-left: 2px solid ${({ theme }) => theme.colors.red};
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    filter: blur(6px);
    width: 26%;
    height: 44%;
    transition: 0.2s;
  }

  .click-decoration_upper-left-deco {
    color: #000;
    font-size: 1rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    border-top: 2px solid ${({ theme }) => theme.colors.red};
    border-left: 2px solid ${({ theme }) => theme.colors.red};
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    width: 26%;
    height: 44%;
    transition: 0.2s;
  }

  .click-decoration_bottom-right {
    color: #000;
    font-size: 1rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    position: absolute;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    border-right: 2px solid ${({ theme }) => theme.colors.red};
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 26%;
    height: 44%;
    transition: 0.2s;
  }

  .click-decoration_bottom-right-blur {
    color: #000;
    font-size: 1rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    position: absolute;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    border-right: 2px solid ${({ theme }) => theme.colors.red};
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
    filter: blur(6px);
    width: 26%;
    height: 44%;
    transition: 0.2s;
  }

  &:hover {
    background-color: rgba(206, 49, 45, 0.12);
  }

  &:hover .click-decoration_upper-left-blur,
  &:hover .click-decoration_upper-left-deco,
  &:hover .click-decoration_bottom-right,
  &:hover .click-decoration_bottom-right-blur {
    width: 100% !important;
    height: 100% !important;
  }
`;
