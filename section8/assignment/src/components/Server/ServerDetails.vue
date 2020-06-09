<template>
    <div class="col-xs-12 col-sm-6">
        <p>Current Server: {{ serverId }}</p>
        <p>Server Status: {{ serverStatus }}</p>
        <button
            @click="resetServerStatus">Reset Status</button>
    </div>

</template>

<script>
import { eventBus } from '../../main.js'

export default {
    data: function() {
        return {
            serverId: 1,
            serverStatus: 'Normal'
        }
    },
    methods: {
        resetServerStatus() {
            this.serverStatus = 'Normal';
            var server = {
                id: this.serverId,
                status: this.serverStatus
            };
            console.log(server);
            eventBus.$emit('updateServerStatus', server);
        }
    },
    created() {
        eventBus.$on('currentServerUpdate', (server) => {
            console.log("Server Details Updated: " + server.id);
            this.serverId = server.id;
            this.serverStatus = server.status;
        })
    }
}


</script>

<style>

</style>
