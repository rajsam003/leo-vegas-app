import { styled, media } from "../../theme";

const ScrollBarStyle = styled.div`
  padding: 1em;
  overflow: auto;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media.md`
    color: ${({ theme }) => theme.colors.blackTransparent};
  `};
`;

export default ScrollBarStyle;
