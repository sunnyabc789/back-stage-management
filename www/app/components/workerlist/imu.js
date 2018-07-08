var path = require("path");
var fs = require("fs");



//得到基数据文件的地址
var jishujudizhi = path.resolve(__dirname, "province.json");
//得到要生成的文件的地址
var monishujudizhi = path.resolve(__dirname, "模拟数据.txt");

//先删除要得到的文件
fs.writeFileSync(monishujudizhi, "");
console.log("模拟数据.txt文件已经清空，下面我为你生成新的");


//用fs模块读取它
fs.readFile(jishujudizhi, function (err, data) {
    var dataArr = JSON.parse(data.toString());
    //遍历100项，创建一些新的属性
    for (var i = 0; i < dataArr.length; i++) {
       delete dataArr[i].city
        //直接追加到文件中,末尾的那个杠n杠r表示换行
        fs.appendFileSync(monishujudizhi, JSON.stringify(dataArr[i]) + ",");
    }
    console.log("模拟数据写入成功！快打开模拟数据.txt看看吧！");
});

