<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="server in servers"
                @click="updateServerDetails(server)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        data: function(){
            return {
                servers: [
                    {
                        id: 1,
                        status: 'Normal'
                    },
                    {
                        id: 2,
                        status: 'Critical'
                    },
                    {
                        id: 3,
                        status: 'Unknown'
                    },
                    {
                        id: 4,
                        status: 'Normal'
                    }],
                    currentServerId: 1,
                    currentStatus: 'Normal' 
            };
        },
        methods: {
            updateServerDetails(server) {
                eventBus.$emit('currentServerUpdate', server);
            }
        },
        created() {
            eventBus.$on('updateServerStatus', (object) => {
                this.servers.find(server => server.id === object.id).status = object.status;
            })
        }
    }
</script>

<style>

</style>
