let db = require('../db/index');

exports.tengxun=(req,res)=>{
    var sql='SELECT * FROM webgis.tengxun';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.tengxunByemotion=(req,res)=>{
    var sql='SELECT * FROM webgis.tengxun';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.zhongxin=(req,res)=>{
    var sql='SELECT * FROM webgis.zhongxin;';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.weibo1=(req,res)=>{
    var sql='SELECT * FROM webgis.weibo1;';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.wangyi=(req,res)=>{
    var sql='SELECT * FROM webgis.wangyi;';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.xinlang=(req,res)=>{
    var sql='SELECT * FROM webgis.xinlang;';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.TengXunById=(req,res)=>{
    var sql='SELECT tid FROM webgis.tengxun;';
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}