import { Commit } from 'vuex';
const state: user = {
    menu: [],
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
                "id": 900,
                "parentId": -1,
                "icon": "iconquanxian",
                "name": "首页",
                "path": "/role",
                "component": "views/role/Role",
                "redirect": null,
                "type": "0",
                'children': []
            },
            {
                "id": 1000,
                "parentId": -1,
                "icon": "iconquanxian",
                "name": "组织架构",
                "path": "/system",
                "component": "Layout",
                "redirect": null,
                "type": "0",
                "children": [{
                    "id": 1100,
                    "parentId": 1000,
                    "children": [],
                    "icon": "iconyonghuguanli",
                    "name": "用户管理",
                    "path": "/user",
                    "component": "views/system/user/index",
                    "redirect": null,
                    "type": "0",
                }],

            }, {
                "id": 2000,
                "parentId": -1,
                "icon": "iconquanxian",
                "name": "权限管理",
                "path": "/organization",
                "component": "Layout",
                "redirect": null,
                "type": "0",
                "children": [{
                    "id": 2100,
                    "parentId": 2000,
                    "children": [],
                    "icon": "iconyonghuguanli",
                    "name": "菜单管理",
                    "path": "/menu",
                    "component": "views/system/user/index",
                    "redirect": null,
                    "type": "0",
                }],

            }]
            
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