
const Decorator = function(){
    this.paintStock = []
}

Decorator.prototype.addPaintCan = function(paint_can){
    this.paintStock.push(paint_can)
}

Decorator.prototype.getTotalPaint = function(){
    let totalPaint = 0
    for(const paintCan of this.paintStock){
        totalPaint += paintCan.litres
    }
    return totalPaint
}

Decorator.prototype.canWePaint = function(room){
    totalPaint = this.getTotalPaint()
    area = room.area
    if(totalPaint < area){
        return false;
    } else {
        return true;
    }
}

Decorator.prototype.paint = function(readyToPaint, room){
    if (readyToPaint){
        let area = room.area
        let remainingArea = room.area
        
        for(const paint_can of this.paintStock){
            if(paint_can.litres <= remainingArea){
                remainingArea = remainingArea - paint_can.litres
                paint_can.litres = 0
            } else {
                paint_can.litres -= remainingArea
            }
        }
        room.painted = true
    }
}

Decorator.prototype.removeEmptyCans = function(){
    let count = 0
    for(const can of this.paintStock){
        if(can.litres === 0){
            this.paintStock.splice(count, 1)
        }
        count++;
    }
}


module.exports = Decorator