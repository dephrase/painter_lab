const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe("PaintCan", function(){

    let paintCan

    beforeEach(function(){
        paintCan = new PaintCan(10)
    });

    it('should have a number of litres', function(){
        const actual = paintCan.litres
        assert.strictEqual(actual, 10)
    });

    it('should be able to check if empty', function(){
        const actual = paintCan.checkEmpty()
        assert.strictEqual (actual, false)
    });

    it('should be able to empty itself of paint', function(){
        paintCan.empty();
        const actual = paintCan.litres
        assert.strictEqual(actual, 0)
    })

})