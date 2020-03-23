<template>
  <div>
      <div class="background-menu">
          <img style="margin-left: 1rem;" src="../image/logo.png">
          <el-menu
                  :default-active="navselected"
                  :active="navselected"
                  style="float:right;"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">注册</el-menu-item>
              <el-menu-item index="3">{{isLogin?'个人信息':'登录'}}</el-menu-item>
              <el-menu-item index="4">用户管理</el-menu-item>
              <el-menu-item index="5">个人信息</el-menu-item>
          </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {
      navselected: '1',
      isLogin: false
    }
  },
  methods: {
    jump (jumpName) {
      if (this.$route.name !== jumpName) {
        this.$router.replace({ name: jumpName })
      }
    },
    getNavType () {
      this.navselected = this.$store.state.adminleftnavnum
      // store.state.adminleftnavnum里值变化的时候，设置navselected
    },
    handleSelect (key, keyPath) {
      // 按钮选中之后设置当前的index为store里的值
      this.$store.state.adminleftnavnum = key
      switch (key) {
        case '1':
          this.jump('home')
          break
        case '2':
          this.jump('register')
          break
        case '3':
          if (!this.isLogin) { this.jump('login') } else { this.jump('info') }
          break
        case '5':
          this.jump('info')
          break
      }
    }
  },
  watch: {
    // 监测store.state
    '$store.state.adminleftnavnum': 'getNavType'
  }
}
</script>

<style scoped lang='less'>
    .background-menu{
        background-color: #545c64;
        height: 70px;
    }
    .el-menu--horizontal>.el-menu-item{
        height: 70px;
        line-height: 70px;
        margin-right: 3rem;
    }
    .el-menu--horizontal>.el-menu-item:hover{
        border-bottom: 0.2rem solid #ffd04b !important;
    }
</style>
