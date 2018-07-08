var express=require("express");
var fs = require("fs");
var formidable = require("formidable");
var path = require("path");
var url = require("url");

var session = require("express-session");
var registctrl = require("./controllers/registctrl.js");
var loginctrl = require("./controllers/loginctrl.js");


var app = express();

var mongoose = require("mongoose");
mongoose.connect("localhost/worktime");

var Yonghu = require("./models/Yonghu.js");

app.set("view engine", "ejs");

app.set('trust proxy', 1);
app.use(session({
    resave: false,
    secret: 'qasystem',
    saveUninitialized: true,
    cookie: { maxAge: 86400 } //session能够存储的时间
}));


//门神
app.get("/", function (req, res, next) {
    if (!req.session.login) {
        res.redirect("/login");
    } else {
        next(); //放行
    }
})



app.get("/users", function (req, res) {
    //得到一堆GET请求
    var page = url.parse(req.url, true).query.page || 1;
    var pagesize = parseInt(url.parse(req.url, true).query.pagesize) ||10
    var sortby = url.parse(req.url, true).query.sortby || "mobile";
    var sortdirection = url.parse(req.url, true).query.sortdirection || 1;
    var search = url.parse(req.url, true).query.search || "";


    const CHAXUNOBJ = {
        "$or": [
            { "name": new RegExp(search, "g") },
            { "mobile": new RegExp(search, "g") },
            { "email": new RegExp(search, "g") },
            { "provicen": new RegExp(search, "g") }
        ]
    };

  

    //先统计数量
    Yonghu.count(CHAXUNOBJ, function (err, amount) {
        Yonghu.find(CHAXUNOBJ).sort({ [sortby]: sortdirection }).skip(pagesize * (page - 1))
        .limit(pagesize).exec(function (err, docs) {
            res.json({ "amount": amount, "results": docs });
      
        });
    });
    

});



app.patch("/users/:id", function (req, res) {
    var form = new formidable.IncomingForm();
        Yonghu.update({ "id": req.params.id }, {
            "$set": {
                ...fileds.params
            }
        }, function (err) {
             Yonghu.findOne({ "id": req.params.id }, function (err, docs) {
                res.json({"results":docs})
        })
        }); 
});


app.delete("/users/:id", function (req, res) {
    Yonghu.remove({ "id": req.params.id }, function (err) {
        res.json({ "result": 1 })
    })


});   



app.use(express.static("www"));

app.get("/regist", registctrl.showRegist);
app.post("/regist", registctrl.doRegist);
app.checkout("/regist", registctrl.checkAdminExist);
app.get("/login", loginctrl.showLogin);
app.post("/login", loginctrl.doLogin);

app.listen(3000,function(){
    console.log(3000)
});