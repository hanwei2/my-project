import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import PermissionPath from './directive/PermissionPath'
import PermissionApi from './directive/PermissionApi'
const app = createApp(App);
PermissionPath(app);
PermissionApi(app);
app.use(store).use(router).use(ElementPlus).mount('#app')
