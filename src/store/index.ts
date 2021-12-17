import { createStore } from 'vuex'
import user from './modules/user'
import layout from './modules/layout'
export default createStore({
  modules: {
    user,
    layout
  }
})
