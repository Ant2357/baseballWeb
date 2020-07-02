<template>
  <table class="table table-responsive table-bordered text-center">
    <thead>
      <tr>
        <th
          v-for="(key, index) in columns"
          :key="key"
          @click="sortBy(key)"
          class="vt-th"
          :class="{ active: sortKey == key }"
        >
          {{ japaneseColumns[index] }}
          <span
            class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'" >
          </span>
        </th>
      </tr>
    </thead>
    <tbody name="vt-tbody" is="transition-group">
      <tr
        v-for="team in filteredData"
        :key="team.name"
      >
        <td>{{ team.rank }}位</td>
        <td class="text-nowrap">{{ team.name }}</td>
        <td>{{ team.playGameCount }}</td>
        <td>{{ team.win }}</td>
        <td>{{ team.lose }}</td>
        <td>{{ team.draw }}</td>
        <td>{{ team.pct }}</td>
        <td>{{ team.gameDiff }}</td>
        <td>{{ team.run }}</td>
        <td>{{ team.ra }}</td>
        <td>{{ team.hr }}</td>
        <td>{{ team.sb }}</td>
        <td>{{ team.avg }}</td>
        <td>{{ team.era }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data: function () {
    const labelInfo = {
      "rank": "順位",
      "name": "球団名",
      "playGameCount": "試合数",
      "win": "勝利数",
      "lose": "敗北数",
      "draw": "引き分け",
      "pct": "勝率",
      "gameDiff": "勝差",
      "run": "得点",
      "ra": "失点",
      "hr": "ホームラン",
      "sb": "盗塁",
      "avg": "打率",
      "era": "防御率"
    }

    const columns = Object.keys(labelInfo);
    return {
      sortKey: "",
      columns: columns,
      japaneseColumns: Object.values(labelInfo),
      sortOrders: columns.reduce((acc, key) => Object.assign(acc, {[key]: 1}), {})
    }
  },

  computed: {
    filteredData: function () {
      const sortKey =  this.sortKey;
      const order = this.sortOrders[sortKey] || 1;
      let data = this.data;

      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    }
  },

  methods: {
    sortBy: function (key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  }
}
</script>

<style scoped>

.vt-th {
  cursor: pointer;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #333;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #333;
}

.vt-tbody-move {
  transition: all 1s ease-in-out;
}

</style>
