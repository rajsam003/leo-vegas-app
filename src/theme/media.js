import { css } from "styled-components";

const breakpoints = {
  md: "48rem",
  lg: "78rem",
  xl: "90rem"
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    ${() => {
      const size = breakpoints[label];

      return css`
        @media (min-width: ${size}) {
          ${css(...args)};
        }
      `;
    }};
  `;
  return accumulator;
}, {});
