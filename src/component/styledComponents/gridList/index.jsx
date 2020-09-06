import { styled } from "../../../theme";

const GridList = styled.ul`
  display: grid;
  padding: 0;
  margin: 0 0 5em 0;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`;

export default GridList;
