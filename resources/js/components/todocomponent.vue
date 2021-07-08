<template>
    <div class="w-25">
        <form v-on:submit.prevent="saveData">
            <div class="input-group mb-3 w-100">
                <input v-model="title" type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-success" type="summit" id="button-addon2">Add this to your list</button>
                </div>
            </div>
        </form>
        <div class="w-25">
            <div v-for="todo in todos" v-bind:key="todo.id" class="w-100">
                {{todo.title}}
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            todos:'',
            title:'',
        }
    },
    methods:{
        getTodos(){
            axios.get('api/todo').then((res)=>{
                this.todos=res.data;
            }).catch(function(error){
                console.log(error);
            });
        },
        saveData(){
            let data = new FormData;
            data.append('title',this.title);
            axios.post('api/todo',data).then((res)=>{
                this.title="";
                this.getTodos();
            });
        }
    },
    mounted(){
        this.getTodos();
    }
}
</script>

<style>

</style>