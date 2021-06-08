const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe("Decorator", function(){

    let decorator
    let paint_can

    beforeEach(function(){
        decorator = new Decorator()
        paint_can = new PaintCan(10)
    });

    it('should have an empty paint stock', function(){
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 0)
    });

    it('should be able to add can of paint to paint stock', function(){
        decorator.addPaintCan(paint_can)
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 1)

    })

    it('should be able to calculate total litres in stock', function(){
        let paint1 = new PaintCan(5)
        decorator.addPaintCan(paint_can)
        decorator.addPaintCan(paint1)
        const actual = decorator.getTotalPaint()
        assert.strictEqual(actual, 15)
    });

    it('should calculate if we have enough paint - We dont', function(){
        let room1 = new Room(50)
        decorator.addPaintCan(paint_can)
        const actual = decorator.canWePaint(room1)
        assert.strictEqual(actual, false)
    });

    it('should calculate if we have enough paint - We do', function(){
        let room1 = new Room(50)
        let can = PaintCan(50)
        decorator.addPaintCan(paint_can)
        decorator.addPaintCan(can)
        const actual = decorator.canWePaint(room1)
        assert.strictEqual(actual, true)
    });

})