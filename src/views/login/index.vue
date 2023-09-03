<template>
  <div class="count">
    <div class="login-count">
      <el-form class="login-form">
        <h3 style="text-align: center;">登录</h3>
        <el-form-item prop="username">
          <el-input clearable>
            <template #prepend>
              <el-icon><user></user></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input clearable>
            <template #prepend>
              <el-icon><lock></lock></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import {useRouter} from "vue-router"
  const router = useRouter()
  // 提交登录请求
  const onSubmit = ()=>{
    localStorage.setItem("mushan-token","111");
    router.replace("/")
  }
</script>

<style scoped lang="less">
.count{
  width: 100vw;
  height: 100vh;
  .login-count{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .login-form{
      width: 250px;
      background: #ffffff;
      box-shadow: 0 0 25px #cac6c6;
      border-radius: 15px;
      padding: 15px 35px 15px 35px;
    }
  }
}
</style>