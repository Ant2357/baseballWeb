export default [
  {
    text: "パ・リーグ打率順位表",
    data: require("@/assets/PL_AVG.json"),
    mainColumn: "打率"
  },
  {
    text: "パ・リーグホームラン順位表",
    data: require("@/assets/PL_HR.json"),
    mainColumn: "ホームラン"
  },
  {
    text: "パ・リーグ打点順位表",
    data: require("@/assets/PL_RBI.json"),
    mainColumn: "打点"
  },
  {
    text: "パ・リーグ盗塁順位表",
    data: require("@/assets/PL_SB.json"),
    mainColumn: "盗塁"
  }
]