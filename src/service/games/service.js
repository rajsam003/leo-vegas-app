import ApiService from "../apiService";

export default class GamesService extends ApiService{
  getGameServiceUrl() {
    return `${super.getServiceUrl()}/5da99f9f31000036004e0a4e`;
  }

  getGames() {
    return super.get({
      url: this.getGameServiceUrl()
    });
  }
}
