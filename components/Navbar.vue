<template>
<nav>

    <v-snackbar outlined v-model="snackbar" timeout="5000" top color='pink' max-width="100">
        <span>Yahoo! New Project Added</span>
        <v-btn flat text color="pink" @click="snackbar =false">
            <v-icon>mdi-thumb-up</v-icon>

        </v-btn>
        <v-btn flat text color="orange" @click="snackbar =false">

            <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
    </v-snackbar>

    <v-toolbar flat app>
        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer">
            <v-icon color="pink">alternate_email</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y transition="fab-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn flat text color="pink" dark v-bind="attrs" v-on="on">
                    <span>Menu</span>
                    <v-icon>expand_more</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" :to='link.route' color="blue">
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn text color="black">
            <span> Sing Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="110">
                    <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/117996991_1149277978799085_3730559248719586106_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeGeu66zygMy1TnaF9yIAMJBYTsNGguPXFdhOw0aC49cVxXnXn0GdJYhxRKauRZ7_cEoYPxuktCVJC1drSgQjDJI&_nc_ohc=q6Y4BGJCHPAAX-HyNyt&_nc_ht=scontent.fdac31-1.fna&oh=1ae64188eac97e86d34489c3adb18c8a&oe=5F8AD108">
                </v-avatar>
                <p class="white--text title mt-1 ml-2">Asif Iqbal</p>

            </v-flex>
            <v-flex flat class="mt-4 mb-3">
                <Popup @projectAdded="snackbar= true" />
            </v-flex>
        </v-layout>

        <v-list>

            <router-link v-for="link in links" :key="link.text" :to="link.route">
                <v-list>
                    <v-list-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-action>
                    <v-list-content>
                        <v-list-title class="white--text">{{ link.text }}</v-list-title>
                        <br>
                    </v-list-content>

                </v-list>
            </router-link>

        </v-list>
    </v-navigation-drawer>

</nav>
</template>

<script>
import Popup from './Popup'
export default {
    components: {
        Popup
    },
    data() {
        return {
            drawer: false,
            links: [{
                    icon: 'dashboard',
                    text: 'Dashboard',
                    route: '/'
                },
                {
                    icon: 'folder',
                    text: 'My Projects',
                    route: '/projects'
                },
                {
                    icon: 'person',
                    text: 'Team',
                    route: '/team'
                },
            ],
            snackbar: false
        }
    }
}
</script>

<style>

</style>
