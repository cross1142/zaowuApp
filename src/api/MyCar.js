import Mock from 'mockjs'
const Random = Mock.Random
    //内衣详情
function getevaluation() {
    // promise处理未来事件,模拟网络延时
    var promise = new Promise((resolve, reject) => {
        var kindList = [];
        for (var i = 0; i < 3; i++) {
            var goodsKind = {
                id: Random.guid(),
                title: Random.title(1),
                img: Random.image('76x76', Random.color()),
                price: Random.natural(260, 1000),
                text: Random.cparagraph(1),
                isShow: false,
                count: 1
            }
            kindList.push(goodsKind);
        }
        setTimeout(() => {
            resolve(kindList);
        }, 500);
    })
    return promise;
}

function buyData(id) {
    var promise = new Promise((resolve, reject) => {
        var kindList = [];
        for (var i = 0; i < 1; i++) {
            var goodsKind = {
                id: Random.guid(),
                title: Random.title(1),
                img: Random.image('76x76', Random.color()),
                price: Random.natural(260, 1000),
                text: Random.cparagraph(1),
                isShow: false,
                count: 1
            }
            kindList.push(goodsKind);
        }
        setTimeout(() => {
            resolve(kindList);
        }, 500);
    })
    return promise;

}
export default {
    getevaluation,
    buyData
}