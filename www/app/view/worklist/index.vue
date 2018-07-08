<style lang="less" scoped>
  .mainbox{
      padding: 20px;
  }
 .zheZhaoCeng{
            position:absolute;left:0px;top:0px;
            background:rgba(0, 0, 0, 0.4);
            width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
            height:100%;
            filter:alpha(opacity=60);  /*设置透明度为60%*/
            opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
            z-Index:999; 
            display:none;
     }
</style>

<template>
    <div>
       <el-container direction="horizontal">
                <el-aside>
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                        </el-menu>
                    </el-aside>
                     <el-main style="background-color:#f0f2f5">
                          <vui-worklist :isShowZhe="isShowZhe" @changeShowZhe="changeShowZhe"></vui-worklist>
                     </el-main>
                   
                </el-container>
                <div class="zheZhaoCeng"></div>
    </div>
</template>
<script>
    import VuiWorklist from '../../components/workerlist/index.vue';
    export default {
     
        data(){
            return {
            }
        },
        methods:{

        },
        components:{
            VuiWorklist
        }
    }
</script>