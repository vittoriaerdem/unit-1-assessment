
/*----- constants -----*/ 


/*----- app's state (variables) -----*/ 
var count;

/*----- cached element references -----*/ 
var output = document.querySelector('h1 span');
var input = document.getElementById('inputValue');

/*----- event listeners -----*/ 
document.getElementById('add').addEventListener('click', function() {
  count += parseInt(input.value);
  render();
});

document.getElementById('sub').addEventListener('click', function() {
  count -= parseInt(input.value);
  render();
});

/*----- functions -----*/
function render() {
  output.textContent = (count >= 0 ? '' : '') + count;
  output.style.color = count >= 0 ? 'black' : 'red'
}

function init() {
  count =  0;
  render();
}

init();