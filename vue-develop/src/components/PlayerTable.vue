<template>
  <table class="table table-bordered text-center">
    <thead>
      <tr>
        <th
          v-for="key in isBatter ? batterColumns : pitcherColumns"
          :key="key"
          :class="key === mainColumn  ? 'mainColumn' : ''" >
          {{ key }}
        </th>
      </tr>
    </thead>
    <template v-if="isBatter">
      <batter-tbody :data="data" />
    </template>
    <template v-else>
      <pitcher-tbody :data="data" />
    </template>
  </table>
</template>

<script>
import BatterTbody from './playerTableTbody/BatterTbody.vue'
import PitcherTbody from './playerTableTbody/PitcherTbody.vue'
export default {
  components: {
    BatterTbody,
    PitcherTbody
  },
  props: {
    data: Array,
    isBatter: Boolean,
    mainColumn: String
  },

  data: function() {
    return {
      batterColumns: ["順位", "名前", "チーム", "打率", "ホームラン", "打点", "盗塁", "出塁率", "長打率", "OPS", "得点圏打率"],
      pitcherColumns: ["順位", "名前", "チーム", "防御率", "勝利", "敗北", "奪三振", "奪三振率", "ホールド", "セーブ"]
    }
  }
}
</script>
