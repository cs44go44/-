<template>
    <el-container direction="vertical">
        <el-header height="0.8rem" style="padding: 0;">
            <top-menu/>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import TopMenu from '../components/TopMenu'

export default {
  name: 'Home',
  components: {
    TopMenu
  }
}
</script>
<style lang="less">
    .el-container {
        height: 1080px;
        width: 1920px;
        .el-main{

        }
    }
</style>
