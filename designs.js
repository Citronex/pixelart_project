
$( document ).ready(function() {

var gridHeight = $('#inputHeight');
var gridHeightVal = gridHeight.val();

var gridWidth = $('#inputWeight');
var gridWidthVal = gridWidth.val();

var colorPicker = $('#colorPicker');
var colorPickerValue = colorPicker.val();

var pixelCanvasTable = $('#pixelCanvas');

// Select color input
colorPicker.on('change', function(){
    colorPickerValue = colorPicker.val();
});
// Select size input
gridHeight.on('change', function(){
    gridHeightVal = gridHeight.val();
});
gridWidth.on('change', function(){
    gridWidthVal = gridWidth.val();
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {

    var totalCells = "";
    var cell = 1;
    var grid = "";
    while(cell <= parseInt(gridWidthVal)){
        totalCells += "<td></td>";
        cell++;
    }

    for(row = 1; row <= parseInt(gridHeightVal); row++){
        grid += pixelCanvasTable.append("<tr>" + totalCells + "</tr>");
    }
}

// Submit button listener
$('#sizePicker').submit(function(event){
    event.preventDefault();
    pixelCanvasTable.empty();
    makeGrid();
});

//color cells
$('#pixelCanvas').on('click', 'td', function(evt){
    $(evt.target).css('background-color', colorPickerValue);

});
});