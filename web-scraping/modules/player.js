
module.exports = class Player {

  /**
   *Creates an instance of Player.
   */
  constructor() {
    // 順位
    this.rank = 0;
    // 名前
    this.name = "";
    // チーム名
    this.team = "";
    // 打率
    this.avg = 0.0;
    // 本塁打
    this.hr = 0;
    // 打点
    this.rbi = 0;
    // 盗塁
    this.sb = 0;
    // 出塁率
    this.obp = 0.0;
    // 長打率
    this.slg = 0.0;
    // OPS
    this.ops = 0.0;
    // 得点圏打率
    this.risp = 0.0;

    // 防御率
    this.era = 0.0;
    // 勝利
    this.win = 0;
    // 敗北
    this.lose = 0;
    // 奪三振
    this.k = 0;
    // 奪三振率
    this.k9 = 0.0;
    // ホールド
    this.hold = 0;
    // セーブ
    this.save = 0;
  }

  /**
   * チームのフルネームをを返す
   * @param {String} teamName
   * @returns {String}
   */
  fullTeamName(teamName) {
    const fullTeamNames = {
      "（広）": "広島",
      "（巨）": "巨人",
      "（ヤ）": "ヤクルト",
      "（神）": "阪神",
      "（デ）": "DeNA",
      "（中）": "中日",
      "（ソ）": "ソフトバンク",
      "（日）": "日本ハム",
      "（西）": "西武",
      "（オ）": "オリックス",
      "（ロ）": "ロッテ",
      "（楽）": "楽天"
    };

    return typeof fullTeamNames[teamName] === "undefined" ? "チーム名不明" : fullTeamNames[teamName];
  }

  /**
   * 打者順位表Tableの値を取り出してメンバ変数に格納
   * @param {DOM} tableDom
   */
  setTableInfoBatter(tableDom) {
    this.rank = Number(tableDom.children().eq(0).text());
    this.name = tableDom.children().eq(1).text();
    this.team = this.fullTeamName(tableDom.children().eq(2).text());
    this.avg = Number(tableDom.children().eq(3).text());
    this.hr = Number(tableDom.children().eq(10).text());
    this.rbi = Number(tableDom.children().eq(12).text());
    this.sb = Number(tableDom.children().eq(19).text());
    this.obp = Number(tableDom.children().eq(22).text());
    this.slg = Number(tableDom.children().eq(23).text());
    this.ops = Number(tableDom.children().eq(24).text());
    this.risp = Number(tableDom.children().eq(25).text());
  }

  /**
   * 投手順位表Tableの値を取り出してメンバ変数に格納
   * @param {DOM} tableDom
   */
  setTableInfoPitcher(tableDom) {
    this.rank = Number(tableDom.children().eq(0).text());
    this.name = tableDom.children().eq(1).text();
    this.team = this.fullTeamName(tableDom.children().eq(2).text());
    this.era = Number(tableDom.children().eq(3).text());
    this.win = Number(tableDom.children().eq(9).text());
    this.lose = Number(tableDom.children().eq(10).text());
    this.hold = Number(tableDom.children().eq(11).text());
    this.save = Number(tableDom.children().eq(13).text());
    this.k = Number(tableDom.children().eq(18).text());
    this.k9 = Number(tableDom.children().eq(19).text());
  }
}