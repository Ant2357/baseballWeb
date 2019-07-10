<template>
<div>
  <v-header/>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">セリーグ順位表</h1>
        <standings-table :data="clStandings"/>
        <standings-chart :datas="clStandings" :height="200"/>
      </div>

      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">パリーグ順位表</h1>
        <standings-table :data="plStandings"/>
        <standings-chart :datas="plStandings" :height="200"/>
      </div>

      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">セ・パ交流戦順位表</h1>
        <standings-table :data="cpStandings"/>
        <standings-chart :datas="cpStandings" :height="200"/>
      </div>

      <div class="col-12">
        <h1 class="display-6 mt-3 mb-3 border-underlining">オープン戦</h1>
        <standings-table :data="opStandings"/>
        <standings-chart :datas="opStandings" :height="200"/>
      </div>
    </div>

    <div>
      <ul class="list-inline nav nav-tabs">
        <li class="list-inline-item nav-item">
          <button @click="isSelect('clBatterTab')" class="nav-link"
          :class="{'active': selectTab === 'clBatterTab'}"
          >セリーグ打者成績</button>
        </li>
        <li class="list-inline-item nav-item">
          <button @click="isSelect('plBatterTab')" class="nav-link"
          :class="{'active': selectTab === 'plBatterTab'}"
          >パリーグ打者成績</button>
        </li>

        <li class="list-inline-item nav-item">
          <button @click="isSelect('clPitcherTab')" class="nav-link"
          :class="{'active': selectTab === 'clPitcherTab'}"
          >セリーグ投手成績</button>
        </li>
        <li class="list-inline-item nav-item">
          <button @click="isSelect('plPitcherTab')" class="nav-link"
          :class="{'active': selectTab === 'plPitcherTab'}"
          >パリーグ投手成績</button>
        </li>
      </ul>
      <ul>
        <li v-if="selectTab === 'clBatterTab'" class="list-unstyled">
          <player-table-page
            v-for="data of clBatterPageDatas"
            :key="data.text"
            :text="data.text"
            :data="data.data"
            :isBatter="true"
            :mainColumn="data.mainColumn"
          />
        </li>
        <li v-if="selectTab === 'plBatterTab'" class="list-unstyled">
          <player-table-page
            v-for="data of plBatterPageDatas"
            :key="data.text"
            :text="data.text"
            :data="data.data"
            :isBatter="true"
            :mainColumn="data.mainColumn"
          />
        </li>

        <li v-else-if="selectTab === 'clPitcherTab'" class="list-unstyled">
          <player-table-page
            v-for="data of clPitcherPageDatas"
            :key="data.text"
            :text="data.text"
            :data="data.data"
            :isBatter="false"
            :mainColumn="data.mainColumn"
          />
        </li>
        <li v-else-if="selectTab === 'plPitcherTab'" class="list-unstyled">
          <player-table-page
            v-for="data of plPitcherPageDatas"
            :key="data.text"
            :text="data.text"
            :data="data.data"
            :isBatter="false"
            :mainColumn="data.mainColumn"
          />
        </li>
      </ul>
    </div>

  </div>
</div>
</template>

<script>
import '@/css/bootstrap.min.css'
import '@/css/navbar-top-fixed.css'
import '@/css/style.css'

import VHeader from '@/components/VHeader.vue'
import StandingsTable from '@/components/StandingsTable.vue'
import StandingsChart from '@/components/StandingsChart.vue'
import PlayerTablePage from '@/components/PlayerTablePage.vue'

// 順位表
import clStandings from '@/assets/CL.json'
import plStandings from '@/assets/PL.json'
import cpStandings from '@/assets/CP.json'
import opStandings from '@/assets/OP.json'

import clBatterPageDatas from '@/datas/clBatterPageDatas.js'
import plBatterPageDatas from '@/datas/plBatterPageDatas.js'
import clPitcherPageDatas from '@/datas/clPitcherPageDatas.js'
import plPitcherPageDatas from '@/datas/plPitcherPageDatas.js'

export default {
  name: 'App',
  components: {
    VHeader,
    StandingsTable,
    StandingsChart,
    PlayerTablePage
  },
  data: function () {
    return {
      clStandings: clStandings,
      plStandings: plStandings,
      cpStandings: cpStandings,
      opStandings: opStandings,

      clBatterPageDatas: clBatterPageDatas,
      plBatterPageDatas: plBatterPageDatas,
      clPitcherPageDatas: clPitcherPageDatas,
      plPitcherPageDatas: plPitcherPageDatas,

      selectTab: 'clBatterTab'
    }
  },
  methods: {
    isSelect: function(tabName) {
      this.selectTab = tabName;
    }
  }
}
</script>
