<template>
  <el-container style="min-height: 100vh">
    <el-header id="head">
      <!-- 导航 -->
      <div id="top-bar">
        <BarSpace/>
      </div>

    </el-header>

    <el-main id="main">

      <el-row >
        <el-col :span="24"><div class="grid-content bg-purple-dark" >
          <el-row>
            <el-col :span="4"><div class="grid-content bg-purple main-group" style="padding-right: 10px;"><LeftMenu/></div></el-col>

            <el-col :span="20"><div class="grid-content bg-purple-light main-group"><ViewData/></div></el-col>
          </el-row>
        </div></el-col>
      </el-row>
    </el-main>

    <!-- 页脚 -->
    <el-footer id="footer">
      <hr>
      <FootSpace/>
    </el-footer>
  </el-container>
</template>

<script>
  import FooterSpace from "../components/FooterSpace";
  import BarSpace from "../components/BarSpace";
  import LeftMenu from "../components/LeftMenu";
  import ViewData from "../components/ViewData";

  export default {
    name: "Index",
    data() {
      return {}
    },
    components: {
      FootSpace: FooterSpace,
      BarSpace: BarSpace,
      LeftMenu: LeftMenu,
      ViewData: ViewData
    },
  }
</script>

<style scoped>
  #head {
    height: 5%;
    background: darkslategray;
    width: 98%;
    padding-left: 20px;
    margin: 0px auto;
  }

  #left-tree {
    background: orchid;
    width: 20%;
    height: 100%;
    display: inline-block;
  }

  #view-data {
    background: black;
    width: 97%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    padding-left: 30px;
    padding-right: 20px;
  }

  #main {
    background: burlywood;
    width: 98%;
    height: 95%;
    display: inline-block;
    margin: 0px auto;
  }

  #footer {
    background: olive;
    width: 98%;
    padding-left: 40px;
    margin: 0px auto;
  }
</style>
