export const state = () => ({
  tasks: [
    { id: 0, title: 'task-title', detail: 'task-detail', boardID: 0 }
  ]
})

export const mutations = {
  insertTask (state, task) {
    state.tasks.push(task)
  },
  removeTask (state, index) {
    state.tasks.splice(index, 1)
  }
}
