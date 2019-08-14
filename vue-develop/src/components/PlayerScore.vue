<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ul class="d-flex flex-nowrap list-inline nav nav-tabs">
          <li class="list-inline-item nav-item">
            <button @click="isSelect('clBatterTab')"
              class="nav-link"
              :class="{'active': selectTab === 'clBatterTab'}"
            >セリーグ打者成績</button>
          </li>
          <li class="list-inline-item nav-item">
            <button @click="isSelect('plBatterTab')"
              class="nav-link"
              :class="{'active': selectTab === 'plBatterTab'}"
            >パリーグ打者成績</button>
          </li>

          <li class="list-inline-item nav-item">
            <button @click="isSelect('clPitcherTab')"
              class="nav-link"
              :class="{'active': selectTab === 'clPitcherTab'}"
            >セリーグ投手成績</button>
          </li>
          <li class="list-inline-item nav-item">
            <button @click="isSelect('plPitcherTab')"
              class="nav-link"
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
</div>
</template>

<script>
import PlayerTablePage from '@/components/PlayerTablePage.vue'

import clBatterPageDatas from '@/datas/clBatterPageDatas.js'
import plBatterPageDatas from '@/datas/plBatterPageDatas.js'
import clPitcherPageDatas from '@/datas/clPitcherPageDatas.js'
import plPitcherPageDatas from '@/datas/plPitcherPageDatas.js'

export default {
  name: 'PlayerScore',
  components: {
    PlayerTablePage
  },
  data: function () {
    return {
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
