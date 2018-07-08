<style lang="less" scoped>
      .breadCrumb{
     margin-bottom: 20px;
  }
  .mainbox{
      background-color: #fff;
      height:600px;
  }
  .pagination{
    //   float: right;
  }
   .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .worklist{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .floatBox{
        position:absolute;
        width:500px;
        height:300px;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color:#fff;
        margin:109px auto;
        z-Index:9999;  
    }
    .coverBox{
        position:fixed;
        top: 0;  
        left: 0;  
        right: 0;  
        bottom: 0;  
        background:rgba(0, 0, 0, 0.4);
        filter:alpha(opacity=60);  
        opacity:0.6; 
        z-Index:999;  
    }
    .el-row{
        margin-bottom: 10px;
    }
</style>
<template>
    <div class="worklist">
            <div class="breadCrumb">
                 <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">员工</a></el-breadcrumb-item>
                    <el-breadcrumb-item>员工列表</el-breadcrumb-item>
                         
                 </el-breadcrumb>
            </div>
                 <el-table
                    :data="listArr"
                    @sort-change="changeSort"
                    style="width: 100%">
                    <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="姓名">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="省份">
                            <span>{{ props.row.provicen }}</span>
                        </el-form-item>
                        <el-form-item label="电子邮箱">
                            <span>{{ props.row.email }}</span>
                        </el-form-item>
                        <el-form-item label="手机">
                            <span>{{ props.row.mobile }}</span>
                        </el-form-item>
                        <div class="btnBox">
                                <el-button type="primary" size="small" @click="updateList(props.row)">修改</el-button>
                                <el-button type="danger" size="small" @click="handleDel(props.row.id)">删除</el-button>
                        </div>
                        </el-form>
                    </template>
                    </el-table-column>
                     <el-table-column
                            prop="name"
                            label="姓名"
                             sortable="custom"
                            min-width="100">
                        </el-table-column>
                        <el-table-column
                            prop="provicen"
                            label="省份"
                             sortable="custom"
                            min-width="100">
                        </el-table-column>
                        <el-table-column
                            prop="email"
                            label="电子邮箱"
                            sortable="custom"
                            min-width="180">
                        </el-table-column>
                         <el-table-column
                            prop="mobile"
                            label="手机"
                            sortable="custom"
                            min-width="180">
                        </el-table-column>
                         <el-table-column
                            label="操作"
                            min-width="180">
                             <template slot-scope="props">
                                <el-button @click="updateList(props.row)" type="button" size="small">修改</el-button>
                                <el-button @click="handleDel(props.row.id)" type="button" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                </el-table>
                <div class="pagination">
                      <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageState.currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="amount">
                        </el-pagination>
                </div>
                <el-dialog title="收货地址" :visible.sync="isShowCover">                
                        <el-row>
                            <el-col :span="3">
                                   姓名： 
                            </el-col>
                            <el-col :span="11">
                                <el-input v-model="message.name" auto-complete="off" placeholder="请输入内容" size="small" ></el-input>                                
                            </el-col>
                            <el-col :span="12"></el-col>
                           </el-row>
                           <el-row>

                           </el-row>
                                 <el-row>
                                     <el-col :span="3">
                                        省份：
                                     </el-col>
                            <el-col :span="11">
                                 <el-select v-model="message.provicen" clearable placeholder="请选择">
                                    <el-option
                                    v-for="item in province"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.name"
                                    size="mini">
                                    </el-option>
                                </el-select>
                                </el-col> 
                            <el-col :span="12"></el-col>
                           </el-row>
                           <el-row>
                            <el-col :span="3">
                                   电话： 
                            </el-col>
                            <el-col :span="11">
                                <el-input v-model="message.mobile" auto-complete="off" placeholder="请输入内容" size="small" ></el-input>                                
                            </el-col>
                            <el-col :span="12"></el-col>
                           </el-row>
                           <el-row>

                           </el-row>
                           <el-row>
                            <el-col :span="3">
                                   电子邮箱： 
                            </el-col>
                            <el-col :span="11">
                                <el-input v-model="message.email" auto-complete="off" placeholder="请输入内容" size="small" ></el-input>                                
                            </el-col>
                            <el-col :span="12"></el-col>
                           </el-row>
                           <el-row>

                           </el-row>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="isShowCover = false">取 消</el-button>
                        <el-button type="primary" @click="handleUpdate">确 定</el-button>
                    </div>
                    </el-dialog>
                
    </div>
</template>
<script>

    export default {
      
        data(){
            return {
                pageState:{
                    currentPage:1,
                      pagesize:10,
                    sortby:"mobile",
                    sortdirection:1,
                  
                },
                isShowCover:false,
                message:{
               
                },
                 province: [
                    { name: "北京市" },
                    { name: "天津市" },
                    { name: "河北省" },
                    { name: "山西省" },
                    { name: "内蒙古" },
                    { name: "辽宁省" },
                    { name: "吉林省" },
                    { name: "黑龙江省" },
                    { name: "上海市" },
                    { name: "江苏省" },
                    { name: "浙江省" },
                    { name: "安徽省" },
                    { name: "福建省" },
                    { name: "江西省" },
                    { name: "山东省" },
                    { name: "河南省" },
                    { name: "湖北省" },
                    { name: "湖南省" },
                    { name: "广东省" },
                    { name: "广西" },
                    { name: "海南省" },
                    { name: "重庆市" },
                    { name: "四川省" },
                    { name: "贵州省" },
                    { name: "云南省" },
                    { name: "西藏" },
                    { name: "陕西省" },
                    { name: "甘肃省" },
                    { name: "青海省" },
                    { name: "宁夏" },
                    { name: "新疆" },
                    { name: "台湾省" },
                    { name: "澳门" },
                    { name: "香港" }
                ]
            }
        },
         created() {
            this.$store.dispatch('GETALL',this.pageState)
        },
        computed:{
            listArr(){
                return this.$store.state.mapList.results
            },
            amount(){
                return this.$store.state.mapList.amount
            }
        },
        methods:{
            handleSizeChange(val) {
                this.handleCurrentChange(1)
               this.pageState.pagesize=val;
               this.$store.dispatch("GETALL",this.pageState);
            },
            handleCurrentChange(val) {
              this.pageState.currentPage=val;
              this.$store.dispatch("GETALL",this.pageState);
            },
            changeSort(val){
                this.handleCurrentChange(1)
                this.pageState.sortby=val.prop;
                if(val.order=="ascending"){
                   this.pageState.sortdirection=1
                }else if(val.order=="descending"){
                    this.pageState.sortdirection=-1
                }
                 this.$store.dispatch("GETALL",this.pageState)
            },
            updateList(props){
               this.isShowCover=true;
               this.message={
                   ...props
               };
             
            },
            handleUpdate(){
               this.isShowCover=false;
               this.$store.dispatch("UPDATEUSER",this.message);
             
            },
            handleDel(id) {
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                    this.$store.dispatch("DELUSER",id).then(()=>{
                        this.$store.dispatch("GETALL",this.pageState)
                    })
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            }
        },
     
    }
</script>