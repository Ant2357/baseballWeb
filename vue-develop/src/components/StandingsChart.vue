<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    datas: Array
  },
  data: function () {
    return {
      columns: ["#", "球団名", "勝利数", "敗北数", "引き分け", "勝率", "勝差"],
      chartdata: {
        labels: this.datas.map(v => v.name),
        datasets: [{
            label: '貯金グラフ',
            data: this.datas.map(v => v.win - v.lose),
            backgroundColor: 'rgb(220,233,255)',
            borderWidth: 2,
            borderColor: 'rgb(91,154,234)',
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: ((tooltipItems, data) => {
              const index = tooltipItems.index;
              const asset = data.datasets[0].data[index];
              return asset >= 0 ? String("貯金" + asset) : String("借金" + -asset);
            })
          }
        }
      },
    }
  },

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
