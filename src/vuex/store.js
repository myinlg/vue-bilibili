import vue from 'vue';
import vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import test from './modules/test';

vue.use(vuex);

const store = new vuex.Store({
    modules: {
        test,
    },
    plugins: [createPersistedState({ storage: window.localStorage })],
});

export default store;