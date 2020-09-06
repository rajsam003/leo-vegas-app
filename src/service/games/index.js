import MockService from "./service.mock";

export default class Games {
    constructor({ service } = {}) {
      this.service = service || new MockService();
    }

    getGames() {
        return this.service
          .getGames().then(response => {
            return response;
          });
      }
}