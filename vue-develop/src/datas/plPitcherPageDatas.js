export default [
  {
    text: "パ・リーグ防御率順位表",
    data: require("@/assets/PL_ERA.json"),
    mainColumn: "防御率"
  },
  {
    text: "パ・リーグ勝利数順位表",
    data: require("@/assets/PL_WIN.json"),
    mainColumn: "勝利"
  },
  {
    text: "パ・リーグホールド順位表",
    data: require("@/assets/PL_H.json"),
    mainColumn: "ホールド"
  },
  {
    text: "パ・リーグセーブ数順位表",
    data: require("@/assets/PL_S.json"),
    mainColumn: "セーブ"
  }
]