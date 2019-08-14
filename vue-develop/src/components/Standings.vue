<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">セリーグ順位表</h1>
        <standings-table :data="clStandings"/>
        <standings-chart :datas="clStandings"/>
      </div>

      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">パリーグ順位表</h1>
        <standings-table :data="plStandings"/>
        <standings-chart :datas="plStandings"/>
      </div>

      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">セ・パ交流戦順位表</h1>
        <standings-table :data="cpStandings"/>
        <standings-chart :datas="cpStandings"/>
      </div>

      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">オープン戦</h1>
        <standings-table :data="opStandings"/>
        <standings-chart :datas="opStandings"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import StandingsTable from '@/components/StandingsTable.vue'
import StandingsChart from '@/components/StandingsChart.vue'

import clStandings from '@/assets/CL.json'
import plStandings from '@/assets/PL.json'
import cpStandings from '@/assets/CP.json'
import opStandings from '@/assets/OP.json'

export default {
  name: 'Standings',
  components: {
    StandingsTable,
    StandingsChart
  },
  data: function () {
    return {
      clStandings: clStandings,
      plStandings: plStandings,
      cpStandings: cpStandings,
      opStandings: opStandings,
    }
  }
}
</script>
