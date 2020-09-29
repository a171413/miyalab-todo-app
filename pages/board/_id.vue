<template>
  <section class="container">
    <h1>ボードID＝{{ $route.params.id }}のページ</h1>
  </section>
</template>

<script>
export default {
  date () {
    return {
      task: {
        id: '',
        title: '',
        detail: ''
      },
      isDeleteMode: false
    }
  },
  computed: {
    buttonText () {
      return this.isDeleteMode ? '削除' : '追加'
    }
  },
  methods: {
    handleClickSubmit () {
      if (this.isDeleteMode) {
        try {
          this.$store.task.commit('removeTask', this.task.id)
          this.$notify.success({
            title: 'タスクの削除成功',
            message: 'タスクの削除に成功しました',
            position: 'bottom-right',
            duration: 3000
          })
        } catch (e) {
          this.$notify.error({
            title: 'タスクの削除失敗',
            message: '検索に失敗し，既に削除されているかそのタイトルのタスクは存在しません',
            position: 'bottom-right',
            duration: 3000
          })
        }
      }
    }
  }
}
</script>
