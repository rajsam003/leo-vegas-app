import React from "react";
import GameFilterWrapper from "../styledComponents/gameListWrapper";
import NavigationWrapper from "../styledComponents/navigationWrapper";
import NavigationItemWrapper from "../styledComponents/navigationWrapper/navigationItemWrapper";
import { Link } from "react-router-dom";

const GameFilter = ({ categories }) => (
    <GameFilterWrapper>
      <NavigationWrapper>
        {categories.map((category, index) => (
          <Link
          to={`/games/category/${category}`}
          key={index}
          style={{ textDecoration: 'none' }}
          >
          <NavigationItemWrapper>
              {category.toUpperCase()}
          </NavigationItemWrapper>
          </Link>
          ))}
      </NavigationWrapper>
    </GameFilterWrapper>
  );

export default GameFilter;
