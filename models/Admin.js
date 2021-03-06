var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	"email" : String ,		//email
	"password" : String ,	//密码，加密之后的密码
	"nickname" :{
		"type" : String,
		"default" : "没有昵称"
	},	//昵称
	"introduction" : {
		"type" : String,
		"default" : "这家伙很懒，什么都没有留下"
	},	//简介
	"avatar" : {
		"type" : String,
		"default" : "/images/defaultAvatar.jpg"
	} //数据库中不保存图片，只保存图片的文件名。
});

module.exports = mongoose.model("Admin" , schema);