const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', function() {
  const heading = document.getElementById('heading');
  heading.textContent = "Text Changed!";
});

const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
  const heading = document.getElementById('heading');
  heading.style.color = "blue";
});

const toggleElementBtn = document.getElementById('toggleElementBtn');
toggleElementBtn.addEventListener('click', function() {
  const newElement = document.getElementById('newElement');
  if (newElement.style.display === "none") {
    newElement.style.display = "block";
  } else {
    newElement.style.display = "none";
  }
});
