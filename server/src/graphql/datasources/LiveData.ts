import { RESTDataSource } from "apollo-datasource-rest";
import { LIVE_DATA } from "../../configs/nbaConfigs";

class LiveData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = LIVE_DATA.BASE_URL;
  }

  getTodaysScoreBoard() {
    return this.get(LIVE_DATA.TODAYS_SCORE_BOARD);
  }
}

export default LiveData;
