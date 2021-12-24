import { DirectiveBinding } from "vue";
import store from '../store/index'
export default function(app:any) {
    app.directive('PermissionPath', {
        beforeMount(el:any, binding:DirectiveBinding<any>) {
            const menu = (store as any).state.user.menu;
            const isHaveMenuPermisson = menu.filter((i: any) => i.path === binding.value).length;
            if(isHaveMenuPermisson == 0) {
                el.style.display = 'none'
            }
        }
    })
}