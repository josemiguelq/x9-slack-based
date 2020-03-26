<template>
        <div>
            <v-tabs
                    fixed-tabs
                    background-color="#129e54"
                    dark
                    v-model="tab"
            >
                <v-tab>
                    QA
                </v-tab>
                <v-tab>
                    PROD
                </v-tab>
            </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <Table enviroment="qa" @update-history="updateHistory" />
                    </v-tab-item>
                    <v-tab-item>
                         <Table enviroment="prod" @update-history="updateHistory"  @update-drawer="updateDraw" />
                    </v-tab-item>
                </v-tabs-items>
                <History :history-item="historyItem" :drawer="drawer" @update-drawer="updateDraw" />
        </div>
</template>

<script>
    import History from "@/components/History";
    import Table from "@/components/Table";    

    export default {
        name: 'Home',
        components: {History, Table},
        data() {
            return {
                tab: null,
                mss: [],
                search: '',
                drawer: null,
                historyItem: null,
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
        methods: {                        
            updateDraw(e){
                console.log(e, 'drwa')
                this.drawer = e
            },            
            updateHistory(e){                                        
                this.historyItem = e.history
                this.drawer = e.drawer
            }
        }
    }
</script>
