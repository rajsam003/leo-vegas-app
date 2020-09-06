import React from "react";
import MainWrapper from "../styledComponents/mainWrapper";
import GridList from "../styledComponents/gridList";
import ListItem from "../styledComponents/listItem";
import ThumbnailWrapper from "../styledComponents/thumbnailWrapper";
import Thumbnail from "../styledComponents/thumbnail";
import GameCaption from "../styledComponents/gameCaption";
import NoDataWrapper from "../styledComponents/noDataWrapper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectGames, selectFilteredGames } from "../../containers/body/reducer";
const GamesList = ({ games, match, searchedGame}) => {
  const {params = {}} = match

  const {gameName=''} = params

  let gameList = searchedGame ? games.filter(game => {
    return game.get('gameName').toLowerCase().search(searchedGame.toLowerCase()) !== -1
  }) : (gameName ? games.filter(game => {
    return game.get('categories').find(cat => cat === gameName)
  }) : games) 

  return (
    <MainWrapper>
      <GridList>
        {gameList && gameList.size > 0 ? (
          gameList.map((n, index) => (
            <ListItem key={index}>
              <Link
                to={`/games/${n.get("slug")}`}
              >
                <div>
                <ThumbnailWrapper>
                  {n.get("gameThumbnail") && (
                    <Thumbnail
                      src={`https://${n.get("gameThumbnail")}`}
                      title={`${n.get("gameName")} thumbnail`}
                      alt={`${n.get("gameName")} thumbnail`}
                    />
                  )}
                </ThumbnailWrapper>
                <GameCaption>
                  {n.get("gameName")}
                </GameCaption>
                </div>
              </Link>
            </ListItem>
          ))
        ) : (
            <NoDataWrapper>No Games Found</NoDataWrapper>
          )}
      </GridList>
    </MainWrapper>
  );
};

const mapStateToProps = state => ({
  games: selectGames(state),
  filteredGames: selectFilteredGames(state)
});

export default connect(mapStateToProps, null)(GamesList);
