export const state = () => ({
  boards: [
    { id: 0, title: 'titlesample', detail: 'detailtest' }
  ]
})

export const mutations = {
  insertBoard (state, board) {
    state.boards.push(board)
  },
  removeBoard (state, index) {
    state.boards.splice(index, 1)
  }
}
