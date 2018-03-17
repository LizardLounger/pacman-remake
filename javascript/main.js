(function() {


function mainLoop() {
    window.requestAnimationFrame(mainLoop);

    x = x + directionX;
    y = y + directionY;

    pacmanElement.style.left = x + 'px';
    pacmanElement.style.up = y + 'px';
  }

  var pacmanElement = document.getElementById('pacman');
  if (!pacmanElement)
      throw new Error('Cannot find element!');
  
  var x = 0,
      y = 0,
      directionX = 0,
      directionY = 0



  
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
      pacmanElement.style.left = '500px';
    } else if (event.code === 'ArrowRight') {

    } else if (event.code === 'ArrowUp') {

    } else if (event.code === 'ArrowDown') {

    }
  }, true);
})();