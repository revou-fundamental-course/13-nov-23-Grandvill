let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName('img');
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = 'block';
  setTimeout(displayImages, 2000);
}

function validateForm() {
  let x = document.forms['message-us']['name'].value;
  if (x == '') {
    alert('Name must be filled out');
    return false;
  }
  let y = document.forms['message-us']['email'].value;
  if (y == '') {
    alert('Email must be filled out');
    return false;
  }
  let z = document.forms['message-us']['option'].value;
  if (z == '') {
    alert('option must be filled out');
    return false;
  }
}
