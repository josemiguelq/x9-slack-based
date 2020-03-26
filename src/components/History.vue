<template>
    <v-navigation-drawer
            v-model="drawerData"
            absolute
            temporary
            style="width: 30%"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title v-for="(history, i) in historyItemData" v-bind:key="i" class="my-3">
                    {{history.by}} - {{history.ended}} <v-btn
                        color="blue"
                        dark
                        class="mx-2"
                        @click="showHistory(item)"
                >
                    Redeploy
                </v-btn>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "History",
        props: {
            historyItem: {
                type: Array
            },
            drawer: {
                default: null
            }
        },
        data() {
            return {
                historyItemData: this.historyItem,
                drawerData: this.drawer
            }
        },
        watch: {
            historyItem: function () {
                this.historyItemData = this.historyItem
            },
            drawer: function () {
                this.drawerData = this.drawer
            },
            drawerData: function () {
                this.$emit('update-drawer', this.drawerData)
            },
        }
    }
</script>

<style scoped>

</style>
