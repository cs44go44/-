<template>
    <el-container>
        <el-header height="0.8rem" style="padding: 0;">
            <top-menu/>
        </el-header>
        <el-main>
            <home-page/>
        </el-main>
    </el-container>
</template>

<script>
import TopMenu from '../components/TopMenu'
import HomePage from '../components/HomePage'

export default {
  name: 'Home',
  components: {
    TopMenu,
    HomePage
  }
}
</script>
<style lang="less" scoped>
    .el-container {
        height: 100%;
        width: 100%;
        .el-main{
            margin-top: 57px;
            padding: 0;
            width: 100%;
            height: 867px;
            background: url("../image/background.png") center center no-repeat;
        }
    }
</style>
