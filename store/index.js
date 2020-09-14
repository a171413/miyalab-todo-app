// import Vuex from 'vue'
// // import { Store } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

export const state = () => ({
  boards: [
    // { id: 1, title: '授業課題' },
    // { id: 2, title: '研究室課題' },
    // { id: 3, title: '自習課題' }
  ]
})

export const mutations = {
  insert (state, board) {
    state.boards.push(board)
  },
  update (state, board) {
    state.boards[board.id] = board
  },
  remove (state, index) {
    state.boards.splice(index)
  }
}

// const store = new Vuex.Store({
//   plugins: [
//     createPersistedState({
//       storage: {
//         getItem: key => Cookies.get(key),
//         setItem: (key, value) =>
//           Cookies.set(key, value, { expires: 7, secure: true }),
//         removeItem: key => Cookies.remove(key)
//       }
//     })
//   ]
// })
