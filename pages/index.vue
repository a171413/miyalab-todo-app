<template>
  <section class="container">
    <h1>Todo App</h1>
    <p>
      タイトル：
      <input
        v-model="board.title"
        type="text"
      ></input>
    </p>
    <p>
      ボードの詳細：
      <input
        v-model="board.detail"
        type="text"
      ></input>
    </p>
    <div>
      <button
        @click="insertBoard"
      >
        ボードを追加する
      </button>
    </div>
    <ul>
      <li v-for="(item, index) in $store.state.boards" :key="index">
        <span>{{ index }}</span> : <span>{{ item.title }}</span>
      </li>
    </ul>
    <!--<checkbox_button v-model="isDeleteMode">選択したボードを削除する</checkbox_button>-->
  </section>
</template>

<script>
export default {
  data () {
    return {
      board: {
        title: '',
        detail: ''
      }
      // isDeleteMode: false
    }
  },
  methods: {
    insertBoard () {
      this.$store.commit('insertBoard', { title: this.board.title, detail: this.board.detail })
    }
    // removeBoard () {
    //   this.$store.commit('removeBoard', )
    // }
  }
}
</script>

<style scoped>

</style>
