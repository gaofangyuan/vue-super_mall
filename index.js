var express = require("express");
var app = express();

app.listen(80,()=>console.log('服务启动'));

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var questions = {
    banner: {
        data: 213,
        num: 4545,
        age: 12,
        title: ['74-0-lubanu.jpg', 'jpg_q50.jpg', 'jpg_q50.jpg', '347106-0-picassobanner.jpg'],
        img: [
            'http://gw.alicdn.com/imgextra/i4/74/O1CN01kN84Sl1CPvuclr5U6_!!74-0-lubanu.jpg', 
            'https://img.alicdn.com/simba/img/TB1opVQKhv1gK0jSZFFSuv0sXXa.jpg_q50.jpg',
            'https://img.alicdn.com/simba/img/TB1KRQjBkL0gK0jSZFxSutWHVXa.jpg_q50.jpg',
            'http://picasso.alicdn.com/imgextra/i4/347106/O1CNA1xHWlPu100d9487898f0b0866c8000o_!!347106-0-picassobanner.jpg'
        ],
        img3: [
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i1/T1s1N0FHVcXXXXXXXX_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i3/3898002436/O1CN01vqghlP1TrjO5yCgxO_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i4/2274100812/O1CN01hjFAmX1Hrw8IGMAP7_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i1/739441392/O1CN01lzGar91M9ZuaxZqoT_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i1/4156286767/O1CN01G0VXje1zrKgjLOkqZ_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i1/2206375220337/O1CN01NCddqq1EMO4jbiYMX_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i2/TB1watQRpXXXXXlXXXXXXXXXXXX_!!0-item_pic.jpg'
            },
            {
                name: '数码产品',
                img: 'http://gw.alicdn.com/bao/uploaded/i1/925588507/O1CN015JDe7h2CiFuwJ2luc_!!2-item_pic.png'
            }
        ]
    }, 
    mall: {
        data: '商品数据',
        mallCart: [
            {
                cartTitle: '商品名称',
                cartImg: 'http://gw.alicdn.com/bao/uploaded/i2/268874631/O1CN01NF6Jsi1k52gKJKZjq_!!0-item_pic.jpg_500x500q90.jpg',
                cartPrice: 64.48
            },{
                cartTitle: '商品名称',
                cartImg: 'http://gw.alicdn.com/bao/uploaded/i2/268874631/O1CN01NF6Jsi1k52gKJKZjq_!!0-item_pic.jpg_500x500q90.jpg',
                cartPrice: 64.48
            },{
                cartTitle: '商品名称',
                cartImg: 'http://gw.alicdn.com/bao/uploaded/i2/268874631/O1CN01NF6Jsi1k52gKJKZjq_!!0-item_pic.jpg_500x500q90.jpg',
                cartPrice: 64.48
            }
        ]
    }, 
    cart: {
        data: '购物车数据',
        userCart: [
            {
                cartTitle: '商品名称',
                cartImg: 'http://gw.alicdn.com/bao/uploaded/i2/268874631/O1CN01NF6Jsi1k52gKJKZjq_!!0-item_pic.jpg_500x500q90.jpg',
                cartPrice: 64.48
            },{
                cartTitle: '商品名称',
                cartImg: 'http://gw.alicdn.com/bao/uploaded/i2/268874631/O1CN01NF6Jsi1k52gKJKZjq_!!0-item_pic.jpg_500x500q90.jpg',
                cartPrice: 64.48
            },{
                cartTitle: '商品名称',
                cartImg: 'http://gw.alicdn.com/bao/uploaded/i2/268874631/O1CN01NF6Jsi1k52gKJKZjq_!!0-item_pic.jpg_500x500q90.jpg',
                cartPrice: 64.48
            }
        ]
    }, 
    user: {
        userName: '用户test3213122'
    }
};

app.get('/123', function(req, res) {
    res.status(200),
    res.json(questions)
});

// var server = app.listen(3000, function() {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log("Example app listening at http://%s:%s", host, port);
// })