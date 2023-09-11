let express = require('express')
let router = express.Router()
let news = require('./API/news.js')
let redian = require('./API/redian.js')

router.get('/news', news.get)
router.get('/news/resource', news.resource)
router.get('/news/platform', news.platform)
router.get('/news/weibo',news.weibo)
router.get('/news/positive',news.positive)
router.get('/news/negtive',news.negtive)

router.get('/news/wenyu',news.wenyu)
router.get('/news/minsheng',news.minsheng)
router.get('/news/waijiao',news.waijiao)
router.get('/news/jinrong',news.jinrong)
router.get('/news/tianqi',news.tianqi)
router.get('/news/jiaoyu',news.jiaoyu)

router.get('/News/TengXun',redian.tengxun)
router.get('/News/TengXunByEmotion',redian.tengxunByemotion)
router.get('/News/ZhongXin',redian.zhongxin)
router.get('/News/WeiBo1',redian.weibo1)
router.get('/News/WangYi',redian.wangyi)
router.get('/News/XinLang',redian.xinlang)
router.get('/News/TengXunById',redian.TengXunById)

module.exports = router