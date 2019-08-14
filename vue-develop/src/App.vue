<template>
<div>
  <v-header/>
  <router-view></router-view>
</div>
</template>

<script>
import '@/css/bootstrap.min.css'
import '@/css/navbar-top-fixed.css'
import '@/css/style.css'

import VHeader from '@/components/VHeader.vue'

export default {
  name: 'App',
  components: {
    VHeader
  }
}
</script>
