import Mock from 'mockjs'
const Random = Mock.Random
    //内衣详情
function getevaluation() {
    // promise处理未来事件,模拟网络延时
    var promise = new Promise((resolve, reject) => {
        var kindList = [];
        for (var i = 0; i < 5; i++) {
            var goodsKind = {
                id: Random.guid(),
                title: Random.title(1),
                img: Random.image('50x50', Random.color()),
                data: Random.date(),
                text: Random.cparagraph(1, 4)
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
    getevaluation
}