// 获取所有的图片元素
const images = document.querySelectorAll('img');

// 给每个图片元素添加点击事件监听器
images.forEach(img => {
    img.addEventListener('click', () => {
        // 切换 'active' 类来控制放大效果
        img.classList.toggle('active');
    });
});
