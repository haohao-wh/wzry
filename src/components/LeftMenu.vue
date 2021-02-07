<template>
    <el-menu id="el-left-menu">
      <el-submenu v-for="(data, index) in menu.data" :key="index" :index="index+'' "
                  v-show="data.show_name">
        <template slot="title">
          <span>{{ menu.data[index].type }}</span>
        </template>
        <el-menu-item v-for="(hero_item,i) in menu.data[index].hero_item" :key="i">
          {{
          hero_item.name
          }}
        </el-menu-item>
      </el-submenu>
    </el-menu>

</template>

<script>
  export default {
    name: "LeftMenu",
    data() {
      return {
        menu: {
          name: '王者荣耀',
          data: [
            {
              show_name: true,
              type: '战士',
              hero_item: [{
                name: '花木兰', label_show: true
              }, {
                name: "白起", label_show: true
              }]

            },
            {
              show_name: true,
              type: '法师',
              hero_item: [{
                name: '小乔', label_show: true
              }, {
                name: "嬴政", label_show: true
              }]

            },
            {
              show_name: true,
              type: '刺客',
              hero_item: [{
                name: '小乔', label_show: true
              }, {
                name: "嬴政", label_show: true
              }]

            },
            {
              show_name: true,
              type: '辅助',
              hero_item: [{
                name: '小乔', label_show: true
              }, {
                name: "嬴政", label_show: true
              }]

            },
            {
              show_name: true,
              type: '射手',
              hero_item: [{
                name: '小乔', label_show: true
              }, {
                name: "嬴政", label_show: true
              }]

            }

          ]
        }
      }
    }
  }
</script>

<style scoped>
  #el-left-menu{
    background: pink;
    text-color:#fff;
    active-text-color:#ffd04b;

  }
</style>
