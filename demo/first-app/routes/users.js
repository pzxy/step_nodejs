var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/sign', function (req, res) {
    // views/user/sign.ejs
    res.render('user/sign');
});

// router.get('/do/sign', function (req, res) {
//     var name = req.query.name;
//     var email = req.query.email;
//     res.send('恭喜' + name + '注册成功，你的邮箱为:' + email);
// });

router.post('/do/sign', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    res.send('恭喜' + name + '注册成功，你的邮箱为:' + email);
});


router.get('/sign2', function (req, res) {
    res.render('user/sign2')
});

router.post('/do/sign2', function(req, res) {
    var name = req.body.name;
    var result = {};
    if (!name) {
        result.code = 1;
        result.msg = '账号不能为空';
        res.send(result);
        return;
    }
    var email = req.body.email;
    if (!email) {
        result.code = 2;
        result.msg = '邮箱不能为空';
        res.send(result);
        return;
    }
    res.send({code : 0});
});


module.exports = router;
