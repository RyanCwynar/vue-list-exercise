<template>
    <v-container fluid>
        <v-text-field
            label="Search"
            v-model="search"/>
        <v-data-table
            :headers="headers"
            :items="coins"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            @click:row="goToCoin($event)"
            loading
        ></v-data-table>
    </v-container>
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
            coins: state => state.coins,
        }),
        search: {
            get() {
                return this.$store.state.search;
            },
            set(v) {
                this.$store.commit('setSearch', v);
            }
        }
    },
    data() {
        return {
            headers: [
                {
                    text: "Rank", value: "rank", filterable: false
                },
                {
                    text: "Name", value: "name"
                },
                {
                    text: "Symbol", value: "symbol"
                },
                {
                    text: "Type", value: "type", filterable: false
                }
            ],
        };
    },
    methods: {
        goToCoin({id}) {
            this.$router.push(`/coin/${id}`);
        }
    }
};
</script>