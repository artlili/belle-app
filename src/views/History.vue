<template>
  <div class="history">
    <router-view></router-view>
    <HistoryButtons :hide="$route.name"/>
  </div>
</template>

<script>
import HistoryButtons from '@/components/HistoryButtons'
export default {
  name: 'History',
  components: {
    HistoryButtons
  }
}
</script>
