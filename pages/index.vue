<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input
        v-model="title"
        type="text"
        name="addName"
        placeholder="新たなボードの名前を入力してください"
      >
      <template v-if="selected_id === -1">
        <button id="addButton" class="button button--green" @click="insert(title)">
          追加
        </button>
      </template>
      <template v-else>
        <button class="button button--green" @click="update()">
          更新
        </button>
        <button class="button button--green" @click="remove()">
          削除
        </button>
      </template>
    </div>
    <table class="Lists">
      <!--v-forで繰り返し-->
      <tr>
        <td v-for="(item, index) in board" :key="index" @click="select(index)">
          {{ item.title }}
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      selected_id: -1
    }
  },
  computed: {
    board () {
      return this.$store.state.boards
    }
  },
  methods: {
    insert () {
      this.$store.commit('insert',
        { id: this.board.length + 1, title: this.title })
      this.title = ''
    },
    update () {
      this.$store.commit('update',
        { id: this.selected_id, title: this.title })
      this.title = ''
      this.selected_id = -1
    },
    remove () {
      this.$store.commit('remove', this.selected_id)
      this.title = ''
      this.selected_id = -1
    },
    select (index) {
      this.selected_id = index
      this.title = this.board[this.selected_id].title
    }
  }
}
</script>

<style>
/*.container {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/

/*.addArea {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/
</style>
