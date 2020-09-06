import { styled, media } from "../../../theme";

const BodyWrapper = styled.div`
display: flex;
padding: 0;
overflow: hidden;
width: 100%;
box-sizing: border-box;
flex-direction: column;

${media.md`
padding: 0 2em;
`};
`;

export default BodyWrapper;
