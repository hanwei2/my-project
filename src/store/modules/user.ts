import { Commit } from 'vuex';
const state: user = {
    menu: [],
    menuTree: [],
    apis: [1],
    userId: 0,
    userName: '',
}
const mutations = {
    setMenu(state: user, menus: Array<any>) {
        state.menu = menus;
        console.log(menus)
    },
    setApis(state: user, apis: Array<any>) {
        state.apis = apis;
    },
    setUserInfo(state: user, userInfo: userInfo) {
        state.userId = userInfo.userId;
        state.userName = userInfo.userName;
    },
    setMenuTree(state: user, menus: Array<any>) {
        const parentMenu = menus.filter(i => !i.parentId);
        const childrenMenu = menus.filter(i => i.parentId);
        parentMenu.forEach(i => {
            const children = childrenMenu.filter(j => j.parentId === i.id);
            if(children.length > 0) {
                i.children = children
            }
        });
        state.menuTree = parentMenu
        console.log(parentMenu,'parentMenu')
    }
}
const actions = {
    reloadUserPermissions(context: { commit: Commit }) {
        const userInfo = {
            userId: 1,
            userName: '我是东山啊'
        }
        const apis:Array<string> = [];
        const menus = [
            {
                path: '/dashBoard',
                id: 1,
                name: '控制台'
            },
            {
                path: '/role',
                id: 2,
                name: '用户管理'
            },
            {
                path: '/role/role',
                id: 3,
                name: '角色管理',
                parentId: 2
            },
            {
                path: '/role/user',
                id: 4,
                name: '用户管理',
                parentId: 2
            },
        ]
        context.commit('setApis', apis);
        context.commit('setMenu', menus);
        context.commit('setMenuTree', menus);
        context.commit('setUserInfo', userInfo);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}