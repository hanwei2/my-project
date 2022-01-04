<template>
  <div class="login-container">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        auto-complete="on"
        class="login-form"
        label-position="left"
    >
      <h3 class="title">
        <img :src="logo" alt="logo" className="logo-img"/>
        <span class="logo-title">Crawlab</span>
      </h3>
      <el-form-item prop="account" style="margin-bottom: 28px;">
        <el-input
            v-model="loginForm.account"
            :placeholder="'account'"
            auto-complete="on"
            name="account"
            type="text"
            @keyup.enter="onLogin"
        />
      </el-form-item>
      <el-form-item prop="password" style="margin-bottom: 28px;">
        <el-input
            v-model="loginForm.password"
            :placeholder="'Password'"
            auto-complete="on"
            name="password"
            type="password"
            @keyup.enter="onLogin"
        />
      </el-form-item>
      <el-form-item style="border: none">
        <el-button
            v-if="!isSignup"
            :loading="loading"
            style="width:100%;"
            type="primary"
            @click="onLogin"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import {isValidUsername} from '@/utils/validate';
import {useRoute, useRouter} from 'vue-router';
import logo from '@/assets/logo.png';
import {ElForm, ElMessage} from 'element-plus';
import useRequest from '@/services/request';
import {useStore} from 'vuex';
import {LoginForm, LoginRules} from '@/interfaces/views/login'
const {
  post,
} = useRequest();

export default defineComponent({
  name: 'Login',
  setup() {

    const route = useRoute();

    const router = useRouter();

    const loading = ref<boolean>(false);

    const store = useStore();


    const isSignup = computed(() => route.path === '/signup');

    const loginForm = ref<LoginForm>({
      account: '',
      password: '',
    });

    const loginFormRef = ref<typeof ElForm>();

    const validateUsername = (rule: any, value: any, callback: any) => {
      if (!isValidUsername(value)) {
        callback(new Error('请输入正确的用户名'));
      } else {
        callback();
      }
    };

    const validatePass = (rule: any, value: any, callback: any) => {
      if (value.length < 5) {
        callback(new Error('密码长度应不小于5'));
      } else {
        callback();
      }
    };

    const loginRules: LoginRules = {
      account: [{required: true, trigger: 'blur', validator: validateUsername}],
      password: [{required: true, trigger: 'blur', validator: validatePass}]
    };

    const isShowMobileWarning = ref<boolean>(false);

    const allowRegister = ref<boolean>(false);

    const onLogin = async () => {
      if (!loginFormRef.value) return;
      await loginFormRef.value.validate();
      const {account, password} = loginForm.value;
      loading.value = true;
      try {
        const res = await post<LoginForm, ResponseWithData>('/_Account/Login', {
          account,
          password,
          rememberLogin: true
        });
        if (!res.data) {
          ElMessage.error('No token returned');
          return;
        }
        localStorage.setItem('token', 'res.data');
        store.dispatch('user/reloadUserPermissions')
        await router.push('/role');
      } catch (e:any) {
        if (e.toString().includes('401')) {
          ElMessage.error('Unauthorized. Please check account and password.');
        } else {
          ElMessage.error(e.toString());
        }
      } finally {
        loading.value = false;
      }
    };

    return {
      loginForm,
      loginFormRef,
      loginRules,
      isShowMobileWarning,
      allowRegister,
      isSignup,
      loading,
      logo,
      onLogin,
    };
  }
});
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../styles/variables.scss";

$bg: white;
$dark_gray: #889aa4;
$light_gray: #aaa;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;

  .login-form {
    background: transparent;
    position: absolute;
    left: 0;
    right: 0;
    width: 480px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }

  .tips {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    background: transparent;

    span {
      &:first-of-type {
        margin-right: 22px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title {
    font-family: "Verdana", serif;
    /*font-style: italic;*/
    font-weight: 600;
    font-size: 24px;
    color: #409EFF;
    margin: 0px auto 20px auto;
    text-align: center;
    cursor: default;

    display: flex;
    align-items: center;
    height: 128px;

    .logo-img {
      height: 80px;
    }

    .logo-title {
      font-family: BlinkMacSystemFont, -apple-system, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, helvetica, arial, sans-serif;
      font-size: 56px;
      font-weight: 600;
      margin-left: 24px;
      color: #409eff;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }



  .mobile-warning {
    margin-top: 20px;
  }

}
</style>
<style scoped>
.mobile-warning >>> .el-alert .el-alert__description {
  font-size: 1.2rem;
}

#canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
