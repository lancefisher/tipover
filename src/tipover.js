
$(function() {
  var container = $('.tipover');
  var board = createBoard(container);
  var colors = ['yellow', 'green', 'blue', 'red'];

  function createBoard(container) {
    var board = $('<table/>');

    for (var x = 0; x < 6; x++) {
      var row = $('<tr/>').appendTo(board);
      for (var y = 0; y < 6; y++) {
        var cell = $('<td/>').appendTo(row);
        cell.click(clickCell);
      };
    };

    board.appendTo(container);
  }

  function clickCell() {
    var cell = $(this);
    var color = cell.attr('class');
    var newColor = getNextColor(color);

    changeColor(cell, newColor);
  }

  function  getNextColor(color) {
    var i = colors.indexOf(color) + 1;
    if (i > colors.length) {
      return '';
    }

    return colors[i];
  }

  function changeColor(cell, color) {
    cell.removeClass();
    if (color) {
      cell.addClass(color)
    }
  }



});



