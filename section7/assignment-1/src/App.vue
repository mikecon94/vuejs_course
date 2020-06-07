<template>
    <div class="container">
        <mpc-header></mpc-header>
        <mpc-server-details></mpc-server-details>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue'
    import ServerDetails from './components/Server/ServerDetails.vue'
    import Footer from './components/Shared/Footer.vue'
    export default {
        components: {
            //These are case-sensitive so could be mpcHeader for example and will work. Not the standard though.
            mpcHeader: Header,
            'mpc-server-details': ServerDetails,
            Footer
        }
    }
</script>

<style>

</style>
