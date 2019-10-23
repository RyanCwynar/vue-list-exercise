<template>
    <div>
        <h1>{{coin.name}} | {{coin.symbol}}</h1>
        <p>Rank: {{coin.rank}}, Type: {{coin.type}}</p>
    </div>
</template>
<script>
export default {
    computed: {
        coin: {
            get(){
                return this.$store.state.coins.filter((coin) => {
                    return coin.id == this.$route.params.id;
                })[0];
            }
        }
    }
}
</script>