<template>
    <v-container>
        <v-layout
            text-xs-center
            wrap>
            <v-flex xs12>
                <v-data-table
                    class="elevation-1"
                    :headers="headers"
                    :items="comments">
                    <template
                        v-if="status.success"
                        v-slot:items="props">
                        <td class="text-xs-left">
                            {{ props.item.id }}
                        </td>
                        <td class="text-xs-left">
                            <!-- Stupid users -->
                            {{ props.item.email | lower }}
                        </td>
                        <td class="text-xs-left">
                            {{ props.item.body }}
                        </td>
                    </template>
                    <template
                        v-if="showErrorMessage"
                        v-slot:no-data>
                        <v-alert
                            :value="true"
                            color="error"
                            icon="mdi-alert">
                            Sorry, nothing to display here :(
                        </v-alert>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { getComments } from '../lib/fake-data-client.js';

export default {
    name: 'HelloWorld',
    filters: {
        lower (original) {
            return original.toLowerCase();
        },
    },
    data () {
        return {
            headers: [
                {
                    text: 'Comment Number',
                    align: 'left',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'E-Mail',
                    align: 'left',
                    sortable: true,
                    value: 'email',
                },
                {
                    text: 'Message',
                    align: 'left',
                    sortable: true,
                    value: 'body',
                },
            ],
            comments: [],
            status: {
                requestOccured: false,
                success: false,
                errorMessage: '',
            },
        };
    },
    computed: {
        showErrorMessage () {
            if (this.status.requestOccured && !this.status.success) {
                return true;
            }

            return false;
        },
    },
    async created () {
        const response = await getComments(100);
        this.status.requestOccured = true;

        if (response.success) {
            this.status.success = true;
            this.comments = response.comments;
        } else {
            this.status.success = false;
            this.status.errorMessage = response.error;
            this.comments = [];
        }
    },
};
</script>