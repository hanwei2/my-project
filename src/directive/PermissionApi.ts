import { DirectiveBinding } from "vue";
import store from '../store/index'
export default function(app:any) {
    app.directive('PermissionApi', {
        updated(el:any, binding:DirectiveBinding<any>) {
            const apis = (store as any).state.user.apis;
            if(!apis.includes(binding.value)) {
                el.style.display = 'none'
            } else {
                el.style.display = 'block'
            }
        }
    })
}