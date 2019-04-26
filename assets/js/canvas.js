var canvas = new fabric.Canvas('c', {
    isDrawingMode: true
});

fabric.Object.prototype.transparentCorners = false;

var clear = $('.clear-canvas')

clear.on('click', function() {
    canvas.clear();
});
    