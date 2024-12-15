// 获取站长微信的div和照片容器
var wechatOwner = document.getElementById('wechatOwner');
var wechatImageContainer = document.getElementById('wechatImageContainer');

// 为站长微信的div添加点击事件
wechatOwner.addEventListener('click', function() {
    wechatImageContainer.style.display = 'block'; // 显示照片容器
});

// 监听整个文档的点击事件
document.addEventListener('click', function(event) {
    // 检查点击事件的目标是否为站长微信的div或照片容器
    if (event.target !== wechatOwner && event.target !== wechatImageContainer && event.target.parentNode !== wechatImageContainer) {
        wechatImageContainer.style.display = 'none'; // 隐藏照片容器
    }
});