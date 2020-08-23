<template>
    <section class="container">
        <h1>TaskList</h1>
        <br>
        <table>
        <tr>
            <th>Task</th>
            <td>
                <input type="text" name="task" class="task">
            </td>
        </tr>
        <tr>
            <th>Date</th>
            <td>
                <input type="datetime-local" name="datetime"class="datetime">
            </td>
        <tr>
            <th></th>
            <td><button @click="insert">save</button>
        </tr>
        </table>

        <hr>
        <ul class="list">
            <li v-for="task in page_tasks">
                {{task}}
            </li>
        </ul>
        <hr>
    </section>
</template>

<script>
export default {
    data: function(){
        return {
            task:'',
            datetime:''
        };
    },
    computed:{
        task:function(){
            return this.$store.state.task.task;
        }
        page_tasks:function(){
            var arr=[];
            var data = this.$store.state.task.task;
            data.forEach(element => {
                arr.push(element);
            });
            return arr;
        }
    },
    methods:{
        insert: function(){
            this.$store.commit('task/insert', 
                {task:this.task,datetime:this.datetime}); 
            this.task = '';
            this.datetime='';
        }
    },
}
</script>

<style>
.container {
  padding:5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
button {
    font-size: 14pt;
    padding:1px 10px;
    margin:5px;
}

th {
    background-color: #3cb371;
    color: white;
}
td {
    background-color:#fffacd;
    color:black;
    padding:5px;
}
.list {
    cursor : pointer;
}

</style>
