<template>
    <div class="">
        <input type="text" class="form-control" v-model="team_name" 
               @keyup="AutoComplete" @focus="Focus" @blur="Blur">
            <ul>
               <li v-for="team in teams">{{team}}</li> 
            </ul>
        
    </div>
    
</template>


<script>
    export default {
        name: 'TeamSelector',
        data() {
            return {
                teams: ["Palmeiras", "Corinthians", "São Paulo", "Santos"],
                team_name: '',
                selected: []
            }
        },
        methods: {
            AutoComplete() {
                clearTimeout(timer);
                var self = this;
                timer = setTimeout(function(){
                    workerActions.getWorkerSuggestedList(self.contract.type_contract, self.contract.id_contract, self.worker_name, self.inconsistency.date).then(response => self.workers = response.data ? response.data : []);
                }, 500);
            },
            Select(worker){
                this.selected = worker;
                this.worker_name = "";
                this.focus = false;
            },
            Unselect() {
                this.selected = null
                this.AutoComplete();
            },
            Focus(){
                this.focus = true;
            },
            Blur(){
                var self = this;
                setTimeout(function(){ self.focus = false}, 150);
            }
        },
        watch: {
            selected: function (val) {
                this.$emit("selectWorker", val ? val.id : null)
            }
        }
    }

</script>
