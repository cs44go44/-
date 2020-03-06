<template>
    <el-container>
        <el-header height="0.8rem" style="padding: 0;">
            <top-menu/>
        </el-header>
        <el-main></el-main>
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
    .el-header{
        text-align: right;
    }
</style>
