<template>
    <v-container>
        <v-card>
            <v-card-text>
                <div>{{coin.symbol}}</div>
                <p class="display-1 text--primary">
                    {{coin.name}}
                </p>
                <p class="text--primary">Market capitalization rank across the market: {{coin.rank}}</p>
                <v-chip>
                    <span style="text-transform: capitalize;">{{coin.type}}</span>
                </v-chip>
            </v-card-text>
        </v-card>
    </v-container>
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