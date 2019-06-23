<template>
  <tbody>
    <tr
      v-for="v in data"
      :key="v.name"
    >
      <td>{{ v.rank }}位</td>
      <td>{{ v.name }}</td>
      <td>{{ v.team }}</td>
      <td>{{ v.avg }}</td>
      <td>{{ v.hr }}</td>
      <td>{{ v.rbi }}</td>
      <td>{{ v.sb }}</td>
      <td>{{ v.obp }}</td>
      <td>{{ v.slg }}</td>
      <td>{{ v.ops }}</td>
      <td>{{ v.risp }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    data: Array,
  },
}
</script>
