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