function openFullscreen(imgSrc) {
    var modal = document.getElementById("fullscreenModal");
    var modalImg = document.getElementById("img01");

    modal.style.display = "block"; // Show the modal
    modalImg.src = imgSrc; // Set the source of the modal image to the clicked image's source
}

function closeFullscreen() {
    var modal = document.getElementById("fullscreenModal");
    modal.style.display = "none"; // Hide the modal
}

// Optional: Close modal with Escape key
document.addEventListener('keydown', function(event) {
    var modal = document.getElementById("fullscreenModal");
    if (event.key === "Escape" && modal.style.display === "block") {
        closeFullscreen();
    }
});

(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('asyncImage');  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ?
        item.src = item.dataset.src :
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();