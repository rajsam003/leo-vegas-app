import { styled, media } from "../../../theme";

const GameFilterWrapper = styled.div`
    position: relative;
    margin: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 1rem 0 1.5rem 0;
    
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

${media.md`
justify-content: center;
`};

&::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid transparent;
    background-clip: content-box;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }
  
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export default GameFilterWrapper;
