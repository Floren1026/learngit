let mysql = require('mysql')

let db = mysql.createPool({
    host: 'localhost',//mysql连接ip地址
    user: 'root',
    password: 'mysql',//mySql用户名密码
    database: 'webgis',//mySql数据库名
    port: '3306'//mysql连接端口
})

module.exports=db