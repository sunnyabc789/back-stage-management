本项目需要有Node.js+Mongo数据库环境

运行Mongo数据库后
插入数据
mongoimport -d worktime -c yonghus ./init/用户模拟数据.txt --drop

运行app.js

访问3000端口 即可运行项目