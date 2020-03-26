<template>
    <div class="px-10 my-10">
                            <v-row>
                                <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Buscar Ms"
                                        single-line
                                        hide-details
                                        class="col-md-4"
                                ></v-text-field>
                            </v-row>
                            <v-data-table
                                    :headers="headers"
                                    :items="mss"
                                    item-key="name"
                                    :search="search"
                                    class="elevation-1"
                            >
                                <template v-slot:item.action="{ item }" >
                                    <v-btn
                                            color="#129e54"
                                            dark
                                            class="mx-2"
                                            @click="showHistory(item)"
                                    >
                                        Histórico
                                    </v-btn>

                                </template>
                            </v-data-table>
                        </div>
</template>
<script>
import slackApi from '@/services/slackApi'
    import mapSlackResponse from "@/services/mapSlackResponse";
export default {
    props: {
        enviroment : {
            type: String
        }
    },
    data() {
            return {                
                mss: [],
                search: '',
                drawer: null,                
                headers: [
                    {
                        text: 'Micro',
                        align: 'start',
                        value: 'ms',
                    },
                    {text: 'Build', value: 'build'},
                    {text: 'PR', value: 'pr'},
                    {text: 'Usuario', value: 'by'},
                    {text: 'Inicio', value: 'started'},
                    {text: 'Fim', value: 'ended'},
                    { text: '', value: 'action', sortable: false },
                ],
                intervalid1: ''
            }
        },
        created() {
            this.getMss()
        },
        mounted() {
            this.intervalid1 = setInterval(this.getMss.bind(this), 10000)
        },
        beforeDestroy () {
            clearInterval(this.intervalid1)
        },
        methods: {
            async getMss() {                   
                let enviromentName = "qa"
                let enviromentChannel = "deploy"
                if(this.enviroment === 'prod'){
                    enviromentName = "prod"
                    enviromentChannel = "prod-deploy"
                }

                await
                    slackApi.get(`search.messages?query=in:${enviromentChannel} Deploy Confirmed to ${enviromentName}&sort=timestamp&count=80`)
                    .then(({data}) => {
                        const m = data.messages.matches
                        this.mss = mapSlackResponse(m)
                    })
                    .catch((e) => (console.log(e)))
            },
            showHistory(item) {                                       
                this.$emit('update-history', {history: item.history, drawer: !this.drawer})
            
            },           
        }
}
</script>