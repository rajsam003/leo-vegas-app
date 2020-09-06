import { styled } from "../../../theme";
const GameTitle = styled.div`
  position: absolute;
  right: 0.5em;
  bottom: 0.5em;
  left: 0.5em;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5em;
  text-transform: uppercase;
`;
export default GameTitle;