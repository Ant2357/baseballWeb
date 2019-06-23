export default [
  {
    text: "セ・リーグ打率順位表",
    data: require("@/assets/CL_AVG.json"),
    mainColumn: "打率"
  },
  {
    text: "セ・リーグホームラン順位表",
    data: require("@/assets/CL_HR.json"),
    mainColumn: "ホームラン"
  },
  {
    text: "セ・リーグ打点順位表",
    data: require("@/assets/CL_RBI.json"),
    mainColumn: "打点"
  },
  {
    text: "セ・リーグ盗塁順位表",
    data: require("@/assets/CL_SB.json"),
    mainColumn: "盗塁"
  }
]