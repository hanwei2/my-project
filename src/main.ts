import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)
import './directive/PermissionPath.ts'
app.directive('PermissionPath', {
    beforeMount(el, binding, vnode) {
        // const menu = (store as any).state.user.menu;
        // const isHaveMenuPermisson = menu.filter((i: any) => i.path === binding.value).length;

        // if(isHaveMenuPermisson == 0) {
        //     console.log(isHaveMenuPermisson,binding.value)
        //     el.style.display = 'none'
        // }
    }
})
app.use(store).use(router).use(ElementPlus).mount('#app')
