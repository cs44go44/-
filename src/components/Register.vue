<template>
    <div class="register-background">
        <div style="height: 140px;"></div>
        <div class="rectangle">
            <el-form ref="form" :model="form">
                <el-form-item class="input-username" label-width="4rem" label="用户名">
                    <el-input v-model="form.username"/>
                </el-form-item>
                <el-form-item class="input-gender" label-width="4rem" label="性别">
                    <el-input v-model="form.gender"/>
                </el-form-item>
                <el-form-item class="input-password" label-width="4rem" label="密码">
                    <el-input v-model="form.password"/>
                </el-form-item>
                <el-form-item class="input-confirmpassword" label-width="5rem" label="确认密码">
                    <el-input v-model="form.confirmpassword"/>
                </el-form-item>
                <el-form-item class="input-telephone" label-width="5rem" label="联系电话">
                    <el-input v-model="form.telephone"/>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        username: '',
        password: '',
        gender: '',
        confirmpassword: '',
        telephone: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')
    },
    onCancel () {
      console.log('cancel')
    }
  }
}
</script>

<style lang="less" scoped>
    .el-form {
        width: 80%;
        height: 80%;
        margin: 0 auto;

        .input-username {
            padding-top: 20%;
        }

        .input-gender {
            padding-top: 12%;
        }

        .input-password {
            padding-top: 12%;
        }

        .input-confirmpassword {
            padding-top: 12%;
        }

        .input-telephone {
            padding-top: 12%;
        }
    }
    .rectangle {
        height: 700px;
        width: 500px;
        border: 1px double #525252aa;
        border-radius: 1%;
        background-color: #ffffff99;
        position: absolute;
        left: 710px;
        top: 190px;
        z-index: 5;
    }
    .register-background {
        height: 1010px;
        width: 1920px;
        background: url("../image/rain.png") center center no-repeat;
    }
    .register-background::after {
        height: 1010px;
        width: 1920px;
        content: '';
        display: block;
        position: absolute;
        top: 70px;
        left: 0;
        z-index: 0;
        background: url("../image/rain-s.png") center center;
        animation: example 5s linear infinite;
    }
    @keyframes example {
        0%   {
            background-position: 0 0;}
        100% {
            background-position: 0 1080px;}
    }
</style>
