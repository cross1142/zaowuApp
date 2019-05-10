import Mock from 'mockjs'
const Random = Mock.Random
    //内衣详情
function goodslist() {
    // promise处理未来事件,模拟网络延时
    var promise = new Promise((resolve, reject) => {
        var kindList = [];
        for (var i = 0; i < 6; i++) {
            var goodsKind = {
                id: Random.guid(),
                title: Random.title(1),
                ctitle: Random.ctitle(2),
                img: Random.image('129x129', Random.color()),
                price: Random.natural(260, 1000)
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
    goodslist
}