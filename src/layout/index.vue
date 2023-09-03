<template>
  <div class="home">
    <div class="home-cont">
      <div class="home-cont-left">
        <div class="home-cont-left-top">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
           alt="" class="home-cont-left-img">
           <router-link to="/list" class="home-icon" replace>
              <el-icon size="30" color="#9f9D99"><ChatDotSquare /></el-icon>
           </router-link>
           <router-link to="/add" class="home-icon" replace>
              <el-icon size="30" color="#9f9D99"><user /></el-icon>
           </router-link>
        </div>
        <div class="home-cont-left-bottom">
          <el-icon size="30" color="#9f9D99" style="cursor: pointer;"><SwitchButton /></el-icon>
        </div>
      </div>
      <div class="home-cont-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="less">
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    .home-cont{
      width: 850px;
      height: 650px;
      background: #fff;
      display: flex;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      .home-cont-left{
        flex: 1;
        border-right: 1px solid #eee;
        background: rgb(247,247,247);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        .home-cont-left-top{
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 200px;
          .home-cont-left-img{
            width: 80px;
            height: 80px;
            border-radius: 15px;
            margin-top: 20px;
          }
          .home-icon{
            margin-top: 20px;
            cursor: pointer;
            flex: 1;
          }
        }
      }
      .home-cont-right{
        flex: 5;
      }
    }
  }
</style>