<template>
    <div class="main-page">
        <div class="right-page">
            <div class="table-bg">
                <img src="../image/login-page/logo.png" class="logo"/>
                <div class="tp-border"/>
                <form style="height: 505px;width: 505px;" method="post">
                    <br><input class="input__ username" v-model="username" placeholder="请输入用户名称" type="text">
                    <br><input class="input__ password" v-model="password" placeholder="请输入用户密码" type="password">
                    <br><input class="checkbox__" v-model="checked" type="checkbox">
                    <p class="rmb-pwd">记住密码</p>
                    <input class="input__ login" value="登录" @click="submit()" type="button">
                    <input class="input__ register" value="注册" @click="register()" type="button">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '../request/api'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      checked: false
    }
  },
  methods: {
    submit () {
      if (this.checked) {
        console.log('记住密码')
      } else {
        console.log('不记住密码')
      }
      if (this.username === '') {
        this.$message({
          message: '用户名不能为空',
          type: 'warning'
        })
      } else if (this.password === '') {
        this.$message({
          message: '密码不能为空',
          type: 'warning'
        })
      } else {
        login({
          username: this.username,
          password: this.password
        }).then(res => {
          this.$store.commit('setToken', res.token)
          window.localStorage.setItem('token', res.token)
          window.localStorage.setItem('user', JSON.stringify(res))
          this.$userInfo = res
          // 判断路由是否带参，带参就去到重定向参数地址，否则就去首页
          if (this.$route.query.redirect) {
            this.$router.replace({
              path: this.$route.query.redirect
            })
          } else {
            this.$router.replace({ path: '/' })
          }
        }).catch(error => {
          this.$message({
            message: error.msg,
            type: 'warning'
          })
        })
      }
    },
    register () {
      this.$router.push({ name: 'register' })
      this.$store.state.adminleftnavnum = '2' // 设置导航2 active
    }
  }
}
</script>

<style lang="less" scoped>
    .main-page {
        margin-top: 57px;
        height: 1010px;
        background: url("../image/login-page/background.png") no-repeat center center;
        background-size: 100% 100%;
        position: relative;
        .right-page {
            height: 957px;
            width: 870px;
            /*background-color: #fff;*/
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .table-bg {
            height: 505px;
            width: 505px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 2%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
        }

        .logo {
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(5%) translateY(-100%);
        }

        .tp-border {
            height: 2px;
            width: 505px;
            background-image: linear-gradient(to right, #00000000, #ffffff, #00000000);
        }

        .input__ {
            height: 62px;
            width: 391px;
            outline: none;
            font: normal normal 24px 'FZZYJT';
            color: #fff;
            background-color: rgba(0, 0, 0, 0);
            border: 2px solid #ff89c7;
            border-radius: 68px;
            text-indent: 2rem;
            line-height: 62px;
            letter-spacing: 2px;
        }

        input::placeholder {
            font: normal 300 24px 'FZZYJT';
            color: #ffffffdd;
        }

        .username {
            margin-top: 5%;
        }

        .password {
            margin-top: 5%;
        }

        .checkbox__ {
            margin-top: 5%;
            height: 22px;
            width: 22px;
            cursor: pointer;
            visibility: hidden;
        }

        .checkbox__::after {
            border: 2px solid #ff89c7;
            height: 22px;
            width: 22px;
            display: inline-block;
            content: '';
            border-radius: 50%;
            visibility: visible;
        }

        .checkbox__:checked::after {
            font-family: 'icomoon' !important;
            content: '';
            font-weight: lighter;
            font-size: 22px;
            color: rgba(66, 138, 189, 0.93);
        }

        .rmb-pwd {
            cursor: default;
            font-family: 'FZZYJT';
            font-size: 22px;
            color: #ffffffdd;
            display: inline-block;
            letter-spacing: 2px;
            text-indent: 1rem;
        }

        .login {
            margin-top: 5%;
            text-indent: 0;
            font-size: 24px;
            color: #ffffff;
            background-color: #ff89c7;
            cursor: pointer;
            border: none;
        }

        .login:hover {
            background-color: #dd7eb3;
        }

        .register {
            height: 68px;
            margin-top: 5%;
            text-indent: 0;
            font-size: 24px;
            background-color: #ff89c7aa;
            color: #dbe0c1;
            cursor: pointer;
            border: none;
        }

        .register:hover {
            background-color: #dd7eb3;
            color: #fff;
        }
    }
</style>
