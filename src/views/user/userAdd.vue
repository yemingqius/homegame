<template>
  <div class="userlist">
    <div class="userlist-left">
      <el-button type="primary" class="">添加用户</el-button>
      <el-scrollbar>
        <div class="left-list" v-for="count in 50" :class="{'left-list-active' : active == count+''}" @click="startCall(count+'')">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="left-list-img"/>
          <span class="left-list-span">龙傲天</span>
        </div>
        
      </el-scrollbar>
    </div>
    <div class="userlist-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import {ref,onBeforeMount} from "vue"
  import { useRouter } from "vue-router";
  const router = useRouter()
  const active = ref('1')
  const startCall = (count)=>{
    active.value = count
    router.push({path:'userAdd',query:{uid:count}})
  }
  

</script>

<style scoped lang="less">
  .userlist{
    display: flex;
    height: 100%;
    width: 100%;
    .userlist-left{
      display: flex;
      flex-direction: column;
      flex: 1;
      border-right: 1px solid #dbd6d6;
      .left-list{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 7.5px;
        padding-bottom: 7.5px;
        cursor: pointer;
        .left-list-img{
        width: 50px;
        height: 50px;
        border-radius: 15px;
        transform: translateX(-10px);
      }
      }
      .left-list-active{
        background: #eaeaea;
      }
    }
    .userlist-right{
      flex: 4;
    }
  }
</style>