let db = require('../db/index');

exports.get = (req, res) => {
    var sql = 'select * from webgis.news'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
},

    exports.resource = (req, res) => {
        var sql = 'select resource from webgis.news'
        db.query(sql, (err, data) => {
            if (err) {
                return res.send('错误：' + err.message)
            }
            res.send(data)
        })
    }

exports.platform = (req, res) => {
    var sql = 'select platform from webgis.news'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.weibo = (req, res) => {
    var sql = 'select * from webgis.weibo'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.positive = (req, res) => {
    var sql = 'select * from webgis.news where emotion="中性" or emotion="积极"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.negtive = (req, res) => {
    var sql = 'select * from webgis.news where emotion="消极"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.minsheng = (req, res) => {
    var sql = 'select * from webgis.news where class="民生"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.jinrong = (req, res) => {
    var sql = 'select * from webgis.news where class="金融"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.wenyu = (req, res) => {
    var sql = 'select * from webgis.news where class="文娱"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.waijiao = (req, res) => {
    var sql = 'select * from webgis.news where class="外交"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.tianqi = (req, res) => {
    var sql = 'select * from webgis.news where class="天气"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.jiaoyu = (req, res) => {
    var sql = 'select * from webgis.news where class="教育"'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}