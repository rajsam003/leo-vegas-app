import React from "react";
import { connect } from "react-redux";

import BodyWrapper from "../../component/styledComponents/bodyWrapper";
import GameSearch from "../../component/gameSearch";

import { selectGames, selectFilteredGames } from './reducer';
import { getGames } from './actions';
import GamesList from "../../component/gameList";
import GameFilter from "../../component/gameFilter";
import { Route, Switch } from "react-router-dom";
import GameView from "../../component/gameView";

class Body extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchedGame: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { games, onLoadGames } = this.props;

    if (!games || !games.size) {
      onLoadGames();
    }
  }

  handleChange(e) {
    this.setState({ searchedGame: e.target.value });
  }

  render() {
    const { searchedGame } = this.state;
    const { games } = this.props;
    const categories = []
    games.map(game => categories.push(game.get('categories').toJS()))
    const uniqueCategories = [...new Set(categories.flat())];

    return (
      <BodyWrapper>
        <GameSearch handleOnChange={this.handleChange} />
        <GameFilter categories={uniqueCategories}/>
        <Switch>
          <Route path="/" exact={true} component={({match}) => <GamesList match={match} searchedGame={searchedGame}/>} />
          <Route path="/games/:gameName" exact={true} component={({match}) => <GameView match={match} games={games}/>}/>
          <Route path="/games/category/:gameName" exact={true} component={GamesList}/>
        </Switch>
      </BodyWrapper>
    );
  }
}


const mapStateToProps = state => ({
  games: selectGames(state),
  filteredGames: selectFilteredGames(state)
});

const mapDispatchToProps = dispatch => ({
  onLoadGames: data => dispatch(getGames(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Body);
