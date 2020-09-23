<template>
<v-dialog max-width="600px" v-model="dialog">

    <template v-slot:activator="{ on, attrs }">
        <v-btn flat class="success" dark v-bind="attrs" v-on="on">
            Add new project
        </v-btn>
    </template>

    <v-card>
        <v-card-title>
            <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="titleRules" clearable></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="infoRules" clearable></v-textarea>

                <v-col class="d-flex" cols="12" sm="8">
                    <v-select :items="persons" label="person" v-model="person" prepend-icon="person" class="mr-5"></v-select>

                    <v-select :items="statuses" label="status" v-model="status" prepend-icon="gavel" class="ml-5"></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="date" label="Due Date" prepend-icon="event" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>

                        <v-date-picker v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>

                <v-btn flat color="success mx-0 mt-3" @click="submit" :loading='loading'><span>Add</span>
                    <v-icon right>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
import db from '@/fb'

export default {
    data: () => ({
        title: "",
        content: "",
        date: null,
        modal: false,
        persons: ['Asif Iqbal', 'Saheb', 'Sajib', 'Samad', 'Husu'],
        statuses: ['complete', 'ongoing', 'overdue'],
        titleRules: [
            v => v.length >= 4 || 'Minimum length is 4 characters'
        ],
        infoRules: [
            v => v.length >= 8 || 'Minimum length is 8 characters'
        ],
        loading: false,
        dialog: false

    }),
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.date,
                    person: this.person,
                    status: this.status
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                })
            }
        }
    }
}
</script>
