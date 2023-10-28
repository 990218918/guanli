import { createStore } from "vuex";

export default createStore({
    state: {
        currentMenu: null
    },
    mutations: {
        selectMenu(state, val) {
            val.name == 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
        }
    }
})