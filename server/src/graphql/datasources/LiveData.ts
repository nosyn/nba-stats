import { RESTDataSource } from "apollo-datasource-rest";

class LiveData extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "https://cdn.nba.com/static/json/liveData";
  }

  getTodaysScoreBoard() {
    return this.get("/scoreboard/todaysScoreboard_00.json");
  }
}

export default LiveData;
