var path = require("path");
var fs = require("fs");
var mockjs = require("mockjs");

var Random=mockjs.Random;

var imulateData=path.resolve(__dirname,"用户模拟数据.txt");

fs.writeFileSync(imulateData,"");
console.log("模拟数据.txt已清空，下面生成新数据");


for (let i = 0; i < 20000; i++) {
    let o = {};
    //姓名
    o.name = Random.cname();
    //手机号
    o.mobile = Random.integer(10000000000, 99999999999).toString();
    //邮箱
    o.email = Random.email()
    //省份
    o.provicen = Random.province();

    o.id=i+1;


    fs.appendFileSync(imulateData, JSON.stringify(o) + "\n\r");
   
}
console.log("模拟数据写入成功！");