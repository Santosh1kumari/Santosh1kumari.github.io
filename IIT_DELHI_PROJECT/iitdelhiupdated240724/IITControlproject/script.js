
var count = 0;
var image = [];
image[0] = 'slider/image1.jpg';
image[1] = 'slider/image2.jpg';
image[2] = 'slider/image3.jpeg';
image[3] = 'slider/image5.jpg';
image[4] = 'slider/image.jpg';

function slider() {
    document.slide.src = image[count];
    if (count < image.length - 1) {
        count++;
    } else {
        count = 0;
    }
    setTimeout(slider, 5000); // Change image every 5 seconds
}

window.onload = slider; // Start the slider when the page loads



// / Function to display the selected iframe
    function display(id) {
        // Get all iframes
        const iframes = document.querySelectorAll('iframe');

        // Hide all iframes
        iframes.forEach(frame => {
            frame.style.display ='none';
        });

        // Show the selected iframe
        const selectedFrame = document.getElementById(id);
        if (selectedFrame) {
            selectedFrame.style.display = 'block';
        }
    }

    document.getElementById('homeLink').addEventListener('click', function(event) {
        // Prevents the default link behavior
    


    });

  