
$(function() {
  var colors = ['yellow', 'green', 'blue', 'red'];
  var tipover = $('.tipover');
  var tipoverSolution = $('.tipover-solution');

  var boardCells = createBoard(tipover);
  var solutionCells = createBoard(tipoverSolution);
  var hammer = tipover.hammer();

  var solutionBoard = createBoard(tipoverSolution);

  hammer.on('touch', 'td', function(ev) {
    var cell = $(this);
    var color = cell.attr('class');
    var cellIndex = cell.data('cellIndex');

    var newColor = getNextColor(color);

    changeColor(cell, newColor);

    var solutionCell = solutionCells[cellIndex];
    changeColor(solutionCell, newColor);
    solutionCell.html(cellIndex + 1);

    ev.stopPropagation();
  })

  function createBoard(container) {
    var board = $('<table/>');
    var cellIndex = -1;
    var cells = new Array(36);

    for (var x = 0; x < 6; x++) {
      var row = $('<tr/>').appendTo(board);
      for (var y = 0; y < 6; y++) {
        var cell = $('<td/>').appendTo(row);
        cellIndex += 1;
        cell.data('cellIndex', cellIndex);
        cells[cellIndex] = cell;
      };
    };

    board.appendTo(container);
    return cells;
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



