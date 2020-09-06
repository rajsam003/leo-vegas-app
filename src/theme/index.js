import {
    default as styled,
    css,
    keyframes,
    withTheme
  } from "styled-components";
  import { colors } from "./colors";
    
  const sharedProps = {
    colors,
  };
  
  export const createTheme = () => {
    return {
      ...sharedProps
    };
  };
  
  export { media } from "./media";
  export { styled, css, keyframes, withTheme };
  