function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "information";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "information";
    moreText.style.display = "inline";
  }
}

// Get the h1 element and link
var titleLink = document.getElementById('titleLink');

// Add event listener for mouse hover
titleLink.addEventListener('mouseover', function() {
  // Change the text to "office archive" on hover
  titleLink.textContent = 'office repository';
  // Update the link to the "office archive" event
  titleLink.href = "https://benofficestudio.github.io/officerepository/";
});

// Add event listener for mouseout
titleLink.addEventListener('mouseout', function() {
  // Change the text back to "office repository" when not hovering
  titleLink.textContent = 'office archive';
  // Update the link back to the "office repository" (same link for simplicity)
  titleLink.href = "https://benofficestudio.github.io/officerepository/";
});