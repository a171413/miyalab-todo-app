import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

// const cookieStorage = {
//   getItem (key) {
//     return Cookies.getJSON(key)
//   },
//   setItem (key, value) {
//     return Cookies.set(key, value, { expires: 7, secure: true })
//   },
//   removeItem (key) {
//     return Cookies.remove(key)
//   }
// }

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'boards',
    // paths: ['index-boards'],
    storage: {
      getItem: (key) => {
        process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key]
      },
      setItem: (key, value) => Cookies.set(key, value, { expires: 365, secure: !isDev }),
      removeItem: (key) => {
        Cookies.remove(key)
      }
    }
  })(store)
}
