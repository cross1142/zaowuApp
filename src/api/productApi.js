import Mock from 'mockjs'
const Random = Mock.Random

function getProductList() {
    // promise处理未来事件,模拟网络延时
    var promise = new Promise((resolve, reject) => {
        var kindList = [];
        for (var i = 0; i < 5; i++) {
            var goodsKind = {
                id: Random.guid(),
                title: Random.title(1),
                ctitle: Random.ctitle(2),
                img: Random.image('70x70', Random.color()),
                subKindList: []
            }
            for (var j = 0; j < 6; j++) {
                var subGoodsKind = {
                    //父类id
                    pId: goodsKind.id,
                    id: Random.guid(),
                    ctitle: Random.ctitle(2)
                }
                goodsKind.subKindList.push(subGoodsKind);
            }
            kindList.push(goodsKind);
        }
        setTimeout(() => {
            resolve(kindList);
        }, 2000);
    })
    return promise;
}
export default {
    getProductList
}