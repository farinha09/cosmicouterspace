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
