
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
        room.painted = true
    }
}


module.exports = Decorator