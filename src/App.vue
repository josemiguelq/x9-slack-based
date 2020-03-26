<template>
    <v-app>
        <v-app-bar
                app
                color="#129e54"
                dark
        >
            <v-spacer></v-spacer>

            <span class="mr-2">Deploys</span>
        </v-app-bar>

        <v-content>
            <Home/>
        </v-content>
    </v-app>
</template>

<script>
    import Home from './views/Home';

    export default {
        name: 'App',

        components: {
            Home,
        },

        data: () => ({
            //
        }),
    };
</script>
