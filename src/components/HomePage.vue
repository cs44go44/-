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
</div>
</template>

<script>
import HomeCharts from '../charts/HomeCharts'
export default {
  name: 'HomePage',
  components: {
    HomeCharts
  }
}
</script>

<style lang="less" scoped>
    .main-page{
        margin-top: 57px;
        padding: 0;
        width: 100%;
        height: 810px;
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
    .sz{
        top: 137px;
        left: 893px;
    }
    .xz{
        top: 238px;
        left: 787px;
    }
    .ll{
        top: 377px;
        left: 719px;
    }
    .ty{
        top: 425px;
        left: 851px;
    }
    .yq{
        top: 403px;
        left: 1020px;
    }
    .jz{
        top: 475px;
        left: 842px;
    }
    .lf{
        top: 655px;
        left: 721px;
    }
    .cz{
        top: 623px;
        left: 909px;
    }
    .jc{
        top: 796px;
        left: 904px;
    }
    .yc{
        top: 832px;
        left: 708px;
    }
</style>
