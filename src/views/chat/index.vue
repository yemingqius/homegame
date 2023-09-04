<template>
  <div class="chat">
    <h3 class="title">{{ uid }}</h3>
    <el-scrollbar>
      <div class="chat-list" v-for="count in 10">
        <div class="chat-list-left">
          <img class="list-img" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
          <div class="list-msg">
            55555555555555555555555555555555555555555555555555555555555
          </div>
        </div>
        <div class="chat-list--right">
          <img class="list-img" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
          <div class="list-msg">
            55555555555555555555555555555555555555555555555555555555555
          </div>
        </div>
      </div>
    </el-scrollbar>
    <div class="chat-boom">
      <el-input class="textarea" draggable="false" type="textarea" :rows="7" placeholder="Please input..." />
      <el-button type="primary">视频通话</el-button>
      <el-button type="primary">发送</el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import {ref,onMounted} from "vue"
  import { useRouter,onBeforeRouteUpdate } from "vue-router";
  const router = useRouter()
  const uid = ref('1')
  onBeforeRouteUpdate((to)=>{
    uid.value = to.query.uid+''
  })
</script>

<style scoped lang='less'>
  .chat{
    height: 100%;
    display: flex;
    background: rgb(247,247,247);
    flex-direction: column;
    justify-content: space-between;
    .title{
      text-align: center;
    }
    .chat-list{
      display: flex;
      flex-direction: column;
      height: 100%;
    
      .list-img{
          width: 40px;
          height: 40px;
          border-radius: 5px;
        }
      .list-msg{
        background: #fff;
        font-size: 15px;
        border-radius: 6px;
        max-width: 200px;
        word-wrap: break-word;
        padding: 5px 0 5px 5px;
      }
      .chat-list-left{
        padding: 20px;
        display: flex;
        flex-direction: row;
        .list-msg{
          margin-left: 10px;
          background: #13c032;
        }
      }
      .chat-list--right{
        padding: 20px;
        display: flex;
        flex-direction: row-reverse;
        .list-msg{
          margin-right: 10px;
        }
      }
    }
    .chat-boom{
      display: flex;
      justify-content: space-between;
      align-items: end;

    }
  }
</style>