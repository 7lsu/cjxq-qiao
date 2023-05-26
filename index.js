const axios = require('axios')
const crypto = require('crypto')

function buildContext(t) {
    var e = ''
    for (var r in t) {
        var i = t[r]
        0 == e.length ? (e += r + '=' + i) : (e += '&' + r + '=' + i)
    }
    return e
}

function start() {
    const cardIdsRelease = ['864974377869770752', '864963040213073920', '864962686356410370']
    const customerId = ''

    let data = {
        grantCode: 'b38a7ff13a',
        nonce: Math.floor(1e6 * Math.random()),
        openId: '6e7f87343f2f02ab2a51840aae64e721',
        timestamp: Math.floor(new Date().getTime() / 1e3)
    }

    const message = buildContext(data)
    const hmac = crypto.createHmac('sha1', '7o4IinMLrjsBQReRazp2oKC5tEMzUvuNnaISAkIJMqQHnwd5Na')
    hmac.update(message)
    const digest = hmac.digest('base64')
    const token = encodeURIComponent(digest)
    data.token = token
    data.params = {
        bizId: '',
        couponId: cardIdsRelease[0],
        customerId: customerId,
        num: 1,
        thirdChannel: '1213'
    }
    console.log(data)
    const url = 'https://douyin.zxkjlc.net/v3/coupon/issueCouponsToCustomer'
    axios
        .post(url, data, {
            headers: {
                'user-agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6919',
                'content-type': 'application/json',
                referer: 'https://cocos-games.fir.show/'
            }
        })
        .then((response) => {
            console.log(response.data)
        })
}

start()
// https://webapi.qmai.cn/web/seller/account/login-minp
