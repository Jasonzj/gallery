import React, { Component } from 'react'
import Gallery from 'utils/Gallery'
import { getRandomColor, getRandomResize } from 'utils/utils'

import 'utils/Gallery.css'

class GalleryCon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                'http://placehold.it/1300x1600/E97452/fff',
                'http://placehold.it/1300x1300/4C6EB4/fff',
                'http://placehold.it/1300x1250/449F93/fff',
                'http://placehold.it/800x400/936FBC/fff',
                'http://placehold.it/1000x500/D25064/fff',
                'http://placehold.it/1300x1200/D25064/fff',
                'http://placehold.it/749x1327/D25064/fff'
            ],
            resize: { x: 520, y: 200 },
            layout: 2
        }
    }

    componentDidMount() {
        this.gallery = new Gallery('.gallery')
        this.gallery.setImage(this.state.images, {})
    }

    changeResize(num, change) {
        const resize = this.state.resize
        resize[change] = num
        this.setState({ resize })
    }

    addPhoto = (random) => {
        let url = `http://placehold.it/${this.state.resize.x}x${this.state.resize.y}/${getRandomColor()}/fff`
        if (random) {
            const resize = getRandomResize()
            url = `http://placehold.it/${resize.x}x${resize.y}/${getRandomColor()}/fff`
            this.setState({ resize })
        }
        this.gallery.addImage(url, true)
    }

    changeLayout = (layout) => {
        this.setState({ layout })
        this.gallery.setLayout(layout)
    }

    render() {
        const { resize, layout } = this.state

        return (
            <div>
                <div className="gallery" />
                <div className="control">
                    <h1>控制台</h1>
                    <p>
                        <input
                            type="text"
                            value={resize.x}
                            onChange={e => this.changeResize(e.target.value, 'x')}
                        />
                        <input
                            type="text"
                            value={resize.y}
                            onChange={e => this.changeResize(e.target.value, 'y')}
                        />
                        <button onClick={() => this.addPhoto(false)}>添加图片</button>
                        <button onClick={this.addPhoto}>添加随机大小图片</button>
                    </p>
                    <p>
                        <input
                            type="radio"
                            id="PUZZLE"
                            checked={layout === 1}
                            onChange={() => this.changeLayout(1)}
                        />
                        <label htmlFor="PUZZLE">拼图布局</label>
                        <input
                            type="radio"
                            id="WATERFALL"
                            checked={layout === 2}
                            onChange={() => this.changeLayout(2)}
                        />
                        <label htmlFor="WATERFALL">瀑布布局</label>
                        <input
                            type="radio"
                            id="BARREL"
                            checked={layout === 3}
                            onChange={() => this.changeLayout(3)}
                        />
                        <label htmlFor="BARREL">木桶布局</label>
                    </p>
                </div>
            </div>
        )
    }
}

export default GalleryCon