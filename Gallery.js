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
        constructor() {
            
        }
    }

    return Gallery

})