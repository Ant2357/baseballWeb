export default [
  {
    text: "セ・リーグ防御率順位表",
    data: require("@/assets/CL_ERA.json"),
    mainColumn: "防御率"
  },
  {
    text: "セ・リーグ勝利数順位表",
    data: require("@/assets/CL_WIN.json"),
    mainColumn: "勝利"
  },
  {
    text: "セ・リーグホールド順位表",
    data: require("@/assets/CL_H.json"),
    mainColumn: "ホールド"
  },
  {
    text: "セ・リーグセーブ数順位表",
    data: require("@/assets/CL_S.json"),
    mainColumn: "セーブ"
  }
]