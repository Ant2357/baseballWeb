<template>
  <tbody>
    <tr
      v-for="v in data"
      :key="v.name"
    >
      <td>{{ v.rank }}位</td>
      <td>{{ v.name }}</td>
      <td>{{ v.team }}</td>
      <td>{{ v.era }}</td>
      <td>{{ v.win }}</td>
      <td>{{ v.lose }}</td>
      <td>{{ v.k }}</td>
      <td>{{ v.k9 }}</td>
      <td>{{ v.hold }}</td>
      <td>{{ v.save }}</td>
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
