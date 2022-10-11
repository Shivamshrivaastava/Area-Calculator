const button = document.getElementById('calculate');
let area = 0;
function calculateArea() {
  // get the selected shape
  let shape = document.getElementById('shapes').value;
  // calculate the shapes area
  switch (shape) {
    case 'circle':
      let radius = document.getElementById('radius').value;
      area = Math.PI * radius * radius;
      break;
    case 'triangle':
      let base = document.getElementById('base').value;
      let height = document.getElementById('height').value;
      area = (base * height) / 2;
      break;
    case 'square':
      let side = document.getElementById('side').value;
      area = side * side;
      break;
    case 'rectangle':
      let length = document.getElementById('length').value;
      let width = document.getElementById('width').value;
      area = length * width;
      break;
  }
  document.getElementById('output').innerHTML = 'Area = ' + area;
}
button.addEventListener('click', calculateArea);
