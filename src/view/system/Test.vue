<template>
<div>
  <div v-for="(value,key,index) in Item ">
    {{index}} -- {{key}}  -- {{value}} <br>
  </div>
  <div >
 <button @click="forEach()">试一试</button>
  </div>
</div>

</template>

<script>
    export default {
        name: "Test",
        data() {
          return {
            Item: [
              {
                id: 1, name
        :
          '小猪猪1'
        }
        ,
          {
            id:2, name
          :
            '小猪猪2'
          }
        ,
          {
            id:3, name
          :
            '小猪猪3'
          }
        ,
          {
            id:4, name
          :
            '小猪猪4'
          }
        ,
          {
            id:5, name
          :
            '小猪猪5'
          }
        ,
          {
            id:6, name
          :
            '小猪猪6'
          }
        ]

        }
      },methods:{
          forEach(){
            this.Item.map((value,key,index)=>{
              console.log(index+" -- " +key+" -- "+value.name);
            })
          }
      }

    }
</script>

<style scoped>

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;

  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .main-group{
    height:80%;
  }
</style>
