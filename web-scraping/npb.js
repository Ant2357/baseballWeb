const client = require("cheerio-httpcli");
const BaseballTeam = require("./modules/baseballTeam");
const Player = require("./modules/player");

module.exports = class Npb {

  /**
   * 順位表
   * 
   * 対応しているリーグ:
   * セリーグ: CL,
   * パリーグ: PL,
   * セ・パ交流戦: CP,
   * オープン戦: OP
   * @param {String} leagueName
   * @returns {Array}
   */
  standings(leagueName) {
    const leagueUrls = {
      "CL": "1",
      "PL": "2",
      "CP": "26",
      "OP": "5"
    };
    const url = "https://baseball.yahoo.co.jp/npb/standings/detail/"
      + leagueUrls[(typeof leagueUrls[leagueName] === "undefined" ? "CL" : leagueName)];

    const web = client.fetchSync(url);
    if (web.response.request.uri.href !== url) {
      return [];
    }

    const searchNum = leagueName === "OP" || leagueName === "CP"  ? 12 : 6;
    let teams = [];
    web.$('.bb-rankTable > tbody > tr').each(function (idx) {
      if (idx < searchNum) {
        let team = new BaseballTeam();
        team.setTableInfo(web.$(this), leagueName);
        teams.push(team);
      }
    });

    return teams;
  }

  /**
   * 個人記録順位表
   * @param {String} leagueName
   * @param {boolean} isPitcher
   * @param {String} tag 記録内容(打率: AVG)
   * @param {number} [searchNum=10] 上位searchNum人
   * @returns {Array}
   */
  playerStandings(leagueName, isPitcher, tag, searchNum = 10) {
    const playerTagUrls = {
      "CL": "?series=1",
      "PL": "?series=2",
      "AVG": "&type=1",
      "HR": "&type=9",
      "RBI": "&type=13",
      "SB": "&type=20",
      "OBP": "&type=12",
      "OPS": "&type=25",
      "ERA": "&type=1",
      "WIN": "&type=6",
      "LOSE": "&type=7",
      "K": "&type=14",
      "K9": "&type=15",
      "H": "&type=23",
      "S": "&type=8"
    };

    const url = "https://baseball.yahoo.co.jp/npb/stats/"
      + (isPitcher ? "pitcher" : "batter")
      + (typeof playerTagUrls[leagueName] === "undefined" ? playerTagUrls["CL"] : playerTagUrls[leagueName])
      + (typeof playerTagUrls[tag] === "undefined" ? "" : playerTagUrls[tag]);

    const web = client.fetchSync(url);
    let players = [];
    web.$('.NpbPlSt > tr').each(function (idx) {
      // tr[0]には見出しが記載されている為Skip(打率/試合/打席)
      if (idx === 0 || idx > searchNum) {
        return;
      }

      try {
        let player = new Player();
        if (isPitcher) {
          player.setTableInfoPitcher(web.$(this));
        } else {
          player.setTableInfoBatter(web.$(this));
        }

        players.push(player);
      } catch (error) {
        console.error(error);
        return;
      }
    });

    return players;
  }
}
