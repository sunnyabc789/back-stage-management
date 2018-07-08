<style>
  .logo{
      color:#fff;
      padding: 20px;
  }

</style>

<template>
    <div>
         <el-container>
         <el-header style="background-color:#545c64">
                <el-row :gutter="20" >
                    <el-col :span="4"><div class="logo">后台管理系统</div></el-col>
                    <el-col :span="20">
                        <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            router
                            >
                              <el-menu-item index="/worklist">员工管理</el-menu-item>
                              <el-menu-item index="/activeMange">活动管理</el-menu-item>
                            </el-menu>
                    </el-col>
                </el-row>
                </el-header>
              </el-container>
               <router-view/>
        </div>
    </template>
<script>

    export default {
         name: 'App',
        data(){
            return {
                activeIndex: '/worklist',
            }
        },
        computed:{
           
        },
        methods:{
         handleSelect(key, keyPath) {
               this.activeIndex=key;
               router.push({path:key})
            }
        }
    }
</script>