<template>
    <div class="register-background">
        <div style="height: 140px;"></div>
        <div class="rectangle">
            <el-form ref="form" :rules="rules" :model="form">
                <el-form-item prop="username" class="input-username" label-width="4rem" label="用户名">
                    <el-input v-model="form.username"/>
                </el-form-item>
                <el-form-item prop="gender" class="input-gender" label-width="4rem" label="性别">
                    <el-radio-group v-model="form.gender">
                        <el-radio value="0" label="男"></el-radio>
                        <el-radio value="1" label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="password" class="input-password" label-width="4rem" label="密码">
                    <el-input v-model="form.password"/>
                </el-form-item>
                <el-form-item prop="confirmpassword" class="input-confirmpassword" label-width="5rem" label="确认密码">
                    <el-input v-model="form.confirmpassword"/>
                </el-form-item>
                <el-form-item prop="telephone" class="input-telephone" label-width="5rem" label="联系电话">
                    <el-input v-model="form.telephone"/>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="onSubmit('form')" :loading="this.buSubmitLoading">{{this.buSubmitLoading?'提交中':'提交'}}</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
// import { register } from '../request/api'
export default {
  name: 'Register',
  data () {
    return {
      buSubmitLoading: false,
      form: {
        username: '',
        password: '',
        gender: '',
        confirmpassword: '',
        telephone: ''
      },
      rules: {
        username: [
          { required: true, message: '用户姓名不能为空', trigger: 'blur' },
          { min: 0, max: 50, message: '长度不超过 50 个单位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 0, max: 12, message: '长度不超过 12 个单位', trigger: 'blur' }
        ],
        confirmpassword: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 0, max: 12, message: '长度不超过 12 个单位', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 0, max: 12, message: '长度不超过 12 个单位', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 0, max: 12, message: '长度不超过 12 个单位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (form) {
      console.log(this.form)
      if (this.form.gender === '男') { this.form.gender = 0 }
      if (this.form.gender === '女') { this.form.gender = 1 }
      console.log(this.form)
      // this.$refs[form].validate(valid => {
      //   if (valid) {
      //     this.buSubmitLoading = true
      //     register(this.form).then(res => {
      //       this.$router.push({ name: 'login' })
      //     }).catch(err => {
      //       this.$message({
      //         message: err.msg,
      //         type: 'warning'
      //       })
      //     })
      //   } else {
      //     return false
      //   }
      //   this.buSubmitLoading = false
      // })
    },
    onCancel () {
      this.$router.push({ name: 'home' })
      this.$store.state.adminleftnavnum = '1' // 设置导航1 active
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
            padding-top: 10%;
        }

        .input-password {
            padding-top: 10%;
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
        margin-top: 57px;
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
