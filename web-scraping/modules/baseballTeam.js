
module.exports = class BaseballTeam {

  /**
   *Creates an instance of BaseballTeam.
   */
  constructor() {
    this.rank = 0;
    this.name = "";
    this.win = 0;
    this.lose = 0;
    this.draw = 0;
    this.pct = 0.0;
    this.gameDiff = 0.0;
    this.run = 0;
    this.ra = 0;
    this.hr = 0;
    this.sb = 0;
    this.avg = 0;
    this.era = 0.0;
  }

  /**
   * 順位表Tableの値を取り出してメンバ変数に格納
   * @param {DOM} tableDom
   * @param {string} leagueName
   */
  setTableInfo(tableDom, leagueName) {
    // Webスクレイピング先の順位表にて、
    // オープン戦、交流戦だけ残試合数表記がないという奇妙な仕様の為調整
    const isSkip = leagueName === "CL" || leagueName === "PL" || leagueName == "CP";

    const rank = tableDom.children().eq(0).text().replace(/[^0-9]/g, "");
    this.rank =  rank === "" ? 9999 : Number(rank);
    this.name = tableDom.children().eq(1).text().trim();
    this.win = Number(tableDom.children().eq(3).text());
    this.lose = Number(tableDom.children().eq(4).text());
    this.draw = Number(tableDom.children().eq(5).text());
    this.pct = Number(tableDom.children().eq(6).text());
    this.gameDiff = tableDom.children().eq(7).text();
    this.run = Number(tableDom.children().eq(8 + isSkip).text());
    this.ra = Number(tableDom.children().eq(9 + isSkip).text());
    this.hr = Number(tableDom.children().eq(10 + isSkip).text());
    this.sb = Number(tableDom.children().eq(11 + isSkip).text());
    this.avg = Number(tableDom.children().eq(12 + isSkip).text());
    this.era = Number(tableDom.children().eq(13 + isSkip).text());
  }
}
