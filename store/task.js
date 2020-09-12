export const state = () => ({
  task: [],
  page: 0
})

export const mutations = {
  insert (state, obj) {
    state.task.unshift({
      title: obj.title,
      datetime: obj.datetime
    })
  }
}
