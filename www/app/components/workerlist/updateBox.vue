<style lang="less" scoped>
    // .updateSelect{
    //     position: relative;
    // }
</style>
<template>
    <div class="updateBox">
        <el-form ref="form" :model="message" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="message.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
           <el-select v-model="message.province" placeholder="请选择">
                <el-option
                v-for="item in province"
                :key="item.name"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    
     
    </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {
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
    };
  }
};
</script>