import Games from "./games";
import GameService from "./games/service";

class Main {
  constructor() {
    if (!Main.instance) {

    // this.games = new Games({
    //     service: new GameService()
    // });

    //--> Comment this line to test with mock service
    this.games = new Games();

      Main.instance = this;
    }

    return Main.instance;
  }
}

const instance = new Main();
Object.freeze(instance);
export default instance;
