<template>
    <div v-if="coins.length > 0">
        <div  v-for="(coin, index) in coins"
            :key="coin.id"
        >
           {{index}} {{ coin.name }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'CoinList',
    created() {
        this.$axios.get('/coins')
            .then(({ data }) => {
                let head = data.splice(0,20);
                this.$store.commit('updateCoins', head);
            });
    },
    computed: {
        ...mapState({
            coins: state => state.coins
        })
    },
};
</script>