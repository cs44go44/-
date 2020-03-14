<template>
  <div>
      <div class="background-menu">
          <img style="margin-left: 1rem;" src="../image/logo.png">
          <el-menu
                  style="float:right;"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">注册</el-menu-item>
              <el-menu-item index="3">登陆</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {
    }
  },
  methods: {
    jump (jumpName) {
      if (this.$route.name !== jumpName) {
        this.$router.replace({ name: jumpName })
      }
    },
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          this.jump('home')
          break
        case '2':
          this.jump('register')
          break
        case '3':
          this.jump('login')
          break
      }
    }
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
