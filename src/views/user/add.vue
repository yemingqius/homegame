<template>
  <div class="cent">
    <div class="cent-top">
      <el-input></el-input>
      <el-button>搜索</el-button>
    </div>

    <div class="userlist-left">
      <el-scrollbar height="200">
        <div class="left-list" v-for="count in 50" :class="{'left-list-active' : active == count+''}" @click="startCall(count+'')">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="left-list-img"/>
          <span class="left-list-span">龙傲天</span>
          <el-button>添加</el-button>
        </div>
      </el-scrollbar>
    </div>
    <el-divider></el-divider>
    <div class="userlist-left">
      <el-scrollbar height="200">
        <div class="left-list" v-for="count in 50" :class="{'left-list-active' : active == count+''}" @click="startCall(count+'')">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="left-list-img"/>
          <span class="left-list-span">龙傲天</span>
          <el-button>添加</el-button>
          <el-button>拒绝</el-button>
        </div>
      </el-scrollbar>
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
  }
</script>

<style scoped lang='less'>
  .cent{
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .userlist-left{
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
  }
  .cent-top{
    display: flex;

  }
</style>