import { styled, media } from "../../../theme";

const MainWrapper = styled.section`
  height: 100%;
  padding: 1em 0.5em 0.5em;
  margin: 1em;
  overflow-y: auto;
  transition: color 0.3s;
  color: ${({ theme }) => theme.colors.blackTransparent};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media.md`
    margin: 0 0.25rem;
    color: ${({ theme }) => theme.colors.blackTransparent};
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  `};

  
&::-webkit-scrollbar {
  width: 8px;
  background-color: ${({ theme }) => theme.colors.blackTransparent};
}
&::-webkit-scrollbar-thumb {
  border: 1px solid ${({ theme }) => theme.colors.blackTransparent};
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
  background-color: ${({ theme }) => theme.colors.blackTransparent};
}
`;

export default MainWrapper;
