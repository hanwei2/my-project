import { Commit } from 'vuex';
const state: user = {
    menu: [
        {
            path: '/dashBoard',
            id: 1,
            name: '用户管理'
        },
        {
            path: '/role/role',
            id: 2,
            name: '用户管理'
        },
        {
            path: '/user/user',
            id: 3,
            name: '用户管理',
            parentId: 2
        },
    ],
    apis: [1],
    userId: 0,
    userName: '',
}
const mutations = {
    setMenu(state: user, menus: Array<any>) {
        state.menu = menus;
    },
    setApis(state: user, apis: Array<any>) {
        state.apis = apis;
    },
    setUserInfo(state: user, userInfo: userInfo) {
        state.userId = userInfo.userId;
        state.userName = userInfo.userName;
    }
}
const actions = {
    reloadUserPermissions(context: { commit: Commit }) {
        const userInfo = {
            userId: 1,
            userName: '我是东山啊'
        }
        const apis = ['aa'];
        const menus = [
            {
                path: '/dashBoard',
                id: 1,
                name: '用户管理'
            },
            {
                path: '/role',
                id: 2,
                name: '用户管理'
            },
            {
                path: '/user',
                id: 3,
                name: '用户管理',
                parentId: 2
            },
        ]
        context.commit('setApis', apis);
        context.commit('setMenu', menus);
        context.commit('setUserInfo', userInfo);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}