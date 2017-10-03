<template>
    <div id="app">
        <app-nav></app-nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-none d-sm-block bg-light sidebar">
                    <h1>{{test}}</h1>
                    <team-selection></team-selection>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
    import AppNav from '../components/AppNav'
    import TeamSelection from '../components/TeamSelection'
    export default {
        name: 'app',
        data() {
            return {
                test: 'thiago 2'
            }
        },
        components: {
            AppNav,
            TeamSelection
        }
    }

</script>
