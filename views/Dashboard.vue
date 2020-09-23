<template>
<div class="dashboard">
    <h1><span class="grey--text">Dash</span>b<span class='red--text'>o</span>ard</h1>
    <v-btn class="ma-2" outlined color="pink">
        <v-icon left>mdi mdi-home-modern</v-icon>
        Home
    </v-btn>
    <v-btn class="ma-2" rounded outlined color="primary" dark>Accept
        <v-icon dark right>email</v-icon>
    </v-btn>
    <v-btn text class="ma-2" color="primary" dark>text<v-icon right>mdi-message-text</v-icon>
    </v-btn>
    <v-btn class="ma-2" dark rounded color="pink">Watch Me <v-icon right>mdi-television</v-icon>
    </v-btn>
    <v-btn fab dark color="pink">
        <v-icon>favorite</v-icon>

    </v-btn>
    <br>
    <v-container class="my-5">

        <v-layout row class="mb-3">

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
                        <v-icon left small>folder</v-icon>
                        <span class="caption text-lowercase">By project Name</span>
                    </v-btn>
                </template>
                <span>sort by project name</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
                        <v-icon left small>person</v-icon>
                        <span class="caption text-lowercase">By person</span>
                    </v-btn>
                </template>
                <span>sort by person name</span>
            </v-tooltip>
        </v-layout>

        <v-card color="#E0F2F1" flat v-for="project in projects" :key="project.title">
            <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs12 md6>
                    <div class="caption grey--text">Project title</div>
                    <div>{{ project.title }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Person</div>
                    <div>{{ project.person }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Due by</div>
                    <div>{{ project.due }}</div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div>
                        <v-chip small color="success" :class="`project ${project.status} white--text caption my-2`">{{project.status}} </v-chip>
                    </div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
        </v-card>

        <v-layout row wrap>
            <v-flex xs3 sm6 md12>
                <v-btn outline block class="primary">
                    <v-badge color="green" dot>
                        Text</v-badge>
                </v-btn>
            </v-flex>

            <v-flex xs3 sm6 md3>
                <v-btn block dark color="success">Call</v-btn>
            </v-flex>
            <v-flex xs3 sm6 md6>
                <v-btn block outlined color="orange">Video Call</v-btn>
            </v-flex>
            <v-flex xs3 sm6 md3>
                <v-btn outline block dark color="pink">Meet</v-btn>
            </v-flex>

        </v-layout>
    </v-container>

</div>
</template>

<script>
import db from '@/fb'

export default {
    data() {
        return {
            hover: false,
            projects: [],
            search: ''
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    },
    created() {
        db.collection('projects').onSnapshot(res => {
            const changes = res.docChanges();

            changes.forEach(change => {
                if (change.type === 'added') {
                    this.projects.unshift({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
    }
}
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}

.project.ongoing {
    border-left: 4px solid #ffaa2c;
}

.project.overdue {
    border-left: 4px solid #f83e70;
}

.chips.complete {
    background: #3cd1c2;
}

.layout.chip.ongoing {
    background: #ffaa2c;
}

.chips.overdue {
    background-color: #f83e70;
}
</style>
