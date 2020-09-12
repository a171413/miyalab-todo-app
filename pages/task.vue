<template>
  <section class="container">
    <h1>TaskList</h1>
    <br>
    <table>
      <tr>
        <th>Task</th>
        <td>
          <input v-model="title" type="text" name="title" class="task">
        </td>
      </tr>
      <tr>
        <th>Date</th>
        <td>
          <input v-model="datatime" type="datetime-local" name="datetime" class="datetime">
        </td>
      </tr>
      <tr>
        <th>Save</th>
        <td>
          <button @click="insert">
            save
          </button>
        </td>
      </tr>
    </table>

    <hr>
    <ul class="list">
      <li v-for="(item, index) in page_tasks" :key="index">
        {{ item.task }}
      </li>
    </ul>
    <hr>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      datetime: ''
    }
  },
  computed: {
    task () {
      return this.$store.state.task.task
    },
    page_tasks () {
      const arr = []
      const data = this.$store.state.task.task
      data.forEach((element) => {
        arr.push(element)
      })
      return arr
    }
  },
  methods: {
    insert () {
      this.$store.commit('task/insert', { title: this.title, datetime: this.datetime })
      this.title = ''
      this.datetime = ''
    }
  }
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
