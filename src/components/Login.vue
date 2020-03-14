<template>
    <div class="main-page">
        <img src="../image/login-page/bg01.png" class="left-page"/>
        <div class="right-page">
            <div class="table-bg">
                          <img src="../image/login-page/logo.png" class="logo"/>
                          <div class="tp-border"/>
                <form style="height: 2.9rem;width: 2.85rem;" action="" method="post">
                    <br><input style="margin: 0" type="text">
                    <br><input type="text">
                    <br><input class="input__ username" placeholder="请输入用户名称" type="text">
                    <br><input class="input__ password" placeholder="请输入用户密码" type="password">
                    <br><input class="checkbox__" type="checkbox">
                    <p class="rmb-pwd">记住密码</p>
                    <input class="input__ login" value="登录" type="button">
                    <input class="input__ register" value="注册" type="button">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="less" scoped>
    .main-page{
        height: 6.2rem;
        background: url("../image/login-page/bg02.png") no-repeat center center;
        background-size:  100% 100%;
        position: relative;
    .left-page{
        padding-top: 0;
        padding-bottom: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .right-page{
        height: 5.5rem;
        width: 5rem;
        background-color: #fff;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .table-bg{
        height: 2.9rem;
        width: 2.85rem;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 2%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
    .logo{
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-10%) translateY(-200%);
    }
    .tp-border{
      height: 0.02rem;
      width: 2.6rem;
      background-image: linear-gradient(to right,#00000000, #ffffff, #00000000);
    }
      .input__{
        height: 0.35rem;
        width: 2.25rem;
        outline: none;
        font: normal normal 0.13rem 'FZZYJT';
        color: #ffffffdd;
        background-color: rgba(0,0,0,0);
        border: 2px solid #0977ff;
        border-radius: 68px;
        text-indent: 0.5rem;
        line-height: 0.35rem;
        letter-spacing: 0.01rem;
      }
      input::placeholder{
        font: normal 300 24px 'FZZYJT';
        color: #ffffffdd;
      }
      .username{
      }
      .password{
      }
      .checkbox__{
        margin-top: 24px;
        height: 22px;
        width: 22px;
        cursor: pointer;
        visibility: hidden;
      }
      .checkbox__::after{
        border: 2px solid #0977ff;
        height: 22px;
        width: 22px;
        display: inline-block;
        content: '';
        border-radius: 50%;
        visibility: visible;
      }
      .checkbox__:checked::after{
        font-family: 'icomoon' !important;
        content: '';
        font-weight: lighter;
        font-size: 22px;
        color: rgba(66, 138, 189, 0.93);
      }
      .rmb-pwd{
        font-family: 'FZZYJT';
        font-size: 22px;
        color: #ffffffdd;
        display: inline-block;
        letter-spacing: 2px;
        text-indent: 1rem;
      }
      .login{
        margin-top: 24px;
        text-indent: 0;
        font-size: 24px;
        color: #ffffff;
        background-color: #0977ff;
        cursor: pointer;
      }
      .login:hover{
        background-color: #00000000;
      }
      .register{
        height: 68px;
        margin-top: 24px;
        text-indent: 0;
        font-size: 24px;
        color: #ffffff;
        cursor: pointer;
      }
      .register:hover{
        background-color: #0977ff;
        color: #000000;
      }
    }
</style>
