import React from "react";
import SearchWrapper from "../styledComponents/searchWrapper";
import SearchInput from "../styledComponents/searchInput";

const GameSearch = ({ handleOnChange }) => (
    <SearchWrapper>
    <SearchInput type="search" placeholder="Search"  autocomplete="off" onChange={e => handleOnChange(e)}></SearchInput>
  </SearchWrapper>
  );

export default GameSearch;
