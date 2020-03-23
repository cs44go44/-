<template>
    <div class="main-page">
        <div class="body-box">
            <img class="info-img" height="200px" width="200px" src="" alt="头像">
            <p class="p-name">用户名称</p>
            <br>
            <input class="name" type="text">
            <br>
            <p class="p-gender">性&nbsp;&nbsp;&nbsp;&nbsp;别</p>
            <br>
            <input class="gender" type="text">
            <br>
            <p class="p-telephone">联系方式</p>
            <br>
            <input class="telephone" type="text">
            <br>
            <p class="p-address">来自于</p>
            <br>
            <input class="address" type="text">
            <br>
            <input value="提交" type="button">
            <input class="reset" value="恢复" type="button">
            <p class="recent">曾浏览过：</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="less" scoped>
.main-page{
    margin-top: 57px;
    padding: 0;
    /*width: 100%;*/
    height: 1010px;
    background-color: #f8e7cf;
    .body-box{
        background-color: #fffffffe;
        margin: 0 200px;
        height: 100%;
        text-align: justify;
        position: relative;
    }
    .info-img{
        height: 100px;
        width: 100px;
        border: 2px solid #bd933a;
        outline: none;
        display: inline-block;
        margin-top: 3%;
        margin-left: 3%;
    }
    p{
        font-size: 26px;
        display: inline-block;
        position: absolute;
    }
    input[type=text]{
        height: 62px;
        width: 391px;
        outline: none;
        font: normal normal 24px 'FZZYJT';
        color: #fff;
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #bd933a;
        border-radius: 5px;
        text-indent: 2rem;
        line-height: 62px;
        letter-spacing: 2px;
        position: absolute;
    }
    input[type=button]{
        height: 50px;
        width: 200px;
        outline: none;
        font: normal normal 24px 'FZZYJT';
        background-color: #dbe0c1;
        border-radius: 10px;
        position: absolute;
        top: 410px;
        left: 350px;
    }
    input[type=button].reset{
        left: 870px;
    }
    .name{
        top: 150px;
        left: 230px;
    }
    .p-name{
        top: 100px;
        left: 230px;
    }
    .telephone{
        top: 300px;
        left: 230px;
    }
    .p-telephone{
        top: 250px;
        left: 230px;
    }
    .gender{
        top: 150px;
        left: 800px;
    }
    .p-gender{
        top: 100px;
        left: 800px;
    }
    .address{
        top: 300px;
        left: 800px;
    }
    .p-address{
        top: 250px;
        left: 800px;
    }
    .recent{
        top: 500px;
        left: 230px;
    }
}
</style>
