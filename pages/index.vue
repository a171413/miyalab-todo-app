<template>
  <section class="container">
    <h1>Todo App</h1>
    <el-form
      ref="board"
      :model="board"
      :rules="rules"
    >
      <el-form-item
        label="ボードタイトル"
        prop="title"
      >
        <el-input
          v-model="board.title"
          auto-complete="off"
        />
      </el-form-item>
      <el-form-item
        label="ボード詳細"
        prop="detail"
      >
        <el-input
          v-model="board.detail"
          auto-complete="off"
        />
      </el-form-item>
      <el-checkbox
        v-model="isDeleteMode"
      >
        ボードを削除する
      </el-checkbox>
      <el-form-item
        v-show="isDeleteMode"
        label="削除するボード番号"
        prop="id"
      >
        <el-input
          v-model="board.id"
          auto-complete="off"
        />
      </el-form-item>
    </el-form>
    <!--    <div-->
    <!--      v-show="isDeleteMode"-->
    <!--    >-->
    <!--      <p>-->
    <!--        削除したいボードの番号-->
    <!--        <el-input-->
    <!--          v-model="board.id"-->
    <!--          placeholder="削除したいボードの番号を入力してください"-->
    <!--        />-->
    <!--      </p>-->
    <!--    </div>-->
    <div>
      <el-button
        type="primary"
        @click="handleClickSubmit"
      >
        {{ buttonText }}
      </el-button>
    </div>
    <ul>
      <li v-for="(item, index) in $store.state.boards" :key="index">
        <nuxt-link
          :to="{ name: 'board-id', params: { id: index } }"
        >
          {{ index }} : {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      board: {
        id: '',
        title: '',
        detail: ''
      },
      isDeleteMode: false,
      rules: {
        title: [
          { required: true, message: 'ボードのタイトルを入力してください', trigger: 'blur' },
          { min: 1, max: 30, message: 'ボードのタイトルは1〜30文字で入力してください', trigger: 'blur' }
        ],
        detail: [
          { required: true, message: 'ボードの詳細を入力してください', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '削除したいボードの番号を入力してください', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    buttonText () {
      return this.isDeleteMode ? '削除' : '追加'
    }
  },
  methods: {
    handleClickSubmit () {
      if (this.isDeleteMode) { // deleteMode=true=削除したいとき
        try {
          this.$store.commit('removeBoard', this.board.id)
          this.$notify.success({
            title: 'ボードの削除成功',
            message: 'ボードの削除に成功しました',
            position: 'bottom-right',
            duration: 3000
          })
          this.board.title = ''
          this.board.detail = ''
          this.board.id = ''
        } catch (e) {
          this.$notify.error({
            title: 'ボードの削除失敗',
            message: '検索に失敗し，既に削除されているかそのタイトルのボードは存在しません',
            position: 'bottom-right',
            duration: 3000
          })
        }
      } else { // deleteMode=false=追加したいとき
        try {
          this.$store.commit('insertBoard', { id: this.$store.state.boards.length, title: this.board.title, detail: this.board.detail })
          this.$notify.success({
            title: 'ボードの作成完了',
            message: 'ボードの作成に成功しました',
            position: 'bottom-right',
            duration: 3000
          })
          this.board.title = ''
          this.board.detail = ''
        } catch (e) {
          this.$notify.error({
            title: 'ボードの作成失敗',
            message: 'ボードの作成に失敗しました',
            position: 'bottom-right',
            duration: 3000
          })
        }
      }
    }
  }
}
</script>

<style >

</style>
