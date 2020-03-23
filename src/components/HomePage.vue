<template>
<div class="main-page">
    <home-charts/>
    <div>
        <div class="under-page"></div>
        <a href="#"><img class="dt" src="../image/componets_img/大同.png"></a>
        <a href="#"><img class="sz" src="../image/componets_img/朔州.png"></a>
        <a href="#"><img class="xz" src="../image/componets_img/忻州.png"></a>
        <a href="#"><img class="ll" src="../image/componets_img/吕梁.png"></a>
        <a href="#"><img class="ty" src="../image/componets_img/太原.png"></a>
        <a href="#"><img class="yq" src="../image/componets_img/阳泉.png"></a>
        <a href="#"><img class="jz" src="../image/componets_img/晋中.png"></a>
        <a href="#"><img class="lf" src="../image/componets_img/临汾.png"></a>
        <a href="#"><img class="cz" src="../image/componets_img/长治.png"></a>
        <a href="#"><img class="jc" src="../image/componets_img/晋城.png"></a>
        <a href="#"><img class="yc" src="../image/componets_img/运城.png"></a>
    </div>
    <input class="input__" value="留言板" @click="message()" type="button"/>
    <div class="msg-box"></div>
    <el-drawer
            style="background: url('../image/home-page/msg-background.png') center center no-repeat;"
            :visible.sync="drawer"
            :with-header="false">
        <h1 class="msg-title">我要留言</h1>
        <form :model="form" action="" method="post">
            <textarea class="msg-textarea" rows="14" cols="60" v-model="form.message" placeholder="开始畅所欲言吧！">
            </textarea>
        </form>
        <p class="p-verify">请证明你是个人类</p>
        <input class="input__ verify" v-model="verify" type="text">
        <img class="img-verify" src="../image/home-page/验证码.jpg" alt="">
        <input class="input__ msg-submit" value="确定" @click="submit()" type="button"/>
    </el-drawer>
</div>
</template>

<script>
import HomeCharts from '../charts/HomeCharts'
export default {
  name: 'HomePage',
  data () {
    return {
      drawer: false,
      verify: '',
      form: {
        message: ''
      }
    }
  },
  components: {
    HomeCharts
  },
  methods: {
    message () {
      this.drawer = true
    },
    submit () {
      try {
        console.log(this.form.message)
        console.log(this.verify)
      } finally {
        this.form.message = ''
        this.verify = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-page{
    margin-top: 57px;
    padding: 0;
    /*width: 100%;*/
    height: 1010px;
    background-size: 100% 100%;
    background: url("../image/background.png") center center no-repeat;
}
.under-page{
    width: 507px;
    height: 962px;
    position: absolute;
    top: 70px;
    left: 707px;
    background: url("../image/componets_img/山西版图.png") no-repeat center center;
}
    a img{
        position: absolute;
        top: 0;
        left: 0;
    }
    .dt{
        top: 70px;
        left: 967px;
    }
    .dt:hover{
        top: 65px;
        left: 962px;
    }
    .sz{
        top: 137px;
        left: 893px;
    }
    .sz:hover{
        top: 132px;
        left: 888px;
    }
    .xz{
        top: 238px;
        left: 787px;
    }
    .xz:hover{
        top: 233px;
        left: 782px;
    }
    .ll{
        top: 377px;
        left: 719px;
    }
    .ll:hover{
        top: 372px;
        left: 714px;
    }
    .ty{
        top: 425px;
        left: 851px;
    }
    .ty:hover{
        top: 420px;
        left: 849px;
    }
    .yq{
        top: 403px;
        left: 1020px;
    }
    .yq:hover{
        top: 398px;
        left: 1015px;
    }
    .jz{
        top: 475px;
        left: 842px;
    }
    .jz:hover{
        top: 470px;
        left: 837px;
    }
    .lf{
        top: 655px;
        left: 721px;
    }
    .lf:hover{
        top: 650px;
        left: 716px;
    }
    .cz{
        top: 623px;
        left: 909px;
    }
    .cz:hover{
        top: 618px;
        left: 904px;
    }
    .jc{
        top: 796px;
        left: 904px;
    }
    .jc:hover{
        top: 791px;
        left: 899px;
    }
    .yc{
        top: 832px;
        left: 708px;
    }
    .yc:hover{
        top: 827px;
        left: 702px;
    }
    .input__ {
        position: absolute;
        top: 100px;
        right: 190px;
        height: 62px;
        width: 200px;
        outline: none;
        font: normal normal 25px 'FZZYJT';
        color: #ffffffdd;
        background-color: rgb(227, 166, 114);
        box-shadow: 1px 2px 5px 2px #00000044;
        border: none;
        border-radius: 68px;
        letter-spacing: 2px;
    }
    .input__[type='button']{
        cursor: pointer;
    }
    .input__[type='button']:hover{
        background-color: rgb(247, 236, 156);
    }
    .p-verify{
        height: 30px;
        width: 170px;
        position: absolute;
        font: normal normal 20px 'FZZYJT';
        top: 725px;
        right: 320px;
    }
    .verify{
        height: 40px;
        width: 100px;
        font: normal normal 25px 'FZZYJT';
        top: 720px;
        right: 222px;
        border-radius: 10px;
        background-color: #00000000;
        border: 2px solid rgb(248,231,207);
        color: #555555;
        box-shadow: none;
    }
    .img-verify{
        cursor: pointer;
        height: 40px;
        position: absolute;
        top: 720px;
        right: 130px;
    }
    .msg-title{
        font: normal normal 30px 'FZZYJT';
        margin-top: 10%;
    }
    .msg-textarea{
        width: 400px;
        height: 500px;
        padding: 20px;
        resize: none;
        outline: none;
        margin-top: 10%;
        font: normal normal 24px 'FZZYJT';
        border: 2px solid rgb(248,231,207);
        border-radius: 10px;
    }
    .msg-submit{
        top: 770px;
        right: 190px;
    }
    .msg-box{
        width: 420px;
        height: 800px;
        background-color: #00000055;
        position: absolute;
        top: 200px;
        right: 80px;
        border: 2px solid rgb(232, 189, 123);
        border-radius: 10px;
    }
</style>
