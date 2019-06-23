
<template>
  <div>
    <h1 class="display-6 mt-3 mb-3 border-underlining">{{ text }}</h1>
    <player-table
      :data="data"
      :isBatter="isBatter"
      :mainColumn="mainColumn"
    />
  </div>
</template>

<script>
import PlayerTable from './PlayerTable.vue'

export default {
  components: {
    PlayerTable
  },
  props: {
    text: String,
    data: Array,
    isBatter: Boolean,
    mainColumn:String,
  },
}
</script>
