<template>
    <div class="row">
        <mpc-server-list></mpc-server-list>
        <mpc-server-status></mpc-server-status>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue'
    import ServerStatus from './ServerStatus.vue'
        
    export default {    
        components: {
            'mpc-server-list': ServerList,
            'mpc-server-status': ServerStatus
        }
    }
</script>