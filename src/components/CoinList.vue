<template>
    <v-container>
        <v-text-field
            label="Search"
            :value="search"
            @input="setSearch($event)"
            />
        <v-data-table
            :headers="headers"
            :items="coins"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            @click:row="goToCoin($event)"
        ></v-data-table>
    </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: 'CoinList',
    created(){ 
        this.getCoins()
    },
    computed: {
        ...mapState({
            coins: state => state.coins,
            search: state => state.search
        }),
    },
    data() {
        return {
            headers: [
                { text: "Rank", value: "rank", filterable: false },
                { text: "Name", value: "name"       },
                { text: "Symbol", value: "symbol"   },
                { text: "Type", value: "type", filterable: false }
            ],
        };
    },
    methods: {
        goToCoin({id}) {
            this.$router.push(`/coin/${id}`)
        },
        ...mapActions(['getCoins']),
        ...mapMutations(['setSearch'])
    }
};
</script>