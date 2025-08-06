// Function to show the loading overlay
function showLoader() {
    const loaderDiv = document.createElement('div');
    loaderDiv.id = 'loading';
    document.body.appendChild(loaderDiv);
}

// Function to hide the loading overlay
function hideLoader() {
    const loader = document.getElementById("loading");
    if (loader) {
        loader.remove();
    }
}

// Existing loader function (modified to only hide the loader)
function loader (all) {
  var total = 0, loaded = 0, s,
  ready = () => {
    loaded++;
    if (loaded>=total) { hideLoader(); }
  };

  if (Array.isArray(all)) {
    total = all.length;
    all.forEach(url => {
      if (url.toLowerCase().includes(".css")) {
        s = document.createElement("link");
        s.rel = "stylesheet";
        s.href = url;
        s.onload = ready; s.onerror = ready;
      }
      else {
        s = document.createElement("script");
        s.async = true;
        s.src = url;
        s.onload = ready; s.onerror = ready;
      }
      document.head.appendChild(s);
    });
  }
  else { ready(); }
}

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

document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll(".fade-in-container");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, {
      threshold: 0.1 // Adjust this value to trigger the animation earlier or later
    }
  );

  containers.forEach(container => {
    observer.observe(container);
  });
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

document.addEventListener('DOMContentLoaded', () => {
    // List of your image filenames
    const images = [
        'images/das_augegross0.webp',
        'images/das_augegross2.webp',
        'images/das_augegross3.webp',
        'images/das_augegross4.webp',
        'images/das_augegross5.webp',
        'images/das_augegross6.webp',
        'images/das_augegross7.webp',
        'images/das_augegross8.webp',
        'images/das_augegross9.webp',
        'images/das_augegross10.webp',
        'images/das_augegross11.webp',
        'images/das_augegross12.webp',
        'images/das_augegross13.webp',
        'images/das_augegross14.webp',
        'images/das_augegross15.webp',
        'images/das_augegross16.webp',
    ];

    const imageContainer = document.querySelector('.image-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

    // Function to load and display the current image
    const displayImage = (index) => {
        // Clear previous content
        imageContainer.innerHTML = '';

        // Create a new image element
        const img = document.createElement('img');
        img.src = images[index];

        // Add the image to the container
        imageContainer.appendChild(img);

        // Update button visibility
        updateButtons();
    };

    // Function to update the visibility of the navigation buttons
    const updateButtons = () => {
        prevBtn.style.display = (currentImageIndex > 0) ? 'block' : 'none';
        nextBtn.style.display = (currentImageIndex < images.length - 1) ? 'block' : 'none';
    };

    // Event listener for the "Next" button
    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            displayImage(currentImageIndex);
        }
    });

    // Event listener for the "Previous" button
    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            displayImage(currentImageIndex);
        }
    });

    // Initial load: display the first image
    if (images.length > 0) {
        displayImage(currentImageIndex);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollableContent = document.getElementById('scrollableContent');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');

    // Function to scroll the container using buttons
    const scrollContainer = (direction) => {
        const scrollAmount = 300; // Adjust the scroll distance as needed
        if (direction === 'left') {
            scrollableContent.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else if (direction === 'right') {
            scrollableContent.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Add event listeners to the buttons
    if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => scrollContainer('left'));
        scrollRightBtn.addEventListener('click', () => scrollContainer('right'));
    }

    // NEW: Add a wheel event listener for vertical scrolling
    if (scrollableContent) {
        scrollableContent.addEventListener('wheel', (event) => {
            // Prevent the default vertical scrolling behavior
            event.preventDefault();

            // Calculate the horizontal scroll based on the vertical scroll
            // event.deltaY is the vertical scroll amount.
            // We'll use a multiplier to control the speed of the horizontal scroll.
            const scrollSpeed = 1.5;
            scrollableContent.scrollLeft += event.deltaY * scrollSpeed;
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeItems = document.querySelectorAll(".fade-in-item");
    const delay = 100; // Delay in milliseconds (adjust as needed)

    fadeItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("visible");
        }, index * delay);
    });
});