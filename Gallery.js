/**
 * Gallery
 * Version: v0.0.1
 * @Author: Jason 
 */

 ;((root, factory) => {
    if (typeof define === 'function' && define.amd) {
        define(factory)
    } else if (typeof exports === 'object') {
        module.exports = factory
    } else {
        root.Gallery = factory()
    }
})(this, () => {

    'use strict'

    class Gallery {
        constructor(containerSelector) {
            this.container = document.querySelector(containerSelector)
            this.galleryBox = null
            this.LAYOUT = {
                PUZZLE: 1,      // 拼图
                WATERFALL: 2,   // 瀑布流
                BARREL: 3       // 木桶
            }
            this.options = {
                layout: 2,                  // 布局类型
                waterfallColumn: 4,         // 瀑布流布局列数
                fullScreen: false,          // 是否全屏
                puzzleHeight: 600,          // 拼图高度
                barrelHeight: {             // 木桶布局最小行高
                    min: 200,
                    max: 250
                },       
                gutter: { x: 10, y: 10 },   // 木桶布局间距
                images: [],                 // 图片数组
            }
            this.columns = []           // 瀑布流列数组
            this.nPhotos = []           // 木桶布局未加入行数组
            this.nPhotosWrap = null     // 木桶布局未加入行容器
            this.resizeTimer = null     // 木桶布局自适应timer
            this.onresize = false       // 监听容器宽度
            this.imgIndex = 0           // 图片索引
            this.cacheWidth = this.container.clientWidth
            
            this.init()
        }
    }

    return Gallery

})