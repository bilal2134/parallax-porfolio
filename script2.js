document.getElementById('readMoreBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action (navigation) of the click
    var moreText = document.getElementById('more');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline'; // Show the additional text
        this.textContent = 'Read Less!'; // Change the button text
    } else {
        moreText.style.display = 'none'; // Hide the additional text
        this.textContent = 'Read More!'; // Change the button text back
    }
});