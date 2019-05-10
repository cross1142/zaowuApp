import Mock from 'mockjs'
const Random = Mock.Random
    //内衣详情
function goodslist() {
    // promise处理未来事件,模拟网络延时
    var promise = new Promise((resolve, reject) => {
        var kindList = [];
        for (var i = 0; i < 1; i++) {
            var goodsKind = {
                id: Random.guid(),
                title: Random.title(1),
                ctitle: Random.ctitle(2),
                img: Random.image('340x354', Random.color()),
                price: Random.natural(260, 1000),
                text1: Random.cparagraph(1),
                text2: Random.cparagraph(1),
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