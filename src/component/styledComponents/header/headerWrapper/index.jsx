import { styled } from "../../../../theme";

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
padding: 0 1em;
backface-visibility: hidden;
transform: translateZ(0);
background: -webkit-gradient(linear,left top,right top,from(#fd5c3c),to(#fd8e3c));
    background: -webkit-linear-gradient(left,#fd5c3c,#fd8e3c);
    background: linear-gradient(90deg,#fd5c3c,#fd8e3c);
`;

export default HeaderWrapper;
