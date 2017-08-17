const setGutter = (x = 10, y = 10) => {
    if (x < 0 || y < 0) {
        console.error('图片间距必须大于等于0')
        return false
    }
    this.options.gutter = {x, y}
    this.updateLayout()
    return true
}

const setPuzzleHeight = (height = 500) =>{
    if (!Number.isInteger(height) || height < 0) {
        console.error('拼图布局高度必须是正整数')
        return false
    }
    this.options.puzzleHeight = height
    this.updateLayout()
    return true
}

const setWaterfallColumn = (column = 4) => {
    if (!Number.isInteger(column) || column < 0) {
        console.error('瀑布流列数必须为正整数')
        return false
    }
    this.options.waterfallColumn = column
    this.updateLayout()
    return true
}

const setBarrelHeight = (min = 200) => {
    if (!Number.isInteger(min) || min < 0) {
        console.error('木桶布局最小高度必须为正整数')
        return false
    }
    this.options.barrelMinHeight = min
    this.updateLayout()
}

module.exports = {
    setGutter,
    setPuzzleHeight,
    setWaterfallColumn,
    setBarrelHeight
}