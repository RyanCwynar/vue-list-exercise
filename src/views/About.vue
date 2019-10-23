<template>
  <div class="about">
    <h1>List Coins</h1>
    <coin-list/>
  </div>
</template>
<script>
import CoinList from '@/components/CoinList'
export default {
  components: { CoinList }
}
</script>