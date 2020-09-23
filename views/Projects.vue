<template>
<div class="projects">
    <h1>Projects</h1>

    <v-row justify='center'>
        <v-expansion-panels inset hover>
            <v-expansion-panel v-for="project in projects" :key="project.title">
                <v-expansion-panel-header class="text-uppercase indigo--text">{{project.title}}</v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                    <div class="font-weight-bold orange--text">due by {{project.due}}</div>
                    <div class="pink--text">{{project.person}}</div>
                    <v-divider color='green'></v-divider>
                    <div class="primary--text font-weight-bold">{{project.content}}</div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</div>
</template>

<script>
import db from '@/fb'

export default {
    data() {
        return {
            projects: [],

        }
    },
    computed: {
        Asif_Projects() {
            return this.projects.filter(project => {
                return project.person === 'Asif Iqbal'
            })
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
