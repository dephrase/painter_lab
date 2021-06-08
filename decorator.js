const Decorator = function(){
    this.paintStock = []
}


Decorator.prototype.addPaintCan = function(paint_can){
    this.paintStock.push(paint_can)
}

Decorator.prototype.getTotalPaint = function(){
    totalPaint = 0
    for(paintCan of this.paintStock){
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


module.exports = Decorator