<template>
  <div>
    <div class="my-footer"></div>
    <div style="text-align: center"> 这是页脚 {{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "FooterSpace",
      data() {
        return {
          msg: '1490721983@qq.com'
        }
      }
    }
</script>

<style scoped>
  .my-footer{

  }
</style>
