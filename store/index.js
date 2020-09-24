export const state = () => ({
  boards: [
    { title: 'titlesample', detail: 'detailtest' }
  ]
})

export const mutations = {
  insertBoard (state, board) {
    state.boards.push(board)
  }
  // removeBoard (state, index) {
  //   state.board.splice(index, 1)
  // }
}
